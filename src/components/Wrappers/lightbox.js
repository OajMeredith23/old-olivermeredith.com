import React, { useState, useEffect } from "react"
import Layout from "../Layout/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { useSpring, animated } from 'react-spring'
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"
import LazyImg from "./lazy-img";
import { Helmet } from 'react-helmet'
import { useInView } from 'react-intersection-observer'


export default function Lightbox(props) {

    const [imgs, setImgs] = useState('');

    useEffect(() => {
        const target = document.querySelector('#lightbox-target'),
            targetContainer = target.parentElement,
            items = document.querySelectorAll('img'),
            pWithImage = document.querySelectorAll('p');

        pWithImage.forEach(p => {
            if (p.firstChild.tagName === 'IMG') {
                p.classList.add('pWithImage')
            }
        })
        items.forEach((img, i) => {
            //If the image acts as a link (Like an Icon), don't lightbox it
            if (img.parentNode.tagName === 'A') {
                return
            } else {
                img.style.cursor = "zoom-in";
            }

            //Add the ability to lazy load (Uses CDN that is inside Helmet tag in JSX)
            img.classList.add('lazyload')

            img.addEventListener('click', () => {
                let src = img.getAttribute('src')
                target.setAttribute('src', src)
                targetContainer.classList.add('open')
            })
        })

        targetContainer.addEventListener('click', () => {
            targetContainer.classList.remove('open')
        })


    }, [])

    return (
        <div>
            <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.0/lazysizes-umd.min.js" async></script>
            </Helmet>

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