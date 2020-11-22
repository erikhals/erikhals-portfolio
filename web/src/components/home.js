import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import img from "../images/Home_BG.jpg";

const Home = props => (
  <HomePage>
    <Background>
      <Greeting>
        <h1>Digital Designer</h1>
        <p>{props.bio}</p>
      </Greeting>
    </Background>
  </HomePage>
);

const HomePage = styled.div`
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
  background-position: 80% 50%;
  position: relative;
`;

const Greeting = styled.div`
  text-align: center;
  margin: auto;
  padding: 20vh 0;
  & h1 {
    color: #141e30;
    line-height: 6rem;
    font-size: 6rem;
    font-weight: 1000;
    margin: 0;
  }
`;

export default Home;
