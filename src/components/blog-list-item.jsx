import React from "react"
import Img from "gatsby-image"
import styles from "./blog-list-item.module.scss"

const BlogListItem = ({ node}) => {
  return (
    <div key={node.id}>
     
        <div className={styles.post}>
          <div className={styles.postColumn}>
            <h2 className={styles.title}>{node.frontmatter.title}</h2> 
            <div 
          dangerouslySetInnerHTML={{ __html: node.html }}
        ></div>
               
            <p>{node.frontmatter.excerpt}</p>
            <p>{node.frontmatter.description}</p>           
          </div>
          <div className={styles.postColumn}>
            <Img
              fluid={node.frontmatter.image.childImageSharp.fluid}
              alt={node.frontmatter.imageAlt}
            />
          </div>
        </div>
      
    </div>
  )
}




export default BlogListItem
