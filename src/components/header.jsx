import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"


import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      siteMetadata: site {
        siteMetadata {
          social {
            instagram
            twitter
          }
        }
      }
    }
  `)

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <nav className={styles.navMain}>
          <span>
            <Link to="/" className={styles.navHomeLink}>
            South  Australia  Violin  School
            </Link>
          </span>

          <div className={styles.navItemList}>
            <Link
              to="/"
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Home
            </Link>
            <Link
              to="/course"
              className={styles.navItem}
              activeClassName={styles.navItemActive}
              partiallyActive={true}
            >
              Courses
            </Link>
            <Link
              to="/gallery"
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={styles.navItem}
              activeClassName={styles.navItemActive}
              partiallyActive={true}
            >
              Contact
            </Link>
            
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
