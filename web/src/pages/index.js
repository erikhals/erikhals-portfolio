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

  const [skill, setSkill] = useState("");

  const site = (data || {}).site;
  const bio = (data || {}).sanitySiteSettings.author._rawBio[0].children[0]
    .text;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  const skillsNodes = (data || {}).skills ? mapEdgesToNodes(data.skills) : [];

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
        <Work title="Work" nodes={projectNodes} bio={bio} skill={skill} />
      )}
      {skillsNodes.map(node => (
        <button onClick={() => setSkill(node.title)}>{node.title}</button>
      ))}
    </Layout>
  );
};

export default IndexPage;
