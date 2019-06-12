import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import {useSpring, animated} from 'react-spring'
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "../components/Wrappers/lazy-img";


export default (props) => {
    return(
      <div>
            <h1>A Blog Post</h1>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
  
            {props.children}
            
        </div>
    )
  }
  