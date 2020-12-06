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
  width: 100%;
  list-style: none;
`

export default ProjectPreviewGrid
