import React, { useRef } from 'react'
import { css } from "@emotion/core"
import { useInView } from 'react-intersection-observer'
import { color } from "../../utils/colors"

export default function LazyVid(props){
    
    const [ref, inView] = useInView({
        /* Optional options */
        rootMargin: '400px 0px -100px 0px',
        threshold: 0,
      })

    return(
        <div
            css={
                css`    
                position: relative;
                height: 100%;
                overflow: hidden;
                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: ${color.primary};
                    z-index: 5;
                    transform: scaleX(1);
                    transform-origin: left;
                    transition: .5s ease-out;
                    ${inView &&
                        `transition: .5s ease-out;
                        transform: scaleX(0);`
                    }
                }
                `
            }
        >
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
                    transform: translateX(150px);
                    ${inView &&
                        `transition: .5s ease-out;
                        transform: translateX(0);`
                    }
                    `
                } 
            >
            </video>
        </div>
    )
}