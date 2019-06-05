import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import {useSpring, animated} from 'react-spring'
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "../components/lazy-img";

export default function Lightbox(props){
    
    // const [images, setImgs] = useState('')
    // let imgs = []
    // let arr = [1,2,3,4,5]
    useEffect(() => {

        const target =  document.querySelector('#lightbox-target');
        const targetContainer =  target.parentElement;
        document.querySelectorAll('img').forEach(img => {
            // imgs.push(img.getAttribute('src'))

            img.addEventListener('click', () => {
               let src = img.getAttribute('src')
               target.setAttribute('src', src)
               targetContainer.classList.add('open')
            })

        })
        targetContainer.addEventListener('click', () => { 
            targetContainer.classList.remove('open')
        })

        // setImgs(imgs);
    })

    return (
        <div>

            <div 
                className="lightbox"
            >   
                
                <img 
                id="lightbox-target"
                css={
                    css`
                    height: 80vh;
                    max-width: 80vw;
                    object-fit: contain;
                    `
                }
                src="" 
                alt=""
                />
                
            </div>

            {props.children}

        </div>
    )
}