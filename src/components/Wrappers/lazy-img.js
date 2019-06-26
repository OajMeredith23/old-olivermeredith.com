import React, { useRef } from 'react'
import { css } from "@emotion/core"
import { useInView } from 'react-intersection-observer'
import { color } from "../../utils/colors"

export default function LazyImg (props){
    const [ref, inView] = useInView({
        /* Optional options */
        rootMargin: '500px',
        threshold: 0,
      })


    return(
            <img css={
                css`
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