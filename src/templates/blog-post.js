import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogTemplate = (props) => {
  return(
    <div>
          <h1>A Blog Post</h1>
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>

          {props.children}
          
      </div>
  )
}

export default ({ data }) => {
    const post = data.markdownRemark

  return (
    <Layout>
      <BlogTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      >
        <h1>trst</h1>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </BlogTemplate>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`