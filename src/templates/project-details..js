import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project.modules.css'

export default function ProjectDetails() {
  return (
    <Layout>
        <div className={styles.details}>
            <h2>title</h2>
            <h3>stack</h3>
            <div className={styles.details}>
                <Img fluid={data} />
            </div>
                <div className={styles.html} dangerouslySetInnerHTML={data} />
        </div>
    </Layout>
  )
}
