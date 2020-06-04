import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import ProjectPreview from './project-preview'
import {BlueBG, NavButton} from './layout'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import img from '../images/wood_texture.jpg'

const Work = props => (
  <WorkPage>
    <BlueBG />
    <WorkGrid>
      {props.nodes &&
        props.nodes.map(node => (
          <Picture to={`/project/${node.slug.current}`} key={node.id}>
            <img
              src={imageUrlFor(buildImageObj(node.mainImage))
                .width(600)
                .url()}
              alt={node.mainImage.alt}
            />
          </Picture>
        ))}
    </WorkGrid>
    <NavButton to='/.'>Home</NavButton>
  </WorkPage>
)

const WorkPage = styled.div`
  padding: 10em;
  @media (max-width: 450px) {
    padding: 1em;
  }
`

const WorkGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-flow: dense;
  gap: 1em;
  & li {
    list-style: none;
  }
`
const Picture = styled(Link)`
  width: 100%;
  filter: drop-shadow(1px 1px 1px #111);
  &:nth-child(1) {
    grid-column: auto / span 2;
  }
  & img {
    box-sizing: border-box;
    object-fit: contain;
    width: 100%;
  }
`

export default Work
