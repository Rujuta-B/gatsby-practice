import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query MyQuery{
      site{
        siteMetadata{
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <Link to="/">
       <h1>{title}</h1>
      </Link>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/projects/portfolio">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
