import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import Header from "./header";
import Helmet from "react-helmet";
import GlobalStyle from "../styles/globalStyle";
import favicon from "./icon/favicon.ico";
import BackgroundImage from "gatsby-background-image";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Helmet>
      {" "}
      <link rel="icon" href={favicon} />{" "}
    </Helmet>
    <GlobalStyle />
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <Content>{children}</Content>
  </>
);

const Content = styled.div`
  min-height: 100%;
`;

export const BlueBG = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  z-index: -100;
`;

export const Background = styled(BackgroundImage)`
  position: fixed;
  min-height: 100vh;
  z-index: -2;
`;

export const ArticleGrid = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;
  padding: 0 10vw 6em 10vw;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (min-width: 1100px) {
    grid-template-columns: 3fr 1fr;
    padding: 1em 4em 6em 4em;
  }
`;

export const LinkBack = styled(Link)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
`;

export const NavButton = styled(Link)`
  text-decoration: none;
  color: #56ccf2;
  position: fixed;
  display: inline-block;
  top: 50%;
  width: 4em;
  height: 4em;
  justify-self: center;
  text-align: center;
  line-height: 4em;
  border-radius: 100%;
  border-style: solid;
  border-width: 1px;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const RightArrow = styled(Link)`
  position: fixed;
  top: 45%;
  right: 3rem;
  width: 3rem;
  height: 3rem;
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  background-image: url("chevron-right.svg");
  background-size: 2rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  transition: transform .3s ease-out;
  @media (max-width: 650px) {
    display: none;
  }
  :hover {
    transform: translate(1em, 0);
`;

export const LeftArrow = styled(Link)`
  position: fixed;
  top: 45%;
  left: 3rem;
  width: 3rem;
  height: 3rem;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  background-image: url("chevron-right.svg");
  background-size: 2rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  transition: transform .3s ease-out;
  transform: rotate(180deg);
  @media (max-width: 650px) {
    display: none;
  }
  :hover {
    transform: translate(-1em, 0);
  }
`;

export const Tooltip = styled.div`
  /* Tooltip container */
  position: relative;
  display: inline-block;

  /* Tooltip text */
  & span {
    visibility: hidden;
    width: 120px;
    background-color: #567;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
  }
  & a {
    text-decoration: none;
    color: #fff;
  }
  /* Tooltip arrow */
  & span::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #567 transparent transparent transparent;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  :hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const SiteInfo = styled.div`
  text-align: center;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
`;

export default Layout;
