import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"


import styles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            instagram
            twitter
          }
          mailchimpUrl
        }
      }
    }
  `)

  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerColumnName}>
          <span className={styles.name}>South Australia Violin School</span>
          <p className="f5">
           
          </p>
         
        </div>
        <div className={styles.footerColumnLinks}>
          <Link to="/" className={styles.navItem}>
            Home
          </Link>
          <Link to="/course" className={styles.navItem}>
            Courses
          </Link>
          <Link to="/gallery" className={styles.navItem}>
            Gallery
          </Link>
          <Link to="/contact" className={styles.navItem}>
            Contact
          </Link>
          <hr />
          <div>
          </div>
        </div>
       
      </footer>
    </div>
  )
}

export default Footer
