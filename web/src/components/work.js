import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const Work = props => (
  <WorkPage>
    <Greeting>
      <h1>Designer / Developer</h1>
      <p>{props.bio}</p>
    </Greeting>
    {props.skills && (
      <SkillSelector>
        {props.skills.map(node => (
          <SkillButton
            key={node.title}
            onClick={() => props.setSkill(node.title)}
          >
            <img src={node.logo.asset.fluid.src} />
            <span>{node.title}</span>
          </SkillButton>
        ))}
      </SkillSelector>
    )}
    <WorkGrid>
      {props.nodes &&
        props.nodes
          .filter(
            node =>
              !props.skill ||
              node.skills.find(skill => skill.title === props.skill)
          )
          .map(node => {
            return (
              <Picture to={`/project/${node.slug.current}`} key={node.id}>
                <img
                  src={imageUrlFor(buildImageObj(node.mainImage))
                    .width(600)
                    .url()}
                  alt={node.mainImage.alt}
                />
              </Picture>
            );
          })}
    </WorkGrid>
  </WorkPage>
);

const WorkPage = styled.div`
  padding: 8em 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 650px) {
    padding: 6em;
  }
  @media (max-width: 450px) {
    padding: 1em;
  }
`;

const SkillSelector = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const SkillButton = styled.button`
  margin: 5px;
  position: relative;
  padding: 0.7em;
  background-color: white;
  border: none;
  cursor: pointer;
  /* Tooltip text */
  & span {
    visibility: hidden;
    width: 120px;
    background-color: #567;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
  }
  :hover span {
    visibility: visible;
    opacity: 1;
  }

  &:focus {
    outline: 0;
    border-color: black;
  }
  & img {
    width: 40px;
    height: 40px;
  }
`;

const Greeting = styled.div`
  text-align: center;
  margin: auto;
  padding: 5rem 0;
  & h1 {
    line-height: 6rem;
    font-size: 6rem;
    font-weight: 1000;
    margin: 0;
  }
`;

const WorkGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, 120px);
  grid-auto-flow: dense;
  justify-items: center;
  gap: 1em;
  & li {
    list-style: none;
  }
  @media (max-width: 650px) {
    grid-template-columns: minmax(100%, 1fr);
  }
`;
const Picture = styled(Link)`
  width: 100%;

  &:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
    @media (max-width: 960px) {
      grid-column: auto;
      grid-row: auto;
    }
  }
  & img {
    box-sizing: border-box;
    border-radius: 5px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export default Work;
