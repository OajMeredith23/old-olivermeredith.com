import React, { Component, useState } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "./lazy-img"
import IconButton from "../components/icon-button"
// import Dots from "./dots-scrollnav";




function NavPage(props) {
    const data = useStaticQuery(
        graphql`
        {
            site{
                siteMetadata{
                  title
                  github
                }
            }
            allMarkdownRemark(
                sort: {fields: [frontmatter___order], order: ASC}
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
                                poster
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

    const [hoverImage, sethoverImage] = useState(null);

    return (
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

                        {data.allMarkdownRemark.edges.map(({ node }, i) => {
                            let numPosts = 3;
                            if(node.frontmatter.type === "Work"){
                                if(i < numPosts){
                                    return (
                                        <li
                                            key={node.id}
                                            onClick={props.onClick}
                                        >
                                            <Link
                                                to={node.fields.slug}
                                                onClick={props.handleClick}
                                                onMouseEnter={() => sethoverImage(node.frontmatter.poster)}
                                            >
                                                <p>{node.frontmatter.title}</p>
                                            </Link>
                                        </li>
                                    )
                                } else { 
                                    return(
                                        <li>
                                            <Link
                                                to="/#work"
                                            >
                                                & {data.allMarkdownRemark.totalCount - numPosts } more
                                            </Link>
                                        </li>
                                    )
                                }
                            } 
                            }
                        

                        )}

                        
                    </ul>
                </div>


                <Link
                    to="/#contact"
                    onClick={props.onClick}
                >
                    <h1>Contact</h1>
                </Link>


                <div css={
                    css`
                      display: flex;
                      display: inline-block;
                      align-items: center;
                      position: relative; 
                      `
                }>
                    <IconButton
                        to="github"
                        link={data.site.siteMetadata.github}
                        white={true}
                    />
                </div>

            </div>

            <div css={
                css`
                    overflow: hidden;
                    // height: auto;
                    grid-column: 2;
                    grid-row: 1 / span 4;
                    
                `
            }>

                {hoverImage && window.innerWidth > 959 ?
                    <LazyImg
                        img={hoverImage}
                    />
                    : ""
                }
            </div>

        </div>

    )
}



export default (props) => {

    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);


    return (

        <div
            css={css`
            margin: 0 auto;
            max-width: 1280px;
            padding: ${rhythm(1)};
            padding-top: ${rhythm(0.5)};
            @media(min-width: 1280px){
                display: grid; 
                grid-template-columns: 20px 1fr;
            }
            `}
        >

            <Helmet>
                <meta charSet="utf-8" />
                <title>Oliver Meredith</title>
            </Helmet>


            <section id="nav"
                css={
                    css`
                        position: fixed;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 5;
                        // overflow: scroll;
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
                            : `pointer-events: none;
                                opacity: 0;
                                & > * {
                                    transform: translateY(-50px);
                                }
                                `
                        }
                        
                    `
                }
            >


                <NavPage onClick={toggleNav} />
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
                        @media(min-width: 1280px){
                            grid-column: 2;
                        }
                    `
                }
            >

                <Link
                    to="/"
                    onClick={navOpen ? toggleNav : null}
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
                        height: 25px;
                        position: absolute;
                        top: 0; 
                        right: 0;
                        transition: .5s ease-in-out;
                        cursor: pointer;
                        &:hover{
                            & span {
                                background: ${color.primary};
                            }
                        }
                        & span { 

                            display: block;
                            position: absolute;
                            height: 3px;
                            width: 100%;
                            background: ${color.grey};
                            border-radius: 9px;
                            opacity: 1;
                            left: 0;
                            transform: rotate(0deg);
                            transition: .25s ease-in-out;
                            &:nth-of-type(1){
                                top: 0px;
                            }
                            &:nth-of-type(2){
                                top: 9px;
                                // transform: rotate(45deg);
                            }
                            &:nth-of-type(3){
                                top: 9px;
                            }
                            &:nth-of-type(4){
                                top: 18px;
                            }
                            ${navOpen ? `
                                &:nth-of-type(1){
                                    top: 18px;
                                    width: 0%;
                                    left: 50%;
                                }
                                &:nth-of-type(2){
                                    transform: rotate(45deg);
                                }
                                &:nth-of-type(3){
                                    transform: rotate(-45deg);
                                }
                                &:nth-of-type(4){
                                    top: 18px;
                                    width: 0%;
                                    left: 50%;
                                }
                                `

                                : null}
                        }
                    `
                    }
                    onClick={toggleNav}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* <Dots
                styles={`
                    display: none;
                    @media(min-width: 1280px){
                        display: block;
                        grid-column: 1;
                    }
                    `
                }
            /> */}

            <div css={
                css`
                    @media(min-width: 1280px){
                        grid-column: 2;
                    }
                `
            }>

                {props.children}
            </div>
        </div>
    )

}
