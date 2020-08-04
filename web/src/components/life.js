import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { BlueBG } from "./layout";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import img from "../images/wood_texture.jpg";

const Life = props => {
  return (
    <LifePage>
      <BlueBG />
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
        <Shelf />
      </EducationGrid>
    </LifePage>
  );
};
const LifePage = styled.div`
  padding: 10em;
  @media (max-width: 450px) {
    padding: 1em;
  }
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
const Shelf = styled.div`
  height: 2em;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: -1;
  background-image: url(${img});
`;
export default Life;
