import React from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"


export default props => {
    return(
        <button css={
            css`
                ${props.position}
                height: 40px;
                width: 100px;
                font-family: 'Playfair Display';
                font-style: italic;
                background: ${color.darkgrey};
                color: ${color.bgColor};
                position: relative;
                border: none;
                &:after{
                    content: "";
                    width: 10px;
                    height: 40px;
                    background: ${color.primary};
                    position: absolute; 
                    left: -1px;
                    top: 0;
                }
            `
        }>
            {props.text}
        </button>
    )
}