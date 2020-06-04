import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'gatsby'
import Header from './header'
import Helmet from 'react-helmet'
import GlobalStyle from '../styles/globalStyle'
import favicon from './icon/favicon.ico'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Helmet>
      {' '}
      <link rel='icon' href={favicon} />{' '}
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
)

const Content = styled.div`
  min-height: 100%;
`
const Footer = styled.footer`
  box-sizing: border-box;
  max-width: 960px;
  padding: 4.5em 1.5em 1.5em;
  margin: 0 auto;

  @media (min-width: 450px) {
    padding: 6em 2em 2em;
  }
  & a {
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: var(--color-accent);
      }
    }
  }
`
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
`

export const NavButton = styled(Link)`
  text-decoration: none;
  color: #56ccf2;
  position: fixed;
  top: 50%;
  ${props => (props.right ? 'right: 5vw;' : 'left: 5vw;')}
  width: 3em;
  justify-self: center;

  @media (max-width: 450px) {
    display: none;
  }
`

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
    content: ' ';
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
`

const SiteInfo = styled.div`
  text-align: center;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
`

export default Layout
