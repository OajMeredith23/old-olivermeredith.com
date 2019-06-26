import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import { color } from "../utils/colors"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"
import {useSpring, animated} from 'react-spring'

//Components
import Layout from "../components/Layout/layout"
import WorkSection from "../components/WorkDisplays/Work-module"
import ProjectSection from "../components/ProjectDisplays/Project-module"
// import BlogSection from "../components/blog-section"
import Header from "../components/Header"
//Images
import profile from '../assets/profile.jpg'
import LazyImg from "../components/Wrappers/lazy-img";

export default () => {

  const data = useStaticQuery(
    graphql`
        query{
            site{
                siteMetadata{
                    title
                    description
                }
            }
        }`
)

    const fadeUp = useSpring({opacity: 1, marginTop: 10, from: {opacity: 0, marginTop: 200}})


    return (
        <Layout>
          <section css={
            css`
              height: calc(100vh - ${rhythm(1.5)});
              position: relative;
              z-index: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
            `
          }>
          <animated.div 
            style={fadeUp}
            css={
                css`
                  flex: 10;
                  display: flex; 
                  flex-direction: column;
                  justify-content: center;
                `
            }>
              <h1 css={
                css`
                @media(min-width: 960px){
                  font-size: ${rhythm(4)}
                }
                `
              }>
                {data.site.siteMetadata.title}
              </h1>
              <p>
                {data.site.siteMetadata.description}
              </p>
            </animated.div>

            <animated.ul 
              style={fadeUp}
              css={
                css`
                  flex: 2;
                  li{
                    margin:  0 ${rhythm(1)} ${rhythm(1)} 0 ;
                    @media(min-width: 900px){
                      display: inline-block; 
                    }
                    h3 {
                      font-style: italic;
                      padding-left: ${rhythm(0.3)};
                      border-left: 5px solid ${color.primary};
                    }
                    p{
                      max-width: 250px;
                      display: none;
                      @media(min-width: 767px){
                        display: block;
                      }
                    }
                  }
                `
            }>
              <li>
                <a href="#work">
                  <h3>Work</h3>
                  <p>Professional or academic work,
                      made to fulfil a brief</p>
                </a>
              </li>
              {/* <li>
                <h3>Projects</h3>
                <p>Personal project, made for fun,
                    the challenge or to be useful</p>
              </li> */}
              <li>
                <a href="#contact">
                  <h3>Contact</h3>
                  <p>Professional or academic work,
                      made to fulfil a brief</p>
                </a>
              </li>
            </animated.ul>
          </section>


            <WorkSection/>

            <ProjectSection/>

        </Layout>
      )
}