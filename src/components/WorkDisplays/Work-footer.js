import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"
import Button from "../Buttons/Button"
import IconButton from "../Buttons/icon-button"
import Intersection from "../Wrappers/intersection"
import LazyImg from "../Wrappers/lazy-img"
import Header from "../Header"
import styles from "./Work-footer.module.sass"
export default function WorkFooter(props) {

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
                    thumbnail{
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
            <Header text="Work" />
            <section className={styles.container}>

                {data.allMarkdownRemark.edges.map(({ node }) => {
                    return props.currentPage != node.frontmatter.title && (

                        <article key={node.id} className={styles.module}>

                            <div className={styles.videoContainer}>
                                {node.frontmatter.thumbnail.publicURL.substring(node.frontmatter.thumbnail.publicURL.length - 4, node.frontmatter.thumbnail.publicURL.length) === '.mov' ? (

                                    <video
                                        className={styles.vid}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster={props.poster}
                                    >
                                        <source src={node.frontmatter.thumbnail.publicURL} />
                                    </video>
                                ) :
                                    <img class={styles.img} src={node.frontmatter.thumbnail.publicURL} alt="" />
                                }
                                {/* <Link
                                    to={node.fields.slug}
                                >
                                    <video
                                        className={styles.vid}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster={props.poster}
                                    >
                                        <source src={node.frontmatter.thumbnail.publicURL} />
                                    </video>
                                </Link> */}
                            </div>

                            <h2>{node.frontmatter.title}</h2>


                            <div className={styles.buttons}>
                                <Link
                                    to={node.fields.slug}
                                >
                                    <Button
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
                                        link={node.frontmatter.github}
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
        </>
    )
}
