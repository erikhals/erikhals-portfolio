import { Link } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import Icon from "./icon";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <HeaderRoot>
    <HeaderWrapper>
      <Branding>
        <Link to="/">Erik Hals</Link>
      </Branding>
      <ToggleNavButton onClick={() => (showNav ? onHideNav() : onShowNav())}>
        <Icon symbol="hamburger" />
      </ToggleNavButton>
      <Nav showNav={showNav}>
        <ul>
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
  margin: 0 auto;
  padding: 1em;
  display: flex;
  @media (min-width: 450px) {
    padding: 1.5em 1.5em;
  }
`;

const Branding = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  flex: 1;

  & a {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
    text-decoration: none;
    color: var(--color-black);

    @media (hover: hover) {
      &:hover {
        color: var(--color-accent);
      }
    }
  }
`;

const ToggleNavButton = styled.button`
  appearance: none;
  font-size: 25px;
  border: none;
  background: var(--color-accent);
  margin: 0;
  padding: calc(14 / 17 / 2 * 1rem);
  outline: none;
  color: inherit;
  justify-self: end;
  & svg {
    display: block;
    fill: inherit;
  }

  @media (min-width: 450px) {
    display: none;
  }
`;

const Nav = styled.nav`
  ${props =>
    props.showNav
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
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
    color: var(--color-black);
    text-decoration: none;
  }

  @media (hover: hover) {
    & ul li a:hover {
      color: var(--color-accent);
    }
  }

  @media (max-width: 449px) {
    position: absolute;
    background: var(--color-white);
    color: var(--color-black);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    left: 0;
    right: 0;
    top: 4.3rem;

    & ul {
      padding: 1rem 0;
    }

    & ul li a {
      padding: 0.5rem 1.5rem;
    }
  }

  @media (min-width: 450px) {
    display: block;

    & ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
    }

    & ul li a {
      padding: 0.5rem;
    }
  }
`;
export default Header;
