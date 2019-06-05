import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { css } from "@emotion/core"
import {useSpring, animated} from 'react-spring'


export default function Intersect(props){

    const [ref, inView, entry] = useInView({
        threshold: 0,
        rootMargin: `50px 0px ${props.bottomRoot} 0px`
    })


    const childWithProp = React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {onScreen: inView});
    });
    

    return(
        
        <div ref={ref}
            css={
                css`
                    ${props.position}
                `
            }
        >
            <div>
                {childWithProp}
            </div>
        </div>

    )
}