import React from "react"
import Img from "gatsby-image"

import Button from "./button"


import styles from "./contact-final.module.scss"
const  ContactFinal= ({
   
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
    

    
    <div className={styles.copyWrapper}>
      
    {button && <Button linkUrl={button.url} linkText={button.text} />}
    
    </div>
   
    <Img fluid={image} alt={imageAlt} className={imageClassName} />  
    
    
     
      

    </section>
  )
}

export default ContactFinal
