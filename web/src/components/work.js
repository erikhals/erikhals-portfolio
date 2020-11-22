import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import img from "../images/Work_BG.jpg";

const Work = props => (
  <WorkPage>
    <WorkGrid>
      <AnimateSharedLayout>
        <AnimatePresence>
          {props.nodes &&
            props.nodes
              .filter(
                node =>
                  !props.skill ||
                  node.skills.find(skill => skill.title === props.skill)
              )
              .map(node => {
                return (
                  <Picture
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    to={`/project/${node.slug.current}`}
                    key={node.id}
                  >
                    <img
                      src={imageUrlFor(buildImageObj(node.mainImage))
                        .width(600)
                        .url()}
                      alt={node.mainImage.alt}
                    />
                  </Picture>
                );
              })}
        </AnimatePresence>
      </AnimateSharedLayout>
    </WorkGrid>
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
  </WorkPage>
);

const WorkPage = styled.div`
  padding: 8em 10em;
  background-image: url(${img});
  background-size: cover;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const SkillButton = styled.button`
  margin: 5px;
  background: none;
  position: relative;
  padding: 0.7em;
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

const Picture = styled(motion.custom(Link))`
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
