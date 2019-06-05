import React from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import github from "../assets/gh-black.svg"
import behance from "../assets/behance-black.svg"
import site from "../assets/link.svg"


export default function IconButton (props){

    console.log(props.to)

    function icon(){
        if(props.to === "github"){
            return github
        } else if (props.to === 'behance'){
            return behance
        } else if (props.to === 'site'){
            return site
        }
    }

    function hover(){
        console.log("Hello")
    }

    
    return(
            
            <a href={props.link} 
            css={
                css`
                    display: inline-block;
                    height: 25px;
                    width: 25px;
                    margin: 0 ${rhythm(0.5)};
                    img { 
                        height: 100%; 
                        width: 100%;
                        object-fit: contain;
                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                    div{
                        display: none;
                        @media(min-width: 767px){
                            display: block;
                            position: absolute; 
                            left: calc(100% + 20px);
                            top: 0;
                            white-space: nowrap;
                            opacity: 0;
                            transition: .2s ease-out;
                            transform: translate(5px, 0px)
                        }
                    }
                    &:hover{
                        div{
                            color: ${color.grey};
                            opacity: 1;
                            transition: .1s ease-in;
                            transform: translate(0px, 0px)
                        }
                    }
                    
                `
            }
            >
                <img 
                    src={icon()} 
                    alt={props.alt}
                    target="_blank"
                    css={
                        css`
                            width: 100%;
                            height: 100%;
                        `
                    }
                />
                <div>
                    <p>{props.alt}</p>
                </div>
                
            </a>
            
    )
}