import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "../components/lazy-img";

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
        <div 
        css={
          css`
            grid-column: 4 / -1;
          `
        }
        >
        <LazyImg
          img={props.image}
        />  
        </div>
      </div>

      <section 
        className="content"
        css={css`
          grid-column: 1 / -1;
          
        
          & > div { 
            grid-column: 1 / -1;
            display: grid; 
            grid-template-columns: 1fr 2fr;
            grid-gap: 20px;

            
            & .text { 
              grid-column: 1;
              grid-row: 1 / -3;
              padding-top: ${rhythm(4)};

              & > h1, h2, h3, h4, p {
                position: sticky;
                top: ${rhythm(4)};
                grid-column: 1;
              } 

            }
            & img { 
              justify-self: flex-end;
              grid-column: 2;
            }

          }

          
        `}
        >
        
       
        {props.children}
      </section>
          
      </section>
  )
}

export default ({ data }) => {
  console.log(data)
    const post = data.markdownRemark
  return (
    <Layout>
      
      <Helmet>
          <title>{post.frontmatter.title}</title>
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