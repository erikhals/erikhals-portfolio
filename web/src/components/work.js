import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { BlueBG } from "./layout";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

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
  </WorkPage>
);

const WorkPage = styled.div`
  padding: 8em 10em;
  @media (max-width: 650px) {
    padding: 6em;
  }
  @media (max-width: 450px) {
    padding: 1em;
  }
`;

const WorkGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, 120px);
  grid-auto-flow: dense;
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
  filter: drop-shadow(1px 1px 1px #111);
  &:nth-child(1) {
    grid-column: 2 / span 2;
    grid-row: 2 / span 2;
    @media (max-width: 960px) {
      grid-column: auto;
      grid-row: auto;
    }
  }
  & img {
    box-sizing: border-box;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export default Work;
