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
  const background = (data || {}).sanitySiteSettings.homeImage.asset.fluid.src;

  //Error if site settings not found
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
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
      <Home bio={bio} background={background} />
    </Layout>
  );
};

export default IndexPage;
