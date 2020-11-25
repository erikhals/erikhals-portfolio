import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Home from "../components/home";
import Layout from "../containers/layout";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    background: file(relativePath: { eq: "Home_BG.jpg" }) {
      id
      childImageSharp {
        fluid(jpegQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sanitySiteSettings {
      author {
        _rawBio
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

  // Clean up the data
  const site = (data || {}).site;
  const bio = (data || {}).sanitySiteSettings.author._rawBio[0].children[0]
    .text;

  //Error if site settings not found
  if (!site) {
    throw new Error("Having some difficulty reaching the content server");
  }

  //Loading the view component
  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <h1 hidden>Welcome to {site.title}</h1>
      <Home bio={bio} background={data.background} />
    </Layout>
  );
};

export default IndexPage;
