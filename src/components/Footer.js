import React from "react"
import "./Footer.css"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer id="footerContainer">
      <Link to="/contact">
        <div className="contactLink">Contact</div>
      </Link>
    </footer>
  )
}
