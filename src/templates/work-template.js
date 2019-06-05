import React, { useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import {useSpring, animated} from 'react-spring'
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "../components/lazy-img";
import Lightbox from "../components/lightbox";
import IconButton from "../components/icon-button"


export default function WorkContainer(props) {

    const fadeDown = useSpring({opacity: 1, marginLeft: 0, from: {opacity: 0, marginLeft: -200}})
    const breakpoints = ['959px'];

    const childWithProp = React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {test: "click"});
    });

    // const {props} = props.frontmatter;
    
  
    return(
      
      <Lightbox>
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
                <h1>{props.frontmatter.title}</h1>
                <p>{props.frontmatter.description}</p>
                {console.log(props.frontmatter)}

                <div css={
                      css`
                      display: flex;
                      display: inline-block;
                      align-items: center;
                      position: relative; 
                      `
                  }>

                      {props.frontmatter.site != 'None' && 
                          <IconButton
                              to="site"
                              link={props.frontmatter.site}
                              alt="Visit Site"
                              white={true}
                          />
                      }

                      {props.frontmatter.github != 'None' && 
                          <IconButton
                              to="github"
                              link={props.frontmatter.github}
                              alt="View source code on Github"
                              whiteAtLargeScreen={true}
                          />
                      }

                      {props.frontmatter.behance != 'None' && 
                          <IconButton
                              to="behance"
                              link={props.frontmatter.behance}
                              alt="View project on Behance"
                              whiteAtLargeScreen={true}
                          />
                      }
              

                  </div>

            </div>
    
            <animated.div 
            style={fadeDown}
              css={
                css`
                height: 50vh;
    
                @supports (display: grid){
    
                  @media(min-width: ${breakpoints[0]}){
                    // grid-column: 1 / -1;
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
                img={props.frontmatter.thumbnail}
              />  
            </animated.div>
    
          </div>
    
          <section className="content">
              {childWithProp}
          </section>
          
        </section>
      </Lightbox>
      
    )
  }