import { Link } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import Icon from "./icon";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <HeaderRoot>
    <HeaderWrapper>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={{ color: "#285684" }}>
              REEL
            </Link>
          </li>
          <li>
            <Link to="/work" activeStyle={{ color: "#285684" }}>
              WORK
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={{ color: "#285684" }}>
              ABOUT
            </Link>
          </li>
          <li>
            <a href="http://linkedin.com/in/erikhals" target="blank">
              <Icon symbol="linkedin" />
            </a>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  </HeaderRoot>
);

const HeaderRoot = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 244, 0, 0) 100%
  );
  margin: 0 auto;
  padding: 1em;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 450px) {
    padding: 1.5em 1.5em;
  }
`;

const Nav = styled.nav`
  & ul {
    display: flex;
    justify-items: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  & ul li a {
    display: block;
    margin-left: 1em;
    padding: 0.5em;
    color: var(--color-black);
    text-decoration: none;
  }

  @media (hover: hover) {
    & ul li a:hover {
      color: var(--color-accent);
    }
  }
`;
export default Header;
