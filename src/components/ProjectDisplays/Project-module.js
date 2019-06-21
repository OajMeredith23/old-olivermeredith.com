

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
import styles from "./Project-footer.module.sass"

const Project = (props) => {

    return(

        <h1>Hello-world</h1>
    )
}

export default(props) => {

    return(
        <section>
            <Project/>
        </section>
    )
}