import React, { useEffect } from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import {useSpring, animated} from 'react-spring'
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import LazyImg from "../components/Wrappers/lazy-img";
import Lightbox from "../components/Wrappers/lightbox";
import IconButton from "../components/Buttons/icon-button"
import Button from "../components/Buttons/Button"
import WorkFooter from "../components/WorkDisplays/Work-footer"

import mdStyles from "./md-styles.sass"
import styles from "./work-template.module.sass"

export default function WorkContainer(props) {

    const fadeDown = useSpring({opacity: 1, marginLeft: 0, from: {opacity: 0, marginLeft: -200}})
    const breakpoints = ['959px'];

    return(
      <>
      <Lightbox>
        <section className={styles.container}>  
          <div className={styles.landing}>

            <div className={styles.landingText}>
                <h1>{props.frontmatter.title}</h1>
                <p>{props.frontmatter.description}</p>

                <div className={styles.landingButtons}>

                      {props.frontmatter.site != 'None' && 
                          <IconButton
                              to="site"
                              link={props.frontmatter.site}
                              alt="Visit Site"
                              // whiteAtLargeScreen={true}
                          />
                      }

                      {props.frontmatter.github != 'None' && 
                          <IconButton
                              to="github"
                              link={props.frontmatter.github}
                              alt="View source code on Github"
                              // whiteAtLargeScreen={true}
                          />
                      }

                      {props.frontmatter.behance != 'None'  && 
                          <IconButton
                              to="behance"
                              link={props.frontmatter.behance}
                              alt="View project on Behance"
                              // whiteAtLargeScreen={true}
                          />
                      }
              

                  </div>
            </div>
    
            <animated.div 
            className={styles.landingImage}
            style={fadeDown}>
              <LazyImg
                img={props.frontmatter.poster}
              />  
            </animated.div>
    
          </div>
    
          <section 
          className={`content 
            ${props.frontmatter.layout === `Grid` ? `content-grid` : ''}
            ${props.frontmatter.layout === `Stack` ? `content-stack` : ''}
          `}
          >
              {props.children}
          </section>
            {props.frontmatter.site != 'None' && 
              <div className={styles.finalLink}>
                <a href={props.frontmatter.site} target="_blank" rel="noopener noreferrer">
                  <Button text={`View the ${props.frontmatter.title} website`}></Button>
                </a>
              </div>
            }
        </section>
      </Lightbox>
      <WorkFooter
        currentPage = {props.frontmatter.title}
      />
      </>
      
    )
  }