import React, { Component, useState } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, StaticQuery, Link, graphql} from "gatsby"
import { Helmet } from 'react-helmet'
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "./lazy-img"




function NavPage(props){
    const data = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(
              sort: {fields: [frontmatter___date], order: DESC}
              limit: 4
              ){
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

    const [hoverImage, sethoverImage] = useState(0);
    
    return(
        <div css={
            css`
            max-width: 1280px;
            margin: 0 auto;
            padding: ${rhythm(1)};
            margin-top: ${rhythm(4)};
            @media(min-width: 960px){
                display: grid;
                grid-template-columns: 4fr 8fr; 
                grid-auto-rows: 100px;
            }
            
            `
        }>
            

            <div css={
                css`
                    @media(min-width: 960px){
                        display: contents;
                    }
                    > * {
                        grid-column: 1;
                    }              

                `
            }>

                <Link
                    to="/"
                    onClick={props.onClick}
                >
                    <h1>Home</h1>
                </Link>

                <Link
                    to="/about"
                    onClick={props.onClick}
                >
                    <h1>About</h1>
                </Link>

                {/* //Work Links */}

                <div>
                    <li>
                        <Link
                            to="/#work"
                            onClick={props.onClick}
                        >
                            <h1>Work</h1>
                        </Link>
                    </li>
                    <ul css={
                        css`
                            & > li {
                                margin: ${rhythm(1)} 0;
                            }
                            @media(min-width: 960px){
                                & > li{
                                    margin: 0 0;
                                    display: inline-block;
                                    padding: ${rhythm(0.5)} ${rhythm(1)} 0 0;
                                }
                            }
                        `
                    }> 

                        {data.allMarkdownRemark.edges.map(({node}) => 
                            <li 
                                key={node.id}
                                onClick={props.onClick}
                            >
                                <Link
                                    to={node.fields.slug}
                                    onClick={props.handleClick}
                                    onMouseEnter={() => sethoverImage(node.frontmatter.thumbnail)}
                                >   
                                    <p>{node.frontmatter.title}</p>
                                </Link>
                            </li>
                            
                        )}
                        {data.allMarkdownRemark.totalCount > 4 ? 
                        <li>
                            <Link
                                    to="/#work"
                                >
                                & {data.allMarkdownRemark.totalCount - 4} more
                            </Link>
                        </li>
                        : ""}
                    </ul>
                </div>

                <Link
                    to="/#contact"
                    onClick={props.onClick}
                >
                    <h1>Contact</h1>
                </Link>

            </div>

            <div css={
                css`
                    overflow: hidden;
                    // height: auto;
                    grid-column: 2;
                    grid-row: 1 / span 4;
                    
                `
            }>
            {hoverImage && window.innerWidth > 767 ? 
                <LazyImg
                    img={hoverImage}
                />
                : ""
        }
            </div>

        </div>
        
    )
}



export default (props) =>{
    
    const[navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);

        
    return(
    
        <div
            css={css`
            margin: 0 auto;
            max-width: 1280px;
            padding: ${rhythm(1)};
            padding-top: ${rhythm(0.5)};
            `}
        >

        {/* <StaticQuery
            query={graphql ` { site { siteMetadata { title } } } ` }
        
            render={data => (
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{data.site.siteMetadata.title}</title>
                    </Helmet>
                )}
            /> */}
    

            <section id="nav"
                css={
                    css`
                        position: fixed;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 5;
                        overflow: scroll;
                        background: ${color.darkgrey};
                        color: ${color.bgColor};
                        transition: .2s .3s ease-out;
                        & > * {
                            transition: .5s ease-out;
                        }
                        ${navOpen ? 
                                `pointer-event: auto;
                                
                                opacity: 1; 
                                & > * {
                                    transform: translateY(0);
                                }`
                            :   `pointer-events: none;
                                opacity: 0;
                                & > * {
                                    transform: translateY(-50px);
                                }
                                `
                        }
                        
                    `
                }
            >
                <NavPage onClick={toggleNav}/>
            </section>

            <div id="navbar"
                css={
                    css`
                        position: sticky;
                        top: ${rhythm(1)};
                        right: 25px;
                        width: 100%;
                        height: 25px;
                        z-index: 6;
                        color: ${color.grey};
                        transition: .1s ease-out;
                    `
                }
            >
            
            <Link
                to="/"
                onClick={navOpen ? () => toggleNav : null}
                >
                <h3>
                    Oliver Meredith
                </h3>
            </Link>

            <div 
                id="hamburger"
                css={
                    css`
                    width: 35px;
                    height: 18px;
                    display: flex; 
                    flex-direction: column;
                    justify-content: space-around; 
                    position: absolute;
                    top: 0;
                    right: 0;
                    tranform-origin: center;
                    & span {
                        display: inline-block;
                        height: 3px;
                        width: 35px;
                        border-radius: 15px;
                        padding: 0;
                        background: ${color.grey};
                        transition: .3s ease;
                    }
                    & :hover {
                        & span {
                            transition: .3s ease;
                            transform: scaleX(1.1);
                            background: ${color.primary};
                        }
                    }
                    `
                }
                onClick={toggleNav}
                >
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
    
    
    
        
            {props.children}
        </div>
    )
    
}

export const query = graphql`
    {
        site{
            siteMetadata{
                title
            }
        }
    }
`