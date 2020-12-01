import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import CourseContent from "../components/course-content"



const CoursePage = ({ data }) => {
  return (
    <Layout title="Course" pathName="/course">
      <h1 className="page-heading">Courses</h1>

      <CourseContent
        heading={data.courseSectionOne.frontmatter.heading}
        copy={data.courseSectionOne.html} 
      />

      <CourseContent
        heading={data.courseSectionTwo.frontmatter.heading}
        copy={data.courseSectionTwo.html}
      />

      <CourseContent
        heading={data.courseSectionThree.frontmatter.heading}
        copy={data.courseSectionThree.html}
        /> 

    </Layout>
  )
}

export const query = graphql`
  query {
    courseSectionOne: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "course-1" }
      }
    ) {
      frontmatter {
        heading
       
      
       
      }
      html
    }
    courseSectionTwo: markdownRemark(
      frontmatter: { type: { eq: "page-content" }, name: { eq: "course-2" } }
    ) {
      frontmatter {
        heading
       
     
      }
      html
    }
    courseSectionThree: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "course-3" }
      }
    ) {
      frontmatter {
        heading 
      }
      html
    }
    
  }
`

export default CoursePage
