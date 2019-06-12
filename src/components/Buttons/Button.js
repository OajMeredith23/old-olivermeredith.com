import React from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"


export default props => {
    let strokeDash = Math.floor(Math.random() * (150 - 50) + 50);

    return(
        
        <button css={
                css`
                height: 50px;
                padding: 0 20px;
                font-family: 'Playfair Display';
                font-style: italic;
                background: transparent;
                color: ${color.darkgrey};
                position: relative;
                border: none;
                cursor: pointer;
            `
        }
        type="button"
        >
        <div css={
            css`
                position: relative;
                z-index: 4;
                pointer-events: none;
                transition: .1s ease-out;
            `
        }>
            {props.text}
        </div>

        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        css={
            css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
            `
        }>
            
            <rect width="100%" height="100%" css={
                css`
                fill: transparent;
                stroke-width: 10px;
                stroke: ${color.primary};
                stroke-dasharray: ${strokeDash};
                transition: .3s ease-in-out;
                & :hover{
                    opacity: 1;
                    stroke-dasharray: 300;
                    // stroke-dashoffset: 0;
                    // fill: ${color.primary};
                    transition: .3s ease-in-out
                }
                `
            }>
            </rect>
        </svg>
        </button>
    )
}