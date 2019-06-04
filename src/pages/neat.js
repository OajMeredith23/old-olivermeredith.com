import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
   <section className="brief">
       <h1>Brief</h1>
       <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deserunt veniam error quia consectetur natus nobis explicabo dolore pariatur dolorem debitis ab libero et eaque cum quae repudiandae, dignissimos ad minima. Est iste impedit sunt exercitationem facere, velit quasi sapiente tenetur illo odio, sed, error repellat voluptas magni vel ex!
       </p>
   </section>
   <section className="work">
       <figure>
           <div className="work-text">
               <h1>Research</h1>
               <p>
               But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
               </p>
           </div>
           <div className="work-images">
               <div className="4-col">
                   <img src="" alt=""/>
               </div>
               <div className="4-col">
                   <img src="../assets/NEAT/research-stats.png" alt=""/>
                   <img src="" alt=""/>
                   <img src="" alt=""/>
               </div>
           </div>
       </figure>
   </section>
  </Layout>
)

export const query = graphql`
{
    site {
      siteMetadata {
        title
      }
    }
  }
`