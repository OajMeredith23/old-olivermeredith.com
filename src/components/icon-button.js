import React, {useEffect, Component} from 'react'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import github from "../assets/gh-black.svg"
import behance from "../assets/behance-black.svg"
import githubWhite from "../assets/gh-white.svg"
import behanceWhite from "../assets/behance-white.svg"
import site from "../assets/link.svg"
import siteWhite from "../assets/link-white.svg"


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
        console.log(() => icon())
        return(
                
                <a 
                href={this.props.link} 
                target="_blank"
                rel="noopener"
                css={
                    css`
                        display: inline-block;
                        height: 45px;
                        width: 45px;
                        margin: 0 ${rhythm(1)} 0 0;
                        img { 
                            height: 70%; 
                            width: 70%;
                            object-fit: contain;
                            &:hover {
                                transform: scale(1.1);
                            }
                        }
                        div{
                            display: none;
                            @media(min-width: 767px){
                                display: block;
                                position: absolute; 
                                left: calc(100% + 20px);
                                top: 0;
                                white-space: nowrap;
                                opacity: 0;
                                transition: .2s ease-out;
                                transform: translate(5px, 0px)
                            }
                        }
                        @media(min-width: 767px){
                            &:hover{
                                div{
                                    color: ${color.grey};
                                    opacity: 1;
                                    transition: .1s ease-in;
                                    transform: translate(0px, 0px)
                                }
                            }
                        }
                        
                    `
                }
                >
                    <img 
                        src={this.state.icon} 
                        alt={this.props.alt}
                        target="_blank"
                    />
                    <div>
                        <p>{this.props.alt}</p>
                    </div>
                    
                </a>
                
        )
    }
}