import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"
import Button from "../Buttons/Button"
import IconButton from "../icon-button"
import Intersection from "../intersection"
import LazyImg from "../LazyLoad/lazy-img"

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
                    return props.currentPage != node.frontmatter.title && (
                        <article 
                        key={node.id}
                        css={
                            css`
                            margin-bottom: ${rhythm(1)};
                                @media(min-width: 550px){
                                    flex: 1; 
                                    margin-right: 1rem;
                                    max-width: calc(50% - 1rem);
                                    &:last-child{
                                        margin-right: 0;
                                    }
                                }
                                h2 {
                                    margin: ${rhythm(1)} 0;
                                }
                            `
                        }>

                            <div>
                                <Link
                                    to={node.fields.slug}
                                >
                                    <video 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        poster={props.poster}
                                        css={
                                            css`
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                            border-radius: 10px;
                                            `
                                        } 
                                        >
                                        
                                        <source src={node.frontmatter.thumbnail}/>
                                    </video>
                                </Link>
                            </div>

                            <h2>{node.frontmatter.title}</h2>


                            <div css={
                                css`
                                    display: flex;
                                    grid-row: -2; 
                                    grid-column: 1 / -1;
                                    max-height: 45px;
                                    @media(max-width: 960px){
                                        margin-top: ${rhythm(1)};
                                        }
                                    }
                                    > * {
                                        margin-right: ${rhythm(1)}
                                    }
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
                                    
                                    

                                        {node.frontmatter.site != 'None' && 
                                            <IconButton
                                                to="site"
                                                link={node.frontmatter.site}
                                                alt="Visit Site"
                                            />
                                        }

                                        {node.frontmatter.github != 'None' && 
                                            <IconButton
                                                to="github"
                                                link={props.github}
                                                alt="View source code on Github"
                                            />
                                        }

                                        {node.frontmatter.behance != 'None' && 
                                            <IconButton
                                                to="behance"
                                                link={node.frontmatter.behance}
                                                alt="View project on Behance"
                                            />
                                        }
                                

                                    
                            </div>
                        </article>
                    )
                })}
            </section>
        )
}
