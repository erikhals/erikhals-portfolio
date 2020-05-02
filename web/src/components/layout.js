import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import favicon from './icon/favicon.ico'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Helmet>
      {' '}
      <link rel='icon' href={favicon} />{' '}
    </Helmet>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built by Erik Hals
        </div>
      </div>
    </footer>
  </>
)

export default Layout
