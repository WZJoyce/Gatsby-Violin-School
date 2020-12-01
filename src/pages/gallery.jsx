import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import AboutContent from "../components/about-content"
import AboutContentVerse from "../components/about-content-verse"



const AboutPage = ({ data }) => {
  return (
    <Layout title="Gallery" pathName="/Gallery">
      <h1 className="page-heading">Gallery</h1>

      <AboutContent
       
        copy={data.gallerySectionOne.html}
        image={data.gallerySectionOne.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.gallerySectionOne.frontmatter.imageAlt}
      />

      <AboutContentVerse
        
        copy={data.gallerySectionTwo.html}
        image={data.gallerySectionTwo.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.gallerySectionTwo.frontmatter.imageAlt}
      />

      <AboutContent
        
        copy={data.gallerySectionThree.html}
        image={data.gallerySectionThree.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.gallerySectionThree.frontmatter.imageAlt}
      />

      <AboutContentVerse
        copy={data.gallerySectionFour.html}
        image={data.gallerySectionFour.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.gallerySectionFour.frontmatter.imageAlt}
      />

      
    </Layout>
  )
}

export const query = graphql`
  query {
    gallerySectionOne: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "gallery-1" }
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
      html
    }
    gallerySectionTwo: markdownRemark(
      frontmatter: { type: { eq: "page-content" }, name: { eq: "gallery-2" } }
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
      html
    }
    gallerySectionThree: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "gallery-3" }
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
      html
    }
    gallerySectionFour: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "gallery-4" }
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
      html
    }
   
  }
`

export default AboutPage
