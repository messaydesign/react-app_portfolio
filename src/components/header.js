import React from 'react'
import Link from 'gatsby-link'
import'./Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header"> 
  <div className="HeaderGroup">
  <Link className ="links" to="/"> Home </Link>
  <Link to="/Work"> Work </Link>
  <Link to="/Contact"> Contact </Link>
  <Link to="/About"> About </Link>
  <a href="mailto:info@messay.design?subject=lets work"> <button> Let's<br/> Talk  </button> </a>
  <Link to="/Lets_talk"> </Link>
  </div>
  </div>
)

export default Header
