import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import Layout from "./layout"
import Button from "./button"
import IconButton from "./icon-button"
import LazyImg from "./lazy-img"
import Intersection from "./intersection"



const Work = (props) => {

  
  const breakPoints = ['767px']

  return (
      
        <section 
            css={
                css`
                @media(min-width: ${breakPoints[0]}){
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    grid-template-rows: 50vh auto auto;
                    grid-gap: ${rhythm(2)} 0;
                    padding: 0;
                }
                margin-bottom: ${rhythm(8)};
                ${props.onScreen ? `
                transform: translate(0, 0);
                opacity: 1;` 
                : 
                `transform: translate(0, 100px);
                opacity: 0; 
                `}
                transition: .5s ease-out;
                `
            }
    
        >

            <div css={
                css`
                height: 300px;
                padding: 0;
                @media(min-width: ${breakPoints[0]}){
                    height: auto;
                    grid-row: 1;
                    grid-column: 3 / -1; 
                }
                `
            }>
            
                <Link
                    to={props.slug}
                >
                    
                    <LazyImg 
                        img={props.thumbnail}
                    />
                </Link>
            </div>
            <div css={
                    css`
                    @media(min-width: ${breakPoints[0]}){
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        grid-column: span 2;
                    }
                    `
                }>
                <Link 
                    to={props.slug}
                >
                    <h1 css={
                        css`
                            margin: ${rhythm(1)} 0 0 0;

                        `
                    }>{props.title}</h1>
                </Link>
            </div>
            <ul css={ 
                css`
                margin: ${rhythm(1)} 0;
                @media(min-width: ${breakPoints[0]}){
                    margin: 0;
                    grid-row: 2;
                }
                `
            }>
                {props.skills.map((item, i) => 
                <li 
                    key={i}
                    css={
                        css`
                        @media(max-width: ${breakPoints[0]}){
                            display: inline-block;
                            margin: 0 ${rhythm(1)} 0 0;
                        }
                        font-family: 'Playfair Display';
                        font-style: italic;
                        color: ${color.grey};
                        margin: 0 0 ${rhythm(0.5)} 0;
                        white-space: nowrap;
                        `
                    }
                >
                    {item}
                </li>)}
            </ul>

            <div css={
                css`
                    grid-column: 3 / span 4;
                `
            }>
                <p>
                    {props.description}
                </p>
            </div>

            
            <div css={
                css`
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    grid-row: -2; 
                    grid-column: 3 / span 1;
                    @media(max-width: 960px){
                        margin-top: ${rhythm(2)};
                        }
                    }
                `
            }>
                    <Link
                        to={props.slug}
                    >
                        <Button 
                            position="grid-column: span 3; 
                            width: 100px; 
                            margin-bottom: 2em;"
                            text="View"
                        />
                    </Link>  
                    
                    <div css={
                        css`
                        display: flex;
                        align-items: center;
                        // justify-content: space-around;
                        position: relative; 
                        `
                    }>

                        {props.site && 
                            <IconButton
                                to="site"
                                link={props.site}
                                alt="Visit Site"
                            />
                        }

                        {props.github && 
                            <IconButton
                                to="github"
                                link={props.github}
                                alt="View source code on Github"
                            />
                        }

                        {props.behance && 
                            <IconButton
                                to="behance"
                                link={props.behance}
                                alt="View project on Behance"
                            />
                        }
                

                    </div>
            </div>

        </section>
        
    )
}

export default (props) => {

    const data = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(
              sort: {fields: [frontmatter___order], order: ASC}
              filter: {
              frontmatter:{
                type: {regex: "/Work/"}
              }
            }){
              totalCount
              edges{
                node{
                  id 
                  frontmatter{
                    type
                    title
                    skill
                    description
                    date(formatString:"DD MMMM, YYYY")
                    thumbnail 
                    github 
                    site
                  }
                  fields{
                    slug
                  }
                  excerpt
                }
              }
            }
          }
          
        `
      )

      
    return ( 


        <section>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Intersection
                    bottomRoot = '-200px'
                    key={node.id}
                >
                    <Work
                        id={node.id}
                        slug={node.fields.slug}
                        thumbnail={node.frontmatter.thumbnail}
                        title={node.frontmatter.title}
                        description={node.frontmatter.description}
                        skills={node.frontmatter.skill}
                        github={node.frontmatter.github}
                        site={node.frontmatter.site}

                    />
                </Intersection>

            ))}
        </section>
    

    )
}