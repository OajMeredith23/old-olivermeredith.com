import React, { useRef } from 'react'
import { css } from "@emotion/core"
import { useInView } from 'react-intersection-observer'
// import Img from "gatsby-image/withIEPolyfill"

export default function LazyImg (props){
    const [ref, inView] = useInView({
        /* Optional options */
        rootMargin: '500px',
        threshold: 0,
      })


    return(
        <img 
        css={
            css`
                background: #f9f9f9;
                width: 100%;
                height: 100%;
                object-fit: cover;
            `
        }
        ref={ref}
        src={inView ? props.img : ''}
        alt={props.imgAlt}/>
    )
}