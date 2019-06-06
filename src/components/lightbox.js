import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { useSpring, animated } from 'react-spring'
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "../components/lazy-img";

export default function Lightbox(props) {

    useEffect(() => {

        const target = document.querySelector('#lightbox-target'),
        targetContainer = target.parentElement,
        items = document.querySelectorAll('img');
        
        items.forEach(img => {

            if (img.parentNode.tagName === 'A') {
                return
            } else {
                img.style.cursor = "zoom-in";
            }


            img.addEventListener('click', () => {

                //If the image acts as a link (Like an Icon), don't lightbox it
                

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
                    cursor: pointer !important;
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