

import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"
import Layout from "../Layout/layout"
import Button from "../Buttons/Button"
import IconButton from "../Buttons/icon-button"
import LazyImg from "../Wrappers/lazy-img"
import LazyVid from "../Wrappers/lazy-vid"
import SectionBreak from "../section-break"

import Intersection from "../Wrappers/intersection"
import styles from "./Project-module.module.sass"

const Project = (props) => {
    return(
        <article className={styles.item} key={props.key}>

          <div className={styles.poster}>

            <Link
                to={props.slug}
            >
                {
                    props.thumbnail.substring(props.thumbnail.length - 4, props.thumbnail.length) === '.mov' ? (
                        <LazyVid
                            vid={props.thumbnail}
                            poster={props.poster}
                        />
                    )
                      : (
                          <LazyImg
                              img={props.thumbnail}
                          />
                      )

                }
            </Link>
          </div>

            <h2>{props.title}</h2>
            <p>{props.description}</p>
            
            <ul className={styles.buttons}>
                <li>
                    <Link
                        to={props.slug}
                    >
                        <Button text="View" />
                    </Link>
                </li>
                <li>
                    {props.site != 'None' &&
                        <IconButton
                            to="site"
                            link={props.site}
                            alt="Visit Site"
                        />
                    }
                </li>
                <li>
                    {props.github != 'None' &&
                        <IconButton
                            to="github"
                            link={props.github}
                            alt="View source code on Github"
                        />
                    }
                </li>
                <li>
                    {props.behance != 'None' &&
                        <IconButton
                            to="behance"
                            link={props.behance}
                            alt="View project on Behance"
                        />
                    }
                </li>
            </ul>
        </article>
    )
}

export default(props) => {
    const data = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(
              sort: {fields: [frontmatter___order], order: ASC}
              filter: {
              frontmatter:{
                type: {regex: "/Project/"}
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
      if(data.allMarkdownRemark.totalCount >= 2 ){
        return(
          <>
            <SectionBreak id="projects" text="Projects"/>
            <section className={styles.container}>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Intersection
                        bottomRoot = '-90%'
                        key={node.id}
                    >
                        <Project
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
      } else { return null }
}