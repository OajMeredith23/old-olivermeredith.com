import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { color } from "../utils/colors"
import Button from "./button"


export default props => {
    const breakPoints = ['768px']
    return (
        <section css={
            css`
            @media(min-width: ${breakPoints[0]}){
                display: grid;
                grid-template-columns: repeat(12, minmax(0, 1fr));
                grid-template-rows: 50vh auto auto;
                grid-gap: ${rhythm(2)} 0;
                padding: 0;
            }
            margin-bottom: ${rhythm(8)}
            `
        }>
            <div css={
                css`
                background: grey;
                height: 300px;
                padding: 0;
                @media(min-width: ${breakPoints[0]}){
                    height: auto;
                    grid-row: 1;
                    grid-column: 3 / -1; 
                }
                `
            }>
                <img 
                    css={
                        css`
                            height: 100%;
                            width: 100%; 
                            object-fit: cover;
                        `
                    }
                    src={props.image} 
                    alt={props.imageAlt}
                />
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
                <h1 css={
                    css`
                        margin: ${rhythm(1)} 0 0 0;

                    `
                }>{props.title}</h1>
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
                {props.skills.map((skill, i) => 
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
                    {skill}
                </li>)}
            </ul>

            <div css={
                css`
                    grid-column: 3 / span 4;
                `
            }>
                <p>
                    {props.intro}
                </p>
            </div>

            <Button 
            position='grid-row: -2; grid-column: 3;'
            text="View"/>
        </section>
    )
}