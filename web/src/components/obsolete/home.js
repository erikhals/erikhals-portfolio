import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { BlueBG, NavButton, Tooltip } from "../layout";
import img from "../images/wood_texture.jpg";

const Home = props => {
  return (
    <HomeGrid>
      <BlueBG />
      <Greeting>
        <h1>Hello!</h1>
        <p>{props.bio}</p>
      </Greeting>

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
    </HomeGrid>
  );
};
const HomeGrid = styled.div`
  display: grid;
  height: 100%;
  padding: 0 20vw;
  grid-template-columns: 1fr;
  grid-template-rows: 10fr 1fr 1fr auto auto;
  @media (max-width: 650px) {
    padding: 1em;
  }
`;
const Greeting = styled.div`
  color: #56ccf2;
  align-self: center;
  max-width: 40rem;
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
const Cap = styled.div`
  background: #304352; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #d7d2cc,
    #304352
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #d7d2cc,
    #304352
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 10vw;
  height: 5vw;
  align-self: end;
  justify-self: center;
  grid-row: 2;
  border-top-right-radius: 10vw;
  border-top-left-radius: 10vw;
`;
const MacBook = styled.div`
  position: relative;
  background: lightgrey;
  background: #304352; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #d7d2cc,
    #8093a2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #d7d2cc,
    #8093a2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 50%;
  padding-top: 33%;
  border-radius: 1vw;
  justify-self: center;
  grid-row: 3;
  transform: skew(-1deg);
  @media (max-width: 960px) {
    width: 60%;
    padding-top: 40%;
  }
`;
const StickerGrid = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4 1fr);
  padding: 3vw;
  filter: drop-shadow(0px 1px 1px #777);
`;
const Sticker = styled.div`
  transform: rotate(${props => props.randomRot * 15}deg);
  & img {
    display: block;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    max-height: 100%;
  }
  & img:hover {
    transform: scale(1.1);
  }
`;
const Table = styled.div`
  height: 2em;
  width: 100%;
  grid-row: 4;
  background-image: url(${img});
`;
export default Home;
