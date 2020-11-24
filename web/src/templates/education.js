import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Project from "../components/project";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query EducationTemplateQuery($id: String!) {
    Education: sanityEducation(id: { eq: $id }) {
      id
      places {
        _id
        title
        logo {
          asset {
            fluid {
              src
            }
          }
        }
      }
      relatedProjects {
        title
        _id
        slug {
          current
        }
      }
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
      softwares {
        _id
        logo {
          asset {
            fixed(height: 30, width: 30) {
              src
            }
          }
        }
        title
        link
      }
      skills {
        _id
        logo {
          asset {
            fixed(height: 30, width: 30) {
              src
            }
          }
        }
        title
      }
      title
      slug {
        current
      }
      _rawBody
    }
  }
`;

const EducationTemplate = props => {
  const { data, errors } = props;
  const education = data && data.Education;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {education && <SEO title={education.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <Container>{education && <Project {...education} />}</Container>
    </Layout>
  );
};

export default EducationTemplate;
