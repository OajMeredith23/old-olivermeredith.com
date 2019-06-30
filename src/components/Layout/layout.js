import React, { Component, useState, useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"
import LazyImg from "../Wrappers/lazy-img"
import IconButton from "../Buttons/icon-button"
import Contact from "../Contact/Contact"

import favicon from '../../assets/favicon.png'
import styles from "./layout.module.sass"



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
                sort: {fields: [frontmatter___order], order: ASC}){
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
        <div className={styles.navScreen}>


            <ul className={`${styles.list} ${props.navOpen ? styles.show : ''}`}>

                <li>
                    <Link
                        to="/"
                        onClick={props.onClick}
                    >
                        <h1>Home</h1>
                    </Link>
                </li>

                {/* <li>
                    <Link
                        to="/about"
                        onClick={props.onClick}
                    >
                        <h1>About</h1>
                    </Link>
                </li> */}

                {/* //Work Links */}
                <li>
                    <Link
                        to="/#work"
                        onClick={props.onClick}
                    >
                        <h1>Work</h1>
                    </Link>

                    <ul className={styles.sublist}>
                        {data.allMarkdownRemark.edges.map(({ node }, i) => {
                            if (node.frontmatter.type === "Work") {
                                return (
                                    <li
                                        key={node.id}
                                        onClick={props.onClick}
                                    >
                                        <Link
                                            to={node.fields.slug}
                                            onClick={props.handleClick}
                                            onMouseEnter={() => sethoverImage(node.frontmatter.poster)}
                                        // onMouseLeave={() => sethoverImage('')}
                                        >
                                            <p>{node.frontmatter.title}</p>
                                        </Link>
                                    </li>
                                )
                            } else { return }
                            // else { 
                            //     return(
                            //         <li>
                            //             <Link
                            //                 to="/#work"
                            //             >
                            //                 & {data.allMarkdownRemark.totalCount - numPosts } more
                            //             </Link>
                            //         </li>
                            //     )
                            // }
                        }

                        )}
                    </ul>
                </li>
                {/* //Project Links */}
                <li>
                    <Link
                        to="/#work"
                        onClick={props.onClick}
                    >
                        <h1>Projects</h1>
                    </Link>

                    <ul className={styles.sublist}>
                        {data.allMarkdownRemark.edges.map(({ node }, i) => {
                            let numPosts = 3; //Limit length of list
                            if (node.frontmatter.type === "Project") {
                                return (
                                    <li
                                        key={node.id}
                                        onClick={props.onClick}
                                    >
                                        <Link
                                            to={node.fields.slug}
                                            onClick={props.handleClick}
                                            onMouseEnter={() => sethoverImage(node.frontmatter.poster)}
                                        // onMouseLeave={() => sethoverImage('')}
                                        >
                                            <p>{node.frontmatter.title}</p>
                                        </Link>
                                    </li>
                                )
                            }
                            // else { 
                            //     return(
                            //         <li>
                            //             <Link
                            //                 to="/#work"
                            //             >
                            //                 & {data.allMarkdownRemark.totalCount - numPosts } more
                            //             </Link>
                            //         </li>
                            //     )
                            // }
                        }
                        )}
                    </ul>
                </li>

                <li>
                    <Link
                        to="/#contact"
                        onClick={props.onClick}
                    >
                        <h1>Contact</h1>
                    </Link>
                </li>


                <li className={styles.icon}>
                    <IconButton
                        to="github"
                        link={data.site.siteMetadata.github}
                        alt="Github"
                    // white={true}
                    />
                </li>

            </ul>

            <div className={`${styles.imageTile} ${hoverImage ? styles.in : ''}`}>

                {hoverImage && window.innerWidth > 900 ?
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

    //Year for copyright in footer
    let d = new Date().getFullYear().toString();

    return (

        <div className={styles.container}>

            <Helmet
                title="Oliver Meredith"
                meta={[
                    {
                        name: "description",
                        content: "Oliver Meredith — Front end developer that's curious about user experiences",
                    },
                    {
                        name: "keywords",
                        content: "frontend, developer",
                    },
                ]}
                link={[
                    { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
                ]}
            >
                <meta charSet="utf-8" />
                <meta name="description" content="Oliver Meredith — Front end developer that's curious about user experiences" />
            </Helmet>


            <section
                id="nav"
                className={`${styles.navContainer} ${navOpen ? styles.open : ''}`}

            >
                <NavPage onClick={toggleNav} navOpen={navOpen} />
            </section>

            <div id="navbar"
                className={styles.navBar}
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
                    className={`${styles.hamburger} ${navOpen ? styles.clicked : ''}`}
                    onClick={toggleNav}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <main className={`${navOpen ? styles.hide : styles.content}`}>
                {props.children}
                <Contact />
            </main>
            <footer className={styles.footer}>
                <Link to="/"><p>Home</p></Link>
                <p>copyright &#169;{d} Oliver Meredith </p>
            </footer>
        </div>
    )

}
