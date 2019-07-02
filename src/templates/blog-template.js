import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { useSpring, animated } from 'react-spring'
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "../components/Wrappers/lazy-img";
import "prismjs/themes/prism-tomorrow.css"
import styles from "./blog-styles.module.sass"

export default (props) => {
  return (
    <section className={styles.container}>

      <header className={styles.header}>
        <h1>{props.frontmatter.title}</h1>
        <p>{props.frontmatter.description}</p>
      </header>

      {props.children}
    </section>
  )
}
