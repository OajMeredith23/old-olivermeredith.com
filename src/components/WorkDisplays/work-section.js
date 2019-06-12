import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"
import Layout from "../layout"
import Button from "../Buttons/Button"
import IconButton from "../icon-button"
import LazyImg from "../LazyLoad/lazy-img"
import LazyVid from "../LazyLoad/lazy-vid"
import Intersection from "../intersection"
import WorkFooter from "./work-footer"



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
                `
            }
    
        >

            <div css={
                css`
                height: 300px;
                padding: 0;
                overflow: hidden;
                @media(min-width: ${breakPoints[0]}){
                    height: auto;
                    grid-row: 1;
                    grid-column: 3 / -1; 
                    div {
                        width: 100%;
                        height: 100%;
                    }
                }
                `
            }>
            
                <Link
                    to={props.slug}
                >
                    
                    {
                    props.thumbnail.substring(props.thumbnail.length - 4, props.thumbnail.length) === '.mov' ? (
                        <LazyVid
                            vid={props.thumbnail}
                            poster={props.poster}
                        >
                        </LazyVid>    
                        )
                        : (
                        <LazyImg 
                        img={props.thumbnail}
                        />
                    )
                            
                        }
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
                    grid-row: -2; 
                    grid-column: 3 / -1;
                    max-height: 45px;
                    @media(max-width: 960px){
                        margin-top: ${rhythm(2)};
                        opacity: 0;
                    }
                    ${props.onScreen ? `
                    transform: translateX(0);
                    opacity: 1;
                    ` 
                    : ` 
                    transform: translateX(30px);
                    opacity: 0;
                    `
                    }
                    transition: 1s ease-out;

                    a{
                        margin-right: ${rhythm(1)}
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
                    
                    

                        {props.site != 'None' && 
                            <IconButton
                                to="site"
                                link={props.site}
                                alt="Visit Site"
                            />
                        }

                        {props.github != 'None' && 
                            <IconButton
                                to="github"
                                link={props.github}
                                alt="View source code on Github"
                            />
                        }

                        {props.behance != 'None' && 
                            <IconButton
                                to="behance"
                                link={props.behance}
                                alt="View project on Behance"
                            />
                        }
                

                    
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
                    poster
                    github 
                    behance
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
                    bottomRoot = '-90%'
                    key={node.id}
                >
                    <Work
                        id={node.id}
                        slug={node.fields.slug}
                        thumbnail={node.frontmatter.thumbnail}
                        poster={node.frontmatter.poster}
                        title={node.frontmatter.title}
                        description={node.frontmatter.description}
                        skills={node.frontmatter.skill}
                        github={node.frontmatter.github}
                        behance={node.frontmatter.behance}
                        site={node.frontmatter.site}

                    />
                </Intersection>

            ))}
        </section>
    

    )
}