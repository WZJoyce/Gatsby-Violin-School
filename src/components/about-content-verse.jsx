import React from "react"
import Img from "gatsby-image"
import Button from "./button"
import styles from "./about-content.module.scss"
import stylesverse from "./about-content-verse.module.scss"
const AboutContentVerse = ({
  heading,
  copy,
  image,
  
  imageAlt,
  imageFirst,
  button,
}) => {
  let imageClassName = imageFirst
    ? styles.imageWrapperFirst
    : styles.imageWrapper

  return (
    <section className={styles.sectionWrapper}>
    

    
    <div className={stylesverse.copyWrapper}>
      <h2 className="section-heading">{heading}</h2>
      <div
          dangerouslySetInnerHTML={{
            __html: copy,
          }}
      ></div>
    {button && <Button linkUrl={button.url} linkText={button.text} />}
    
    </div>
   
    <Img fluid={image} alt={imageAlt} className={imageClassName} />  
    
    
     
      

    </section>
  )
}

export default AboutContentVerse
