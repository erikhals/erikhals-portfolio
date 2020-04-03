import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query SoftwaresQuery {
    allSanitySoftware {
      edges {
        node {
          title
          logo {
            asset {
              fluid(maxWidth: 10) {
                src
              }
            }
          }
        }
      }
    }
  }
`

const uses = (props) => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return (
    <Layout>
      <SEO title='Uses' />
      <Container>
        <h1 className={responsiveTitle1}>Uses</h1>
        <h2>Hardware </h2>
        <ul>
          <li>Macbook Pro 15 Retina Mid 2012</li>
          <li>Logitech G402 Mouse</li>
        </ul>
        <h2>Softwares</h2>
        <ul>
          {data.allSanitySoftware.edges.map(({node}) => {
            return (<li key={node.title}>{node.title}</li>)})}
        </ul>
      </Container>
    </Layout>
  )
}

export default uses
