import React, {useEffect, Component} from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"
import github from "../../assets/gh-black.svg"
import behance from "../../assets/behance-black.svg"
import githubWhite from "../../assets/gh-white.svg"
import behanceWhite from "../../assets/behance-white.svg"
import site from "../../assets/link.svg"
import siteWhite from "../../assets/link-white.svg"


export default class IconButton extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            icon: ''
        }
    }

    componentDidMount(){
        if(this.props.to === "github"){

            if(window.innerWidth > 959 && this.props.whiteAtLargeScreen){
                this.setState({icon: githubWhite}) 
            } else if(this.props.white){
                this.setState({icon: githubWhite}) 
            } else {
                this.setState({icon: github}) 
            }

        } else if (this.props.to === 'behance'){

            if(window.innerWidth > 959 && this.props.whiteAtLargeScreen){
                this.setState({icon: behanceWhite}) 
            } else if(this.props.white){
                this.setState({icon: behanceWhite}) 
            }
            
            else { 
                this.setState({icon: behance}) 
            }

        } else if (this.props.to === 'site' ){

            if(window.innerWidth > 959 && this.props.whiteAtLargeScreen){
                this.setState({icon: siteWhite}) 
            } else if(this.props.white){
                this.setState({icon: siteWhite}) 
            }  else { 
                this.setState({icon: site}) 
            }

        }
    }
    

    render(){
        return(
                
                <a 
                href={this.props.link} 
                target="_blank"
                rel="noopener"
                onMouseEnter={(e) => console.log(e)}
                css={
                    css`
                        display: block;
                        position: relative;
                        padding: 0.5em;
                        img { 
                            height: 70%; 
                            transition: .1s;
                            object-fit: contain;
                            &:hover {
                                transform: scale(1.1);
                            }
                        }
                        @media(min-width: 767px){
                            ${this.props.alt && 
                                `&::after{
                                    content: "${this.props.alt}";
                                    position: absolute;
                                    padding: 0.5em;
                                    top: -50%;
                                    left: 100%;
                                    white-space: nowrap;
                                    color: ${color.bgColor};
                                    background-color: ${color.grey};
                                    border-radius: 5px;
                                    opacity: 0;
                                    z-index: 5;
                                    pointer-events: none;
                                }
                                &:hover{
                                    &::after{
                                        opacity: 1;
                                        transition: .1s ease-out;
                                    }
                                }
                            }`
                            }
                        
                    `
                }
                >
                    <img 
                        css={
                            css`
                                height: 35px;
                                width: 35px;
                                margin: 0;
                            `
                        }
                        src={this.state.icon} 
                        alt={this.props.alt}
                        target="_blank"
                    />
                    
                </a>
                
        )
    }
}