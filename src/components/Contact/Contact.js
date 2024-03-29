import React from 'react'

import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"
import { color } from "../../utils/colors"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import IconButton from "../Buttons/icon-button"
import Header from "../Header"
import profile from '../../assets/profile.jpg'
import LazyImg from "../Wrappers/lazy-img"
import styles from "./Contact.module.sass"

export default function Contact(props) {

  const data = useStaticQuery(
    graphql`
        {
          site{
            siteMetadata{
              title
              description
              github
              email
            }
        }
        }
      `
  )
  return (
    <>
      <Header text="Contact" />
      <section className={styles.container}>
        <div className={styles.image}>
          <LazyImg
            img={profile}
            imgAlt="Photograph of Oliver Meredith"
          />
        </div>
        <div className={styles.text}>
          <p>
            I love to make stuff on computers.
            <br />
            If you've got stuff you want made, get in touch.
          </p>
          <div className={styles.divider}></div>
          <h2><a href="mailto:mail@olivermeredith.com">{data.site.siteMetadata.email}</a></h2>
          <div className={styles.buttons}>
            <IconButton
              to="github"
              link={data.site.siteMetadata.github}
              alt="Github"
            />

          </div>
        </div>
      </section>
    </>
  )
}