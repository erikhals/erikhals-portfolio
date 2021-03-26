import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Img from "gatsby-image";
import { Background, LeftArrow } from "./layout";

const variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const About = props => {
  return (
    <AboutPage>
      <Background
        fluid={props.background.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
      />

      <StickerWrapper>
        <StickerGrid>
          {props.softwares &&
            props.softwares.map(node => (
              <Sticker
                key={node.title}
                onMouseEnter={() => props.setSoftwareInfo(node.title)}
                onMouseLeave={() => props.setSoftwareInfo("hidden")}
              >
                <Img fluid={node.logo.asset.fluid} />
              </Sticker>
            ))}
        </StickerGrid>
      </StickerWrapper>
      <LeftArrow to="/work" />
      <EducationGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {props.education &&
          props.education.map(node => (
            <FramedPicture key={node.title} whileHover={{ scale: 1.05 }}>
              <Link to={`/education/${node.slug.current}`}>
                <img
                  src={imageUrlFor(buildImageObj(node.mainImage))
                    .width(600)
                    .url()}
                  alt={node.mainImage.alt}
                />
              </Link>
            </FramedPicture>
          ))}
      </EducationGrid>
      <AnimatePresence>
        {props.softwareInfo != "hidden" && (
          <SoftwareInfoBox
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <h2>{props.softwareInfo}</h2>
            {props.softwareDescription}
          </SoftwareInfoBox>
        )}
      </AnimatePresence>
    </AboutPage>
  );
};
const AboutPage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
`;

const StickerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 178vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const StickerGrid = styled.div`
  position: absolute;
  top: 57%;
  bottom: 40%;
  right: 40%;
  left: 44%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4 1fr);
  padding: 2vh;
  filter: drop-shadow(0px 1px 1px #777);
`;
const Sticker = styled.div`
  transform: rotate(${props => props.randomRot * 15}deg);
  display: block;
  object-fit: contain;
  width: 70%;
  max-height: 100%;
  cursor: pointer;
  & :hover {
    transform: scale(1.1);
  }
`;
const EducationGrid = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  top: 10%;
  left: 10%;
`;
const FramedPicture = styled(motion.div)`
  margin-right: 2vw;
  filter: drop-shadow(1px 1px 2px #111);
  & img {
    max-width: 200px;
    max-height: 200px;
    box-sizing: border-box;
    border: 12px solid #123;
    object-fit: contain;
    @media (max-width: 650px) {
      max-width: 150px;
      max-height: 150px;
      border: 8px solid #123;
    }
  }
`;

const SoftwareInfoBox = styled(motion.div)`
  position: absolute;
  width: 40ch;
  bottom: 45%;
  left: 50%;
  margin-left: -20ch;
  background: rgba(255, 255, 255, 0.6);
  padding: 16px;
  border-radius: 10px;
  & h2 {
    margin: 0;
  }
  @media (max-width: 650px) {
    width: 30ch;
    margin-left: -15ch;
  }
`;

export default About;
