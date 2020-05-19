import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    Project: sanityProject(id: {eq: $id}) {
      id
      publishedAt
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
      video {
        asset {
          _key
          _type
          assetId
          filename
          playbackId
          status
          thumbTime
        }
        _key
        _type
      }
      videoLink
      title
      slug {
        current
      }
      _rawBody
    }
  }
`

const ProjectTemplate = props => {
  const {data, errors} = props
  const project = data && data.Project
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {project && <SEO title={project.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} />}
    </Layout>
  )
}

export default ProjectTemplate
