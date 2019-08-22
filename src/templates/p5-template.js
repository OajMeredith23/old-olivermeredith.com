import React, { useEffect } from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { useSpring, animated } from 'react-spring'
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "../components/Wrappers/lazy-img";
import Lightbox from "../components/Wrappers/lightbox";
import IconButton from "../components/Buttons/icon-button"
import Button from "../components/Buttons/Button"
import WorkFooter from "../components/WorkDisplays/Work-footer"
import mdStyles from "./md-styles.sass"
import styles from "./p5-template.module.sass"


export default function P5Template(props) {
    return (
        <section className={styles.container}>
            {props.children}
            {/* {props.frontmatter.source} */}
        </section>
    )
}