import React from 'react'
import {Link, graphql} from 'gatsby'
import Home from '../components/home'

import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    sanitySiteSettings {
      author {
        _rawBio
      }
    }
    allSanitySoftware {
      edges {
        node {
          title
          link
          logo {
            asset {
              fixed(width: 60) {
                src
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const bio = (data || {}).sanitySiteSettings.author._rawBio[0].children[0].text
  const software = (data || {}).allSanitySoftware.edges

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Layout>
        <h1 hidden>Welcome to {site.title}</h1>
        <Home bio={bio} software={software} />
      </Layout>
    </>
  )
}

export default IndexPage
