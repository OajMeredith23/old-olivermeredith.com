import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "./layout"


export default () => {
  const data = useStaticQuery(
    graphql`
    {
        allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC}
          filter: {
          frontmatter:{
            type: {regex: "/Work/"}
          }
        }){
          totalCount
          edges{
            node{
              id 
              frontmatter{
                type
                title
                date(formatString:"DD MMMM, YYYY")
              }
              fields{
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  )

  return (
      
        <div>
          <h1>
            Work
          </h1>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div key={node.id}>
                  <Link 
                      to={node.fields.slug}
                      css={
                          css`
                              text-decoration: none;
                              color: inherit;
                          `
                      }
                  >
                      <h3
                      css={css`
                          margin-bottom: ${rhythm(1 / 4)};
                      `}
                      >
                      {node.frontmatter.title}{" "}
                      <span
                          css={css`
                          color: #bbb;
                          `}
                      >
                          — {node.frontmatter.date}
                      </span>
                      </h3>
                      <p>{node.frontmatter.type}</p>
                  </Link>
                  </div>
          ))}
        </div>
    )
}
