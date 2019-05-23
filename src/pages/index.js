import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { color } from "../utils/colors"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"

import '../styles/styles.sass'
//Components
import Layout from "../components/layout"
import WorkSection from "../components/work-section"
import BlogSection from "../components/blog-section"
import SectionBreak from "../components/section-break"
//Images
import neatCover from '../assets/NEAT/NEAT-cover.png'
import povisionCover from '../assets/POVision/POVision-cover.png'
import childhavenCover from '../assets/childhaven/childhaven-cover.jpg'
import profile from '../assets/profile.jpg'

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
          <div css={
              css`
                flex: 10;
                display: flex; 
                flex-direction: column;
                justify-content: center;
              `
            }>
              <h1>
                {data.site.siteMetadata.title}
              </h1>
              <p>
                {data.site.siteMetadata.description}
              </p>
            </div>

            <ul css={
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
              <li>
                <h3>Projects</h3>
                <p>Personal project, made for fun,
                    the challenge or to be useful</p>
              </li>
              <li>
                <a href="#contact">
                  <h3>Contact</h3>
                  <p>Professional or academic work,
                      made to fulfil a brief</p>
                </a>
              </li>
            </ul>
          </section>

          <SectionBreak id="work" text="Work"/>

            <WorkSection/>

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
                  grid-column: 1 / span 8; 
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
                  grid-column: 1 / span 7;
                  grid-row: 2 / span 2;
                  margin-bottom: ${rhythm(0)};
                }
                margin-bottom: ${rhythm(2)};
                z-index: 1;
                background: white; 
              `
            }>
              <img 
              css={
                css`
                  width: 100%;
                  height: 100%; 
                  object-fit: cover;
                `
              }
              src={profile}
              alt=""/>
            </div>
            <div css={
              css`
                grid-column: 9 / -2;
                grid-row: 3;
              `
            }>
            <Link to="/about">
              <h1>Say Hi</h1>
            </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime temporibus in quos sed quod modi explicabo suscipit voluptatum earum?</p>
            </div>
          </section>
        </Layout>
      )
}