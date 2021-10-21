import React, { useState } from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import About from "../components/about";
import SEO from "../components/seo";
import LayoutContainer from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";

export const query = graphql`
  query AboutPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    background: file(relativePath: { eq: "About_BG.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 3000, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    education: allSanityEducation(sort: { fields: endedAt, order: ASC }) {
      edges {
        node {
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
          slug {
            current
          }
          title
          _rawBody
        }
      }
    }
    softwares: allSanitySoftware(filter: { featured: { ne: false } }) {
      edges {
        node {
          title
          description
          logo {
            asset {
              fluid(maxWidth: 30) {
                ...GatsbySanityImageFluid
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
  const site = (data || {}).site;
  const educationNodes =
    data && data.education && mapEdgesToNodes(data.education);
  const softwareNodes =
    data && data.softwares && mapEdgesToNodes(data.softwares);
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }
  const [softwareInfo, setSoftwareInfo] = useState("hidden");
  let softwareDescription = "";

  if (softwareInfo != "hidden") {
    softwareDescription = softwareNodes.find(
      node => node.title === softwareInfo
    ).description;
  }

  return (
    <LayoutContainer>
      <SEO title="Life" />
      <About
        education={educationNodes}
        softwares={softwareNodes}
        site={site}
        background={data.background}
        softwareInfo={softwareInfo}
        setSoftwareInfo={setSoftwareInfo}
        softwareDescription={softwareDescription}
      />
    </LayoutContainer>
  );
};

export default AboutPage;
