import React from "react"


import Button from "../components/button"

import styles from "./contact-content.module.scss"

const ContactContent = ({
  heading,
  copy, 
  imageFirst,
  button,
}) => {
  


  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.copyWrapper}>
        <h2 className="section-heading">{heading}</h2>
        <p className={styles.subFont}>Email </p> <a className={styles.linkFont} href="mailto:rickymusic78@gmail.com">rickymusic78@gmail.com</a>
        <p className={styles.subFont}>Phone </p><p>0420 603 690</p>
        <p className={styles.subFont}>Wechat </p><p>SA_Violin_School</p> 
 
       <div
          dangerouslySetInnerHTML={{
            __html: copy,
          }}
        ></div>
          {button && <Button linkUrl={button.url} linkText={button.text} />}
      </div>
      <form className={styles.contactFirst} action="https://formspree.io/f/xbjpkebw" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label className={styles.formFont}>Name<input type="text" name="name" required /></label>   
          </p>
          <p>
            <label className={styles.formFont}>Email<input type="email" name="email" required /></label>
          </p>
          <p>
            <label className={styles.formFont}>Phone<input type="text" name="phone" required /></label>   
          </p>
          <p>
            <label className={styles.formFont}>Message<textarea name="message" required ></textarea></label>
          </p>
          <p className="text-align-right">
            <button className={styles.inputSubmit} type="submit">Send<span className="icon -right"></span></button>
          </p>
        </form>    
    </section>
  )
}

export default ContactContent
