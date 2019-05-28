import React from 'react'
import { useInView } from 'react-intersection-observer'

export default props => {

    const [ref, inView, entry] = useInView({
        threshold: 0,
        rootMargin: '-200px'
    })
    
    return(
        
        <div ref={ref}>
            <h1>{`Header inside viewport ${inView}`}</h1>
            {props.children}
        </div>

    )
}