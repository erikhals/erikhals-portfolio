import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {ResponsiveTitle1} from '../components/typography'

export const query = graphql`
  query SoftwaresQuery {
    allSanitySoftware {
      edges {
        node {
          title
          logo {
            asset {
              fluid(maxWidth: 30) {
                src
              }
            }
          }
        }
      }
    }
  }
`

const uses = props => {
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
        <ResponsiveTitle1>Uses</ResponsiveTitle1>
        <h2>Hardware </h2>
        <ul>
          <li>Macbook Pro 15 Retina Mid 2012</li>
          <li>Logitech G402 Mouse</li>
        </ul>
        <h2>Software</h2>
        <ul>
          {data.allSanitySoftware.edges.map(({node}) => {
            return (
              <Card key={node.title}>
                <img src={node.logo.asset.fluid.src} />
                <span>{node.title}</span>
              </Card>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}

const Card = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 40px;
  padding: 0.25rem;
  & img {
    top: 0;
    left: 0;
    width: 2em;
    height: 2em;
    margin-right: 1em;
  }
  & span {
  }
`

export default uses
