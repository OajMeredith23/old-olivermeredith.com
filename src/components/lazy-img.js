import React, { useRef } from 'react'
import { css } from "@emotion/core"
import { useInView } from 'react-intersection-observer'

export default props => {
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
                border-radius: 10px;
            `
        }
        ref={ref}
        src={inView ? props.img : ''}
        alt={props.imgAlt}/>
    )
}