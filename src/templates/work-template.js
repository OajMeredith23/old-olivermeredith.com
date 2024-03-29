import React, { useEffect } from "react"
import { css } from "@emotion/core"
import { useSpring, animated } from 'react-spring'
import Img from 'gatsby-image'
import Lightbox from "../components/Wrappers/lightbox";
import IconButton from "../components/Buttons/icon-button"
import Button from "../components/Buttons/Button"
import WorkFooter from "../components/WorkDisplays/Work-footer"
import Header from '../components/Header'
import mdStyles from "./md-styles.sass"
import styles from "./work-template.module.sass"

export default function WorkContainer(props) {
  console.log({ props })

  const fadeDown = useSpring({ opacity: 1, marginLeft: 0, from: { opacity: 0, marginLeft: -200 } })

  return (
    <>
      <Lightbox>
        <section className={styles.container}>

          <div className={styles.landing}>

            <Header
              text={props.frontmatter.title}
              alignLeft
            />
            <div className={styles.landingText}>

              <ul className={styles.skillList}>
                {
                  props.frontmatter.skill.map(s => {
                    return (
                      <li>{s}</li>
                    )
                  })
                }
              </ul>
              <div className={styles.divider}></div>
              <p>{props.frontmatter.description}</p>

            </div>

            <div className={styles.landingButtons}>

              {props.frontmatter.site != 'None' &&
                <IconButton
                  to="site"
                  link={props.frontmatter.site}
                  alt="Visit Site"
                />
              }

              {props.frontmatter.github != 'None' &&
                <IconButton
                  to="github"
                  link={props.frontmatter.github}
                  alt="View source code on Github"
                />
              }

              {props.frontmatter.behance != 'None' &&
                <IconButton
                  to="behance"
                  link={props.frontmatter.behance}
                  alt="View project on Behance"
                />
              }


            </div>


            <div
              className={styles.landingImage}
              style={fadeDown}
            >
              <Img
                style={{
                  width: '100%',
                  height: '100%',
                }}
                fluid={props.frontmatter.poster.childImageSharp.fluid}
                alt={props.title}
              />
            </div>

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
        currentPage={props.frontmatter.title}
      />
    </>

  )
}