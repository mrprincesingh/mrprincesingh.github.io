import React from "react";
import HeaderImage from "../../assest/dummy.gif"
import data from "./data";
import "./Header.css";
// import background from '../../assest/background.jpg'


const Header = () => {
  return (
    <header id="header">
   
   <div className="container header_container">
         {/* <img src ={background} alt="bg" width="100%"  /> */}
        <div className="header_profile">
           <img src={HeaderImage} alt="Header Image" width="100%"/>
     </div> 
    
     <h3>Hi 👋, I'm Prince Singh</h3>
     <div class="wrapper">
    <div class="static-txt"> And I'm a</div>
    <ul class="dynamic-txts">
      <li><span>Full Stack Developer </span></li>
      <li><span>MERN Developer</span></li>
      <li><span>Frontend Developer </span></li>
      <li><span>Backend Developer</span></li>
    </ul>
  </div>
         <div className="ptag">
         <p  >
          An aspiring Full Stack Web Developer💻. Capable of writing optimized code using React JS, Redux, HTML, and CSS on the front end and NodeJS, ExpressJS, and MongoDB on the backend to build single-page applications. also can do the magic of TypeScript, a team player who is proficient in working with a team.
          </p>
          </div> 
       
          <div className="header_cta">
          <a href="#contact" className="btn primary">Let's Connect</a>
          <a href='#Project' className="btn light">MY Work</a>
          </div>
          <div className="header_socials">
          {data.map(item =><a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)}
          </div>
      </div>
   
     
    </header>
  );
};

export default Header;
