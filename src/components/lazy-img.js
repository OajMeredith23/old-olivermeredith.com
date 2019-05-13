import React, { useRef } from 'react'
import { css } from "@emotion/core"
import { useInView } from 'react-intersection-observer'

export default props => {
    // const [ref, inView] = useInView({
    //     /* Optional options */
    //     rootMargin: '100px',
    //     threshold: 0,
    //   })


    return(
        // <>
        <img 
        css={
            css`
                width: 100%;
                height: 100%;
                object-fit: cover;
            `
        }
        // ref={ref}
        src={props.img}
        alt={props.imgAlt}/>
    )
}