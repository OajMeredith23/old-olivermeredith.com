import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"

export default props => {
    return (
        <div
            css={
                css`
                ${!props.noTopMargin &&
                    `margin-top: 6em;`
                    }
                margin-bottom: -2.23rem;
                position: relative; 
                z-index: 2;
            `
            }
        >
            <h1 css={
                css`
                    ${!props.alignLeft &&
                    'text-align: right;'
                    }
                    font-size: ${rhythm(2)};
                    @media(min-width: 560px){
                        font-size: 6em;
                    }
                `
            }>{props.text}</h1>
        </div>

    )
}