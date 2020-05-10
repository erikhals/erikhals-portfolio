import React from 'react'
import styled from 'styled-components'
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
    <Footer>
      <FooterWrapper>
        <SiteInfo>© {new Date().getFullYear()}, Built by Erik Hals</SiteInfo>
      </FooterWrapper>
    </Footer>
  </>
)

const Content = styled.div`
  background: var(--color-white);
  min-height: calc(100% - 73px - 120px);

  @media (min-width: 450px) {
    min-height: calc(100% - 88px - 150px);
  }
`
const Footer = styled.footer`
  border-top: 1px solid var(--color-very-light-gray);

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
const FooterWrapper = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  padding: 4.5em 1.5em 1.5em;
  margin: 0 auto;

  @media (min-width: 450px) {
    padding: 6em 2em 2em;
  }
`

const SiteInfo = styled.div`
  text-align: center;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
`

export default Layout
