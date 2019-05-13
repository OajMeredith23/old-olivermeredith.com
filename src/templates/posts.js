import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"

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
    <section css={
      css`
        display: grid;
        grid-gap: 30px 10px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 100vh auto;
      `
    }>  
      <div css={
        css`
          display: grid;
          grid-gap: 30px 10px;
          grid-template-columns: repeat(12, 1fr);
          grid-column: 1 / -1;
          align-self: center;
        `
      }>
        <div css={
          css`
            grid-column: 1 / span 3;
            display: inline-block;
            align-self: flex-end;
          `
        }>
            <h1
            >{props.title}</h1>
            <p>{props.description}</p>
        </div>
        <img 
        css={
          css`
            grid-column: 4 / -1;
          `
        }
          src={props.image} 
          alt=""
          />
      </div>
          {props.children}
          
      </section>
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
      image={post.frontmatter.thumbnail}
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
      }
    }
  }
`