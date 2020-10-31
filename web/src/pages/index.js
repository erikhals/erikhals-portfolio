import React, { useState } from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import Work from "../components/work";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    sanitySiteSettings {
      author {
        _rawBio
      }
    }
    skills: allSanitySkill {
      edges {
        node {
          title
        }
      }
    }
    projects: allSanityProject(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          forClient
          skills {
            title
            logo {
              asset {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
          softwares {
            title
            logo {
              asset {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  // Set the category to sort projects by
  const [skill, setSkill] = useState("");

  // Clean up the data
  const site = (data || {}).site;
  const bio = (data || {}).sanitySiteSettings.author._rawBio[0].children[0]
    .text;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  // Get skills from projects and remove duplicates
  const skills = projectNodes
    .flatMap(node => node.skills)
    .filter(
      (skill, index, self) =>
        index === self.findIndex(s => s.title === skill.title)
    );

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }
  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <h1 hidden>Welcome to {site.title}</h1>

      {projectNodes && (
        <Work
          title="Work"
          nodes={projectNodes}
          bio={bio}
          skill={skill}
          skills={skills}
          setSkill={setSkill}
        />
      )}
    </Layout>
  );
};

export default IndexPage;
