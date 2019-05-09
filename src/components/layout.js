import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql} from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query{
                site{
                    siteMetadata{
                        title
                    }
                }
            }`
    )

    return(
    <div
        css={css`
        margin: 0 auto;
        max-width: 1280px;
        padding: ${rhythm(1)};
        padding-top: ${rhythm(0.5)};
        `}
    >
    {/* <nav css={
        css`
            position: sticky; 
            top: ${rhythm(0.5)};
            width: 100%;
        `
    }>
        <Link to={`/`}>
        <h3
            css={css`
            margin-bottom: ${rhythm(2)}; 
            display: inline-block;
            font-style: normal;
            `}
        >
            {data.site.siteMetadata.title}
        </h3>
        </Link>
        <Link
        to={`/about/`}
        css={css`
            float: right;
        `}
        >
        About
        </Link>
    </nav> */}
        {children}
    </div>
    )
}
