import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Img from "gatsby-image";
import { Background } from "./layout";

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
              <Sticker key={node.title}>
                <Img fluid={node.logo.asset.fluid} />
              </Sticker>
            ))}
        </StickerGrid>
      </StickerWrapper>
      <EducationGrid>
        {props.education &&
          props.education.map(node => (
            <FramedPicture
              to={`/education/${node.slug.current}`}
              key={node.title}
            >
              <img
                src={imageUrlFor(buildImageObj(node.mainImage))
                  .width(600)
                  .url()}
                alt={node.mainImage.alt}
              />
            </FramedPicture>
          ))}
      </EducationGrid>
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
const FramedPicture = styled(Link)`
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

export default About;
