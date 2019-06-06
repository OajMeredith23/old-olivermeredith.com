import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import Button from "./button"
import IconButton from "./icon-button"
import Intersection from "./intersection"
import LazyImg from "./lazy-img"

export default function WorkFooter(props){

    const data = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(
              sort: {fields: [frontmatter___order], order: ASC}
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
                    github 
                    behance
                    site
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
        return(
            <section css={
                css`
                    margin-top: 30vh;
                    @media(min-width: 550px){
                        // display: grid; 
                        // grid-template-columns: repeat(3, 1fr);
                        // grid-gap: 1rem;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        // margin: 0 -1em;
                        background: rgba(20,20,20, 0.03);
                        padding: ${rhythm(1)};
                        // margin: 0 -${rhythm(1)};
                        border-radius: 10px;
                    }
                    
                    `
                }>
                <h1 css={
                    css`
                        width: 100%;
                        `
                    }>More Work</h1>
                {/* {data.allMarkdownRemark.edges.map(({ node }) => ()}) */}
                {data.allMarkdownRemark.edges.map(({ node }) => {
                    console.log(props.currentPage + " " + node.frontmatter.title)
                    return props.currentPage != node.frontmatter.title && (
                        <article css={
                            css`
                                @media(min-width: 550px){
                                    flex: 1; 
                                    margin-right: 1rem;
                                    max-width: calc(50% - 1rem);
                                    display: grid;
                                    grid-template-columns: 1fr;
                                    grid-template-rows: 300px 75px 1fr;
                                    &:last-child{
                                        margin-right: 0;
                                    }
                                    h2{
                                        margin-top: 1rem;
                                    }
                                    > * {
                                        grid-column: 1;
                                    }
                                }
                                h2 {
                                    margin-bottom: 2rem;
                                }
                            `
                        }>

                            <div>
                                <Link
                                    to={node.fields.slug}
                                >
                                    <LazyImg img={node.frontmatter.thumbnail} imgAlt=""/>
                                </Link>
                            </div>

                            <h2>{node.frontmatter.title}</h2>


                            <div css={
                                css`
                                    display: flex;
                                    flex-direction: column;
                                `
                            }>
                                    <Link
                                        to={node.fields.slug}
                                    >
                                        <Button 
                                            position="grid-column: span 3; 
                                            width: 100px; 
                                            margin-bottom: 2em;"
                                            text="View"
                                        />
                                    </Link>  
                                    
                                    <div css={
                                        css`
                                        display: flex;
                                        align-items: center;
                                        position: relative; 
                                        a { 
                                            margin-top: -20px;
                                            margin-bottom: 20px;
                                        }
                                        `
                                    }>

                                        {node.frontmatter.site != 'None' && 
                                            <IconButton
                                                to="site"
                                                link={node.frontmatter.site}
                                            />
                                        }

                                        {node.frontmatter.github != 'None' && 
                                            <IconButton
                                                to="github"
                                                link={node.frontmatter.github}
                                            />
                                        }

                                        {node.frontmatter.behance != 'None' && 
                                            <IconButton
                                                to="behance"
                                                link={node.frontmatter.behance}
                                            />
                                        }
                                

                                    </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        )
}
