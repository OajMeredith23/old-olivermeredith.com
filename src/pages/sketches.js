import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import LazyImg from "../components/Wrappers/lazy-img"
import styles from "./sketches.module.sass"

const CodeBox = (props) => {
  let { code } = props;

  let showing = code;
  return (
    <article className={`${styles.codePenBox} ${showing != null ? styles.inView : ''}`}>
      <div className={styles.close} onClick={props.handleClick(null)}>
        <span></span><span></span>
      </div>
      <div key={code} dangerouslySetInnerHTML={{ __html: code }} />
    </article >
  )

}

export default ({ data }) => {

  const posts = data.allMarkdownRemark.edges
  console.log("posts")
  const [codePen, setCodePen] = useState(null)

  const showCodePen = function (e) {
    if (codePen) {
      setCodePen(null)
    } else {
      setCodePen(e)
    }
  }

  return (
    <Layout>

      <CodeBox code={codePen} handleClick={() => showCodePen} />

      <div className={styles.container}>
        {data.allMarkdownRemark.edges.map(post =>
          <article key={post.node.id} className={styles.sketch} onClick={() => showCodePen(post.node.html)}>
            <LazyImg img={post.node.frontmatter.poster} imgAlt={post.node.frontmatter.title} />
          </article>
        )}
      </div>
    </Layout >
  )
}

export const query = graphql`
{
  allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {
      frontmatter:{
        type: {regex: "/Sketch/"}
      }
    }){
      totalCount
      edges{
        node{
          id 
          frontmatter{
            type
            title
            date(formatString:"DD MMMM, YYYY")
            poster
            github 
          }
          html
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
  
`