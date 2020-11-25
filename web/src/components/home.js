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
  margin-left: 25vw;
  padding: 20vh 0;
  & h1 {
    color: #141e30;
    line-height: 6rem;
    font-size: 6rem;
    font-weight: 1000;
    margin-top: 0;
    margin-bottom: 0;
  }
  & p {
    width: 40ch;
  }
`;

export default Home;
