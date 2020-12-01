import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ContactContent from "../components/contact-content"
import ContactFinal from "../components/contact-final"
import styles from "./contact.module.scss"


const ContactPage = ({ data }) => {
  return (
    <Layout title="Contact" pathName="/contact">
      <h1 className="page-heading">Contact</h1>
      <ContactContent
        heading={data.contactSectionFour.frontmatter.heading}
        copy={data.contactSectionFour.html}
        />
      <section className={styles.finalSectionWrapper}>
        <div>
        <ContactFinal
         image={data.contactSectionFinal.frontmatter.image.childImageSharp.fluid}
         imageAlt={data.contactSectionFinal.frontmatter.imageAlt}
        />
          
          
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {  
    contactSectionFour: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "about-4" }
      }
    ) {
      frontmatter {
        heading       
      }
      html
    }
    contactSectionFinal: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "about-final" }
      }
    ) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt     
      }
      
    }
  
  }
`

export default ContactPage
