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
import SectionBreak from "../components/section-break"
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

          <SectionBreak id="work" text="Work"/>

            <WorkSection/>

          <SectionBreak id="projects" text="Projects"/>
            <ProjectSection/>
          <SectionBreak id="contact" text="Contact"/>

          <section css={
            css`
            @media(min-width: 768px){
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-template-rows: 100px minmax(200px, 30vh) 100px auto;
              margin-bottom: ${rhythm(8)}
            }
            `
          }>
            <div css={
              css`
                height: 300px;
                display: none;
                @media(min-width: 768px){
                  height: auto;
                  display: block;
                  grid-column: 1 / span 7; 
                  grid-row: 1 / span 2;
                  background: ${color.primary};
                  position: relative;
                  transform-origin: right;
                  transform: scaleX(2);
                  z-index: 0;
                }
                `
              }></div>
            <div css={
              css`
              height: 300px;
                @media(min-width: 768px){
                  height: auto;
                  grid-column: 1 / span 6;
                  grid-row: 2 / span 2;
                  margin-bottom: ${rhythm(0)};
                }
                margin-bottom: ${rhythm(2)};
                z-index: 1;
                background: white; 
              `
            }>
              <LazyImg 
                img={profile}
                imgAlt="Photograph of Oliver Meredith"
              />
            </div>
            <div css={
              css`
                grid-column: 9 / -1;
                grid-row: 3;
              `
            }>
              <h1>Say Hi</h1>
              <h2><a href="mailto:mail@olivermeredith.com">mail@olivermeredith.com</a></h2>
            </div>
          </section>
        </Layout>
      )
}