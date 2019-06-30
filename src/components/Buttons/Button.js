import React from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"
import styles from "./Button.module.sass"

export default props => {
    let strokeDash = Math.floor(Math.random() * (150 - 50) + 50);

    return (

        <button className={styles.button} type="button">
            <h3>{props.text}</h3>
        </button>
    )
}