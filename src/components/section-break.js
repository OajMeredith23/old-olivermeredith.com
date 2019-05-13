import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"

export default props => {
    return(
        <div id={props.id} css={
            css`
                margin: ${rhythm(8)} 0
            `
        }>
            <h1 css={
                css`
                    text-align: right;
                    font-size: ${rhythm(2)};
                    @media(min-width: 560px){
                        font-size: ${rhythm(4)};
                    }
                    // opacity: .5;
                `
            }>{props.text}</h1>
        </div>
    )
}