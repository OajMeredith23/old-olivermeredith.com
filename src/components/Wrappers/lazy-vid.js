import React, { useRef } from 'react'
import { css } from "@emotion/core"
import { useInView } from 'react-intersection-observer'


export default function LazyVid(props){
    
    const [ref, inView] = useInView({
        /* Optional options */
        rootMargin: '200px 0px 300px 0px',
        threshold: 0,
      })

    return(
        <video 
            ref={ref}
            autoPlay 
            loop 
            muted 
            playsInline 
            src={inView ? props.vid : ''}
            poster={props.poster}
            css={
                css`
                background: #f9f9f9;
                width: 100%;
                height: 100%;
                object-fit: cover;
                `
            } 
        >
        </video>
    )
}