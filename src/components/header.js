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
  <Link to="/Lets_talk"><button> Let's<br/> Talk  </button> </Link>
  </div>
  </div>
)

export default Header
