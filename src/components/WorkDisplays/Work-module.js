

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
import Intersection from "../Wrappers/intersection"
import WorkFooter from "./Work-footer"
import styles from "./Work-modules.module.sass"
console.log({styles})


const Work = (props) => {

  
  const breakPoints = ['767px']

  return (
      
        <section className={styles.container}>

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

            <div className={styles.titleSkills}>
                <div className={styles.title}>
                    <Link to={props.slug}>
                        <h1>{props.title}</h1>
                    </Link>
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

            
            <ul className={styles.buttons}>
                <li>
                    <Link
                        to={props.slug}
                    >
                        <Button text="View"/>
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

        </section>
        
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

      
    return ( 


        <section>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Intersection
                    bottomRoot = '-90%'
                    key={node.id}
                >
                    <Work
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
    

    )
}