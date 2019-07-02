import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import WorkTemplate from './work-template'
import BlogTemplate from './blog-template'
import P5Template from './p5-template'


const Head = function (props) {
  return (
    <Helmet>
      <title>Oliver Meredith | {props.frontmatter.title}</title>
      <meta name="description" content={props.frontmatter.description}></meta>
    </Helmet>
  )
}


export default ({ data }) => {
  const post = data.markdownRemark

  if (post.frontmatter.type === 'Blog') {
    return (
      <Layout>
        <Head frontmatter={post.frontmatter} />
        <BlogTemplate
          frontmatter={post.frontmatter}
        >
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </BlogTemplate>
      </Layout>
    )
  } else if (post.frontmatter.type === 'Work' || post.frontmatter.type === 'Project') {
    return (
      <Layout>
        <Head frontmatter={post.frontmatter} />
        <WorkTemplate
          frontmatter={post.frontmatter}
        >
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </WorkTemplate>
      </Layout>
    )
  } else if (post.frontmatter.type === 'Sketch') {
    return (
      <Layout>
        <Head frontmatter={post.frontmatter} />
        <P5Template
          frontmatter={post.frontmatter}
        >
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </P5Template>
      </Layout>

    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        type
        layout
        thumbnail
        poster
        github
        behance
        site
      }
    }
  }
  `