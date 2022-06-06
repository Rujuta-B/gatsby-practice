import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
//In the new version of Gatsby (v3 onwards), CSS modules need to be imported as ES Modules (import * as styles) instead of import styles

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects/portfolio ">My Portfolio Projects</Link>
        </div>
        <img src="banner.png" alt="site banner" style={{ maxWidth: '80%' }} />
        <p>{ title } - { description }</p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
