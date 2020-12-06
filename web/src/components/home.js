import React from "react";
import styled from "styled-components";
import { Background } from "./layout";

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
    </Greeting>
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

export default Home;
