import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import About from "../components/about";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";

import { ResponsiveTitle1 } from "../components/typography";

export const query = graphql`
  query AboutPageQuery {
    education: allSanityProject(
      limit: 3
      sort: { fields: [publishedAt], order: ASC }
      filter: {
        slug: { current: { ne: null } }
        publishedAt: { ne: null }
        category: { title: { eq: "Education" } }
      }
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          slug {
            current
          }
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
            link
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

const AboutPage = props => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const educationNodes =
    data &&
    data.education &&
    mapEdgesToNodes(data.education).filter(filterOutDocsWithoutSlugs);

  console.log(educationNodes);
  return (
    <Layout>
      <SEO title="Life" />
      <About education={educationNodes} />
    </Layout>
  );
};

export default AboutPage;
