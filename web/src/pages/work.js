import React, { useState } from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";
import Work from "../components/work";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query WorkPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    background: file(relativePath: { eq: "Work_BG.jpg" }) {
      id
      childImageSharp {
        fluid(jpegQuality: 90) {
          ...GatsbyImageSharpFluid
        }
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

const WorkPage = props => {
  const { data, errors, location } = props;

  //Error handling
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  // Sort projects by category
  const [skill, setSkill] = useState(
    (location.state && location.state.skill) || ""
  );

  const [hidedrawer, setHidedrawer] = useState(false);

  // Clean up the data
  const site = (data || {}).site;
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
          background={data.background}
          nodes={projectNodes}
          skill={skill}
          skills={skills}
          setSkill={setSkill}
          hidedrawer={hidedrawer}
          setHidedrawer={setHidedrawer}
        />
      )}
    </Layout>
  );
};

export default WorkPage;
