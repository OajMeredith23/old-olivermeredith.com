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

const WorkTemplate = (props) => {
  return(
    <div>
          <h1>A Work Post</h1>
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>

          {props.children}
          
      </div>
  )
}
export default ({ data }) => {
    const post = data.markdownRemark
    console.log(post)
  return (
    <Layout>
      {post.frontmatter.type === 'Blog' ? 

      <BlogTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        type={post.frontmatter.type}
      >
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </BlogTemplate>

    : 
    
    <WorkTemplate
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      type={post.frontmatter.type}
    >
      <div dangerouslySetInnerHTML={{__html: post.html}}/>
  </WorkTemplate>  
    }
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
        type
      }
    }
  }
`