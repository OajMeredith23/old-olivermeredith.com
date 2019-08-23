

import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"
import Layout from "../Layout/layout"
import Button from "../Buttons/Button"
import IconButton from "../Buttons/icon-button"
import LazyImg from "../Wrappers/lazy-img"
import LazyVid from "../Wrappers/lazy-vid"
import Header from "../Header"

import Intersection from "../Wrappers/intersection"
import styles from "./Project-module.module.sass"

const Project = (props) => {
  let image = props.thumbnail.relativePath;
  console.log(image)

  return (
    <article className={styles.item} key={props.id}>

      <div className={styles.poster}>
        <Link
          to={props.title === 'Sketches' ? '/sketches' : props.slug}
        >
          {
            props.thumbnail.publicURL.substring(props.thumbnail.publicURL.length - 4, props.thumbnail.publicURL.length) === '.mov' ? (
              <LazyVid
                vid={props.thumbnail.publicURL}
                poster={props.poster}
              />
            )
              : (
                <Img
                  style={{ height: '100%' }}
                  fluid={props.thumbnail.childImageSharp.fluid}
                  alt={props.title}
                />
              )

          }
        </Link>
      </div>

      <div className={styles.text}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>

      <ul className={styles.buttons}>
        <li>
          <Link
            to={props.title === 'Sketches' ? '/sketches' : props.slug}
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
              alt="View on Github"
            />
          }
        </li>
        <li>
          {props.behance != 'None' &&
            <IconButton
              to="behance"
              link={props.behance}
              alt="View on Behance"
            />
          }
        </li>
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
                    thumbnail{
                      childImageSharp {
                        fluid(maxWidth: 1075, quality: 72) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                      publicURL
                    }
                    poster{
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
      <Header id="projects" text="Projects" />
      <section className={styles.container}>

        {data.allMarkdownRemark.edges.map(({ node }) => (

          <Project
            key={node.id}
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

        ))}
      </section>
    </>
  )
}