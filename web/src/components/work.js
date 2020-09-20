import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const Work = props => (
  <WorkPage>
    <Greeting>
      <h1>Hello!</h1>
      <p>{props.bio}</p>
    </Greeting>

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
  @media (max-width: 650px) {
    padding: 6em;
  }
  @media (max-width: 450px) {
    padding: 1em;
  }
`;

const Greeting = styled.div`
  align-self: center;
  max-width: 40rem;
  margin: 5rem 0;
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
  &:nth-child(3) {
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
