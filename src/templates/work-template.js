import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import {useSpring, animated} from 'react-spring'
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "../components/lazy-img";

export default (props) => {

    const fadeDown = useSpring({opacity: 1, marginLeft: 0, from: {opacity: 0, marginLeft: -200}})
    const breakpoints = ['959px'];
    return(
      <section css={
        css`
          @supports (display: grid){
  
            @media(min-width: ${breakpoints[0]}){
              display: grid;
              grid-gap: 30px 10px;
              grid-template-columns: repeat(12, 1fr);
              grid-template-rows: 100vh auto;
            }
          }
  
          display: 
        `
      }>  
        <div css={
          css`
            @supports (display: grid){
  
              @media(min-width: ${breakpoints[0]}){
                display: grid;
                grid-gap: 30px 10px;
                grid-template-columns: repeat(12, 1fr);
                grid-template-rows: 50vh 200px;
                grid-column: 1 / -1;
                align-self: center;
              }
            }
            display: flex;  
            flex-flow: column wrap;
            justify-content: space-around;
            height: calc(100vh - ${rhythm(1)}); 
          `
        }>
          <div css={
            css`
  
              max-width: 400px;
              @supports (display: grid){
  
                @media(min-width: ${breakpoints[0]}){
                  color: ${color.bgColor};
                  grid-column: 8 / span 4;
                  grid-row: 2;
                  display: inline-block;
                  align-self: flex-end;
                  position: relative;
                  z-index: 1;
                  max-width: auto;
                }
  
              }
              
            `
          }>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
          </div>
  
          <animated.div 
           style={fadeDown}
            css={
              css`
              height: 50vh;
  
              @supports (display: grid){
  
                @media(min-width: ${breakpoints[0]}){
                  grid-column: 1 / -1;
                  position: absolute; 
                  height: auto;
                  top: 0; 
                  left: 0; 
                  right: 0; 
                  bottom: 0;
                }
  
              }
              `
            }
          >
            <LazyImg
              img={props.image}
            />  
          </animated.div>
  
        </div>
  
        <section 
          className="content"
          css={css`
  
            @media(max-width: ${breakpoints[0]}){
              & img { 
                display: block; 
                margin: ${rhythm(1)} auto;
              }
            }
  
            @supports (display: grid){
  
              @media(min-width: ${breakpoints[0]}){
  
                grid-column: 1 / -1;
                
                & > div { 
                    & > div { 
                      grid-column: 1 / -1;
                      display: grid; 
                      grid-template-columns: 1fr 2fr;
                      grid-gap: 20px;
          
                      
                    & .text { 
                      grid-column: 1;
                      grid-row: 1 / -1;
                      padding-top: ${rhythm(4)};
                      position: sticky;
                      top: ${rhythm(4)};
                      border: 1px solid;
        
      
                    }
                    & img { 
                      justify-self: flex-end;
                      grid-column: 2;
                    }
          
                    
                }
  
              }
          }
  
            
          `}
          >
         
         
          {props.children}
        </section>
            
        </section>
    )
  }