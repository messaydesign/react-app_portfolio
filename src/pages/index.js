import React from 'react'
import Link from 'gatsby-link'


const IndexPage = () => (
  <div>
  <div className="hero">
  <div className="hero-group"> 
  
   <div className="name">
   <div className="nameGroup"> 
    
   <h1>  <img src={require ('../imges/Logo.svg')} width="75"/> Messay F. Denbel  </h1> 
   </div>
    </div>
    <div className="nameCont"> <p> <strong>👋🏽 Hi,</strong> <br/>I am a product designer focused on creating digital experiences who has a passion for motion, 
    visual design, human-centered designer. I really enjoy digging into complex user experience problems with a deliberate curious mindset. 
    All of my work is based on applying the design process to a variety of problems. 
      </p> 
    </div>
     <p></p>
     <div className="social">
     <a href="https://www.instagram.com/messay_d/"><img src={require ('../imges/insta.svg')} width="20"/></a>
     <a href="https://dribbble.com/messay_design"><img src={require ('../imges/dribbble.svg')} width="20"/></a>
     <a href="https://twitter.com/messay_co"><img src={require ('../imges/twitter.svg')} width="20"/></a>
     <a href="/"><img src={require ('../imges/medium.svg')} width="20"/></a>
     <a href="www.linkedin.com/in/messayf"><img src={require ('../imges/linkedin.svg')} width="20"/></a>
     <a href="https://www.behance.net/messayco"><img src={require ('../imges/behance.svg')} width="100"/></a>
     <a href="/"><img src={require ('../imges/github.svg')} width="20"/></a>
   
     
   
     </div>
    </div>
  </div>
 <main>
   <div calssName="sub">
   

   <div className="mainGroup">
  <h1 calssName="main">
  Let’s Build <br/> Something great together 👍🏽
  </h1>
  <p>
  It is all about solving problems, if not it would be pixel art. Product design always starts with understanding the problem rigorously.The fun part being a product designer is that I have problems to solve every single day with collaborative problem-solving process. In my 7+ years journey I realize that close collaboration of multidisciplinary team with a design process creates a winning product. 
Each individual from different disciplinary provides a unique and valuable perspective about the problem, as product enhances and feature updates have a huge impact across internal and external products.   In my product design process, I’ll be focusing on four areas I believe will facilitate my ability to make meaningful contributions to the team I am working with.
</p>

  </div>
</div>
<section className="sectionName"> 
  <div className="sectionGroup">
  <div className="section1"> 
  
  <h1> <div> <img src={require ('../imges/user-r.svg')} width="50"/> </div> User research </h1>
  <p>
    Products are used by whole range of people, from different cultures, with physical, and situational
    constraints. User research will enable us to observe users in their natural environment, giving us a
    better understanding of the way users work.
</p> 
</div>
  <div className="section1"> 
  
  <h1> <div> <img src={require ('../imges/research.svg')} width="50"/> </div> Business research</h1>
  <p>
  Developing a deeper understanding of the business mission, its culture, and operations to get a
clear understanding of where the company is heading to and what type of product is aspired to
build.
</p> 
</div>

  <div className="section1">
  
  <h1> <div> <img src={require ('../imges/design.svg')} width="42"/> </div> Design Decision</h1>
   <p>
   For every design decision creating a quick sketch, flowcharts, prototypes and detailed documentation
will help to have a clear understanding throughout the team I am working with, this will
clear the air between Product, Business and Engineering.
</p> 
</div>
  <div className="section1">
  
  <h1> <div> <img src={require ('../imges/user.svg')} width="50"/> </div> Communication </h1> 
  <p>
  To pitch any design decision from any product team needs a clear pitch deck to get buy from
stakeholders. In this process having a working prototype really help to avoid communication
pitfalls and make positive impact.
</p>

 </div>
  
  </div>
  
  </section>
  </main>

  
  
  <div className="work"> 
  <div className="devider"> <img src={require ('../imges/straight.svg')}/> </div>
  <div className="workGroup">
  <div className="Cards">
<div className = "Card"> <img src={require ('../imges/img1.jpg')}/> 
<h3> Rethinking Design</h3>
<p> The mavs official App</p>
  </div>
<div className = "Card1"> <img src={require ('../imges/img1.jpg')}/>
<h3> Rethinking Design</h3>
<p> The mavs official App</p></div>
<div className = "Card2"> <img src={require ('../imges/img1.jpg')}/>
<h3> Changing the way <br/>fans buy tickets online.</h3>
<p> The mavs official App</p></div>

</div>
  </div>
  <div className="devider"> <img src={require ('../imges/straight.svg')}/>
   </div>
  </div>
  
<div className="sketch">
<div className="sketchGroup"><h3> I work closely with your development team, 
  marketing professionals and stakeholders to design and 
  develop UX and UI that make your website, application 
  or software a joy to use.</h3>
<div className="devider"> <img src={require ('../imges/straight.svg')}/> </div>
</div>

</div>

<div className="end">
<div className="endGroup">  
<div className="endInside">
  <div className="endImage">
  <h1>The<br/> Process</h1>
   </div>
  <div className="endimagetext">
    <h3>
    I work closely with your development 
    <div className="devider"> <img src={require ('../imges/straight.svg')}/> </div>
    <p> team,marketing professionals and stakeholders to design and 
  develop UX and UI that make your website, application 
  or software a joy to use. </p>
    </h3>
    
    </div>
</div>


  <Link to="/process"> <button> The Process</button> </Link> 

</div>
</div>

<div className="white">
<h1> Creating the world's most honest  and irreverent weather app.
</h1>
<div className="whiteGroup"> 
<div ClassName="WhiteGroupTwo"> <img src={require ('../imges/phone.png')}/> </div>
</div>
<div className="thanks">
<div className="thanksGroup"> 
<h3> I've been fortunate enough to be featured in highly acclaimed publications such as .net Magazine, 
  Computer Arts,  FastCompany, Wired, Inc Magazine, FirstRound Capital, The Washington Post, Bloomberg, 
  Business Insider and many others.</h3>
  <h2> Thank You! 🙏🏽 </h2>
</div>
</div>
</div>

 </div>
)

export default IndexPage
