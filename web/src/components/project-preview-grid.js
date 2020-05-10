import React from 'react'
import styled from 'styled-components'
import ProjectPreview from './project-preview'

function ProjectPreviewGrid (props) {
  let left = true
  return (
    <StyledProjectPreviewGrid>
      {props.nodes &&
        props.nodes.map(node => {
          left = !left
          return (
            <li key={node.id}>
              <ProjectPreview left={left} {...node} />
            </li>
          )
        })}
    </StyledProjectPreviewGrid>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: []
}

const StyledProjectPreviewGrid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8em;

  @media (min-width: 450px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 675px) {
    grid-template-columns: 1fr;
  }
`

export default ProjectPreviewGrid
