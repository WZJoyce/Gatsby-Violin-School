import React from "react"


import Button from "../components/button"

import styles from "./course-content.module.scss"

const CourseContent = ({
  heading,
  copy,
 
  button,
}) => {
  

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.copyWrapper}>
        <h2 className="section-heading">{heading}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: copy,
          }}
        ></div>
        {button && <Button linkUrl={button.url} linkText={button.text} />}
      </div>
       
     

    </section>
  )
}

export default CourseContent
