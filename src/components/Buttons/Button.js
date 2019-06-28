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

            {/* <svg 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
        >
            
            <rect width="100%" height="100%" css={
                css`
                    stroke: ${color.primary};
                    stroke-dasharray: ${strokeDash};
                `
            }>
            </rect>
        </svg> */}
        </button>
    )
}