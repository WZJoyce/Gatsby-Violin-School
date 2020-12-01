import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Button from "../components/button"
import BlogList from "../components/blog-list"



import styles from "./index.module.scss"

const IndexPage = ({ data }) => {
  

  return (
    <Layout layoutFullWidth title="Home">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroColumnFirst}>
          <Img
            fluid={
              data.heroSectionMarkdown.frontmatter.leftImage.childImageSharp
                .fluid
            }
            alt={data.heroSectionMarkdown.frontmatter.leftImageAlt}
          />
        </div>
        <div className={styles.heroColumnSecond}>
          <h1 className={styles.heroTitle}>
            {data.heroSectionMarkdown.frontmatter.title}
          </h1>
          <p className={styles.heroSubtitle}>
            {data.heroSectionMarkdown.frontmatter.subtitle}
          </p>
        </div>
        <div className={styles.heroColumnThird}>
          <Img
            fluid={
              data.heroSectionMarkdown.frontmatter.rightImage.childImageSharp
                .fluid
            }
            alt={data.heroSectionMarkdown.frontmatter.rightImageAlt}
          />
        </div>
      </section>

      {/* Main Feature*/}
      <section className={styles.mainFeatureSection}>
        <h2 className="section-heading">
          {data.mainFeatureSectionMarkdown.frontmatter.heading}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: data.mainFeatureSectionMarkdown.html,
          }}
        ></div>
        <Button
          linkUrl={data.mainFeatureSectionMarkdown.frontmatter.linkUrl}
          linkText={data.mainFeatureSectionMarkdown.frontmatter.linkText}
        />
      </section>

      {/* our school / our teacher */}
      <section className={styles.latestPostsSection}>
        <h2 className="section-heading">About us</h2>
        <BlogList data={data.latestPosts} />

    
     
      </section>     
    </Layout>
  )
}

export const query = graphql`
  query {
    latestPosts: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "post" } }
        published: { eq: true }
      }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
                   
            excerpt
            description           
            image {
              childImageSharp {
                fluid(maxWidth: 750, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            imageAlt
          }
          html
          id
          
          
        }
      }
    }

   

    heroSectionMarkdown: markdownRemark(
      frontmatter: { type: { eq: "page-content" }, name: { eq: "index-hero" } }
    ) {
      frontmatter {
        title
        subtitle
        leftImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        leftImageAlt
        rightImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        rightImageAlt
      }
      html
    }

    mainFeatureSectionMarkdown: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "index-main-feature" }
      }
    ) {
      frontmatter {
        heading
        linkUrl
        linkText
      }
      html
    }

    aboutSectionMarkdown: markdownRemark(
      frontmatter: { type: { eq: "page-content" }, name: { eq: "index-about" } }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
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

export default IndexPage
