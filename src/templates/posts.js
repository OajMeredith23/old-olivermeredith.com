import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import WorkTemplate from './work-template'
import BlogTemplate from './blog-template'




export default ({ data }) => {
    const post = data.markdownRemark
  return (
    <Layout>
      
      <Helmet>
          <title>Oliver Meredith | {post.frontmatter.title}</title>
          <meta name="description" content={post.frontmatter.description}></meta>
      </Helmet>

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
          frontmatter={post.frontmatter}
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
        thumbnail
        poster
        github 
        behance 
        site
      }
    }
  }
`