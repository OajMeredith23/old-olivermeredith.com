import React from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"


export default props => {
    let strokeDash = Math.floor(Math.random() * (150 - 50) + 50);

    return(
        
        <button css={
                css`
                ${props.position}
                height: 50px;
                padding: 0 30px;
                // display: inline-block;
                font-family: 'Playfair Display';
                font-style: italic;
                background: transparent;
                color: ${color.darkgrey};
                position: relative;
                border: none;
                cursor: pointer;
                & :hover {
                    div{
                        // transform: translateY(-3px);
                        transition: .3s ease-out;
                    }
                    &::before{
                        // transform: scale(1.1);
                        box-shadow: 0px 3px 6px rgba(0,0,0,.1);
                        transition: .3s ease-out;
                    }
                }
                &::before{
                    transform-origin: top left;
                    transition: .3s ease-out;
                    content: "";
                    position: absolute;
                    top: -7.5px;
                    left: -7.5px;
                    width: calc(100% + 15px);
                    height: calc(100% + 15px);
                    background: #ededed;
                    // z-index: 2;
                    pointer-events: none;
                    box-shadow: 0px 3px 6px rgba(0,0,0,.0)
                }
            `
        }>
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