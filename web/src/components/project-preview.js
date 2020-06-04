import {Link} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import {Tooltip} from './layout'
import BlockText from './block-text'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

function ProjectPreview (props) {
  return (
    <StyledProjectPreview left={props.left}>
      <LeadMediaThumb to={`/project/${props.slug.current}`} left={props.left}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </LeadMediaThumb>
      <TitleBlock to={`/project/${props.slug.current}`}>
        <h3>{props.title}</h3>
        {props._rawExcerpt && (
          <span>
            <BlockText blocks={props._rawExcerpt || []} />
          </span>
        )}
      </TitleBlock>

      <SkillBlock left={props.left}>
        {props.skills.map(skill => (
          <li key={skill.title}>
            <Tooltip left={props.left}>
              <img
                key={skill.title}
                src={skill.logo.asset.fluid.src}
                alt={skill.title}
              />
              <span>{skill.title}</span>
            </Tooltip>
          </li>
        ))}
      </SkillBlock>
      <SoftwareBlock>
        {props.softwares &&
          props.softwares.map(software => (
            <a href={software.link} target='_blank' key={software.title}>
              <img
                key={software.title}
                src={software.logo.asset.fluid.src}
                alt={software.title}
              />
            </a>
          ))}
      </SoftwareBlock>
    </StyledProjectPreview>
  )
}

const StyledProjectPreview = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ${props => {
    const leftGrid =
      "'software topRight'" + "'image skills'" + "'title lowRight'"
    const rightGrid =
      "'topLeft software'" + "'skills image'" + "'lowLeft title'"
    return props.left ? leftGrid : rightGrid
  }};
  grid-gap: 1em;
  color: inherit;
  text-decoration: none;
  @media (max-width: 450px) {
    grid-template-columns: auto auto;
  }
`

const LeadMediaThumb = styled(Link)`
  position: relative;
  padding-bottom: 66.666%;
  background: #eee;
  grid-area: image;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`
const TitleBlock = styled(Link)`
  grid-area: title;
  color: inherit;
  text-align: left;
  text-decoration: none;
  :hover h3 {
    text-decoration: underline;
  }
`
const SkillBlock = styled.ul`
  grid-area: skills;
  text-align: ${props => (props.left ? 'left' : 'right')};
  list-style: none;
  padding-left: 0;
  & img {
    display: inline-block;
    margin: 0px 5px;
    width: 3em;
    height: 3em;
  }
`

const SoftwareBlock = styled.div`
  grid-area: software;
  & img {
    display: inline-block;
    margin: 0px 5px;
    width: 2em;
    height: 2em;
  }
`
export default ProjectPreview
