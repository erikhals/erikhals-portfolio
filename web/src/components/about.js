import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import img from "../images/About_BG.jpg";

const About = props => {
  console.log(props);
  return (
    <AboutPage>
      <Background>
        <EducationGrid>
          {props.education &&
            props.education.map(node => (
              <FramedPicture to={`/project/${node.slug.current}`} key={node.id}>
                <img
                  src={imageUrlFor(buildImageObj(node.mainImage))
                    .width(600)
                    .url()}
                  alt={node.mainImage.alt}
                />
              </FramedPicture>
            ))}
        </EducationGrid>
      </Background>
    </AboutPage>
  );
};
const AboutPage = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Background = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
`;
const EducationGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1em;
`;
const FramedPicture = styled(Link)`
  width: 100%;
  align-self: end;
  filter: drop-shadow(1px 1px 1px #111);
  grid-column: auto / span 4;
  &:nth-child(1) {
    grid-column: span 3;
  }
  & img {
    box-sizing: border-box;
    border: 1em solid #123;
    object-fit: contain;
    width: 100%;
  }
`;
export default About;
