

import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../Layout/layout"
import Header from "../Header"
import Button from "../Buttons/Button"
import IconButton from "../Buttons/icon-button"
import LazyImg from "../Wrappers/lazy-img"
import LazyVid from "../Wrappers/lazy-vid"
import Intersection from "../Wrappers/intersection"
import WorkFooter from "./Work-footer"
import styles from "./Work-modules.module.sass"


const Work = (props) => {

    console.log(props.thumbnail.publicURL.substring(props.thumbnail.publicURL.length - 4, props.thumbnail.publicURL.length))
    return (

        <article className={styles.container}>
            <div className={styles.poster}>

                <Link
                    to={props.slug}
                >

                    {
                        props.thumbnail.publicURL.substring(props.thumbnail.publicURL.length - 4, props.thumbnail.publicURL.length) === '.mov' ? (
                            <LazyVid
                                vid={props.thumbnail.publicURL}
                                poster={props.poster.publicURL}
                            />
                        )
                            : (
                                <LazyImg
                                    img={props.thumbnail.publicURL}
                                />
                            )

                    }
                </Link>
            </div>

            <div className={styles.titleSkills}>
                <div className={`${styles.title} ${props.onScreen ? styles.inView : ''}`}>
                    <h2><sup>{props.index + 1}</sup>{props.title}</h2>
                </div>
                <ul className={styles.skills}>
                    {props.skills.map((item, i) =>
                        <li key={i}>
                            {item}
                        </li>)}
                </ul>
            </div>

            <div className={styles.description}>
                <p>
                    {props.description}
                </p>
            </div>


            <ul className={`${styles.buttons} ${props.onScreen ? styles.inView : ''}`}>
                <li>
                    <Link
                        to={props.slug}
                    >
                        <Button text="View" />
                    </Link>
                </li>
                {props.site != 'None' &&
                    <li>
                        <IconButton
                            to="site"
                            link={props.site}
                            alt="Visit Site"
                        />
                    </li>
                }
                {props.github != 'None' &&
                    <li>
                        <IconButton
                            to="github"
                            link={props.github}
                            alt="View source code on Github"
                        />
                    </li>
                }
                {props.behance != 'None' &&
                    <li>
                        <IconButton
                            to="behance"
                            link={props.behance}
                            alt="View project on Behance"
                        />
                    </li>
                }
            </ul>

        </article>

    )
}

export default (props) => {

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
                    thumbnail {
                        publicURL
                    }
                    poster {
                        publicURL
                    }
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


    return (
        <>
            <Header id="work" text="Work" />
            <section>
                {data.allMarkdownRemark.edges.map(({ node }, i) => (
                    <Intersection
                        bottomRoot='-300px'
                        key={node.id}
                    >
                        <Work
                            index={i}
                            id={node.id}
                            slug={node.fields.slug}
                            thumbnail={node.frontmatter.thumbnail}
                            poster={node.frontmatter.poster}
                            title={node.frontmatter.title}
                            description={node.frontmatter.description}
                            skills={node.frontmatter.skill}
                            github={node.frontmatter.github}
                            behance={node.frontmatter.behance}
                            site={node.frontmatter.site}

                        />
                    </Intersection>

                ))}
            </section>
        </>


    )
}