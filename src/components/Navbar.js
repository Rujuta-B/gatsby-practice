import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        {" "}
        <h1>Web Warrior</h1>
      </Link>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/projects/portfolio">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
