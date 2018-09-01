import React from 'react'
import Link from 'gatsby-link'


const IndexPage = () => (
  <div>
  <div className="hero">
  <div className="hero-group"> 
  
   <div className="name">
   <div className="nameGroup"> 
   <Link to="/"> <img src={require ('../imges/Logo.svg')} width="75"/> </Link>
   <h1>Messay F. Denbel</h1> 
   </div>
    </div>
    <div className="nameCont"> <p>HI, I am a product designer focused on creating digital experiences who has a passion for motion, visual design, human-centered designer. I really enjoy digging into complex user experience problems with a deliberate curious mindset. All of my work is based on applying the design process to a variety of problems. 
      </p> 
    </div>
     <p></p>
     <div className="social">
     <Link to="/"> <img src={require ('../imges/insta.svg')} width="20"/> </Link>
     <Link to="/"> <img src={require ('../imges/dribbble.svg')} width="20"/> </Link>
     <Link to="/"> <img src={require ('../imges/twitter.svg')} width="20"/> </Link>
     <Link to="/"> <img src={require ('../imges/medium.svg')} width="20"/> </Link>
     <Link to="/"> <img src={require ('../imges/linkedin.svg')} width="20"/> </Link>
     <Link to="/"> <img src={require ('../imges/behance.svg')} width="100"/> </Link>
     <Link to="/"> <img src={require ('../imges/github.svg')} width="20"/> </Link>
     </div>
    </div>
  </div>
 

  
 </div>
)

export default IndexPage
