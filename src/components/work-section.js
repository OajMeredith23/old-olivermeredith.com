import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import Layout from "./layout"
import Button from "./button"
import LazyImg from "./lazy-img"



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
                skill
                description
                date(formatString:"DD MMMM, YYYY")
                thumbnail
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

  const breakPoints = ['768px']

  return (
      
        <div>
        
          {data.allMarkdownRemark.edges.map(({ node }) => (
                <section 
        key={node.id}
        css={
            css`
            @media(min-width: ${breakPoints[0]}){
                display: grid;
                grid-template-columns: repeat(12, minmax(0, 1fr));
                grid-template-rows: 50vh auto auto;
                grid-gap: ${rhythm(2)} 0;
                padding: 0;
            }
            margin-bottom: ${rhythm(8)}
            `
        }
        
        >
            <div css={
                css`
                background: grey;
                height: 300px;
                padding: 0;
                @media(min-width: ${breakPoints[0]}){
                    height: auto;
                    grid-row: 1;
                    grid-column: 3 / -1; 
                }
                `
            }>
                <Link
                    to={node.fields.slug}
                >
                    <LazyImg img={node.frontmatter.thumbnail}/>
                </Link>
            </div>
            <div css={
                    css`
                    @media(min-width: ${breakPoints[0]}){
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        grid-column: span 2;
                    }
                    `
                }>
                <Link 
                    to={node.fields.slug}
                >
                    <h1 css={
                        css`
                            margin: ${rhythm(1)} 0 0 0;

                        `
                    }>{node.frontmatter.title}</h1>
                </Link>
            </div>
            <ul css={ 
                css`
                margin: ${rhythm(1)} 0;
                @media(min-width: ${breakPoints[0]}){
                    margin: 0;
                    grid-row: 2;
                }
                `
            }>
                {node.frontmatter.skill.map((item, i) => 
                <li 
                    key={i}
                    css={
                        css`
                        @media(max-width: ${breakPoints[0]}){
                            display: inline-block;
                            margin: 0 ${rhythm(1)} 0 0;
                        }
                        font-family: 'Playfair Display';
                        font-style: italic;
                        color: ${color.grey};
                        margin: 0 0 ${rhythm(0.5)} 0;
                        white-space: nowrap;
                        `
                    }
                >
                    {item}
                </li>)}
            </ul>

            <div css={
                css`
                    grid-column: 3 / span 4;
                `
            }>
                <p>
                    {node.frontmatter.description}
                </p>
            </div>

            <div css={
                css`
                    grid-row: -2;
                    grid-column: 3 / -1;
                `
            }>

            
                <Link
                    to={node.fields.slug}
                >
                    <Button 
                        text="View"
                    />
                </Link>  
            

            </div>
        </section>
          ))}
        </div>
    )
}

