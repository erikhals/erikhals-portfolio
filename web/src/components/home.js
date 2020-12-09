import React from "react";
import styled from "styled-components";
import { Background } from "./layout";
import Video from "sanity-mux-player";

const Home = props => (
  <HomePage>
    <Background
      fluid={props.background.childImageSharp.fluid}
      style={{ backgroundPosition: "80% 50%" }}
      alt=""
    />
    <Greeting>
      <h1>Digital Designer</h1>
      <p>{props.bio}</p>
      <Button onClick={() => props.setShowreelopen(!props.showreelopen)}>
        <span /> Showreel
      </Button>
    </Greeting>
    {props.showreelopen && (
      <ShowreelWrapper
        onClick={() => props.setShowreelopen(!props.showreelopen)}
      >
        <Showreel>
          <Video
            assetDocument={props.showreel}
            autoload
            autoplay={true}
            showControls
          />
        </Showreel>
      </ShowreelWrapper>
    )}
  </HomePage>
);

const HomePage = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Greeting = styled.div`
  position: absolute;
  top: 0;
  text-align: left;
  margin: auto;
  padding: 20vh 25vw;
  font-family: "Recursive";
  @media screen and (max-width: 960px) {
    padding: 10vh 15vw;
  }

  & h1 {
    color: var(--color-accent);
    filter: drop-shadow(0 0 0.5rem rgb(255, 255, 255, 0.5));
    font-weight: 500;
    font-variation-settings: "CRSV" 1, "MONO" 1;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 32px;
    @media screen and (min-width: 320px) {
      font-size: calc(32px + 32 * ((100vw - 320px) / 680));
    }
    @media screen and (min-width: 1000px) {
      font-size: 64px;
    }
  }
  & p {
    color: var(--color-accent);
    font-size: 1.2rem;
    max-width: 50ch;
    font-weight: 400;
  }
`;

const ShowreelWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  background: #00000099;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1em;
`;

const Showreel = styled.div`
  width: 100%;
  max-width: 170vh;
  height: 0;
  padding-bottom: 56%;
  margin: auto;
`;

const Button = styled.button`
  cursor: pointer;
  position: relative;
  margin-top: 2em;
  color: var(--color-accent);
  font-family: var(--font-family-sans);
  background: #ffffff10;
  padding: 1em 2em 1em 4em;
  border: none;
  border-radius: 20px;
  box-shadow: -1px 4px 1em #00000040, 1px -4px 1em #ffffff99;
  & span {
    width: 0;
    height: 0;
    border-top: 7.5px solid transparent;
    border-left: 10px solid #fff;
    border-bottom: 7.5px solid transparent;
    position: absolute;
    top: 33%;
    left: 2em;
  }
  &:hover {
    background: #ffffff20;
    box-shadow: -2px 6px 1.5em #00000040, 2px -6px 1.5em #ffffff99;
  }
  &:focus {
    outline: none;
  }
`;

export default Home;
