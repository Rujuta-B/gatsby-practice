import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import Img from "gatsby-image"
import * as styles from '../styles/home.module.css'
//In the new version of Gatsby (v3 onwards), CSS modules need to be imported as ES Modules (import * as styles) instead of import styles

export default function Home({ data }) {
  console.log(data)
                
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects/portfolio ">My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql `
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
