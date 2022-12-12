import React from "react";
import styled from "styled-components";
import "./Stats.css"
import "../App.css";
const Stats = () => {
  return (
    // streak 
      <div className="calendergty">
       <div align="center">
     <h2 className='skillDes'>My <span className='name1'>My github Statistics</span></h2>
      <div id='stats'>
      
        <img src="https://github-readme-stats.vercel.app/api?username=mrprincesingh&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true" alt="stat" />
      <br></br>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mrprincesingh&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="stat" />
        <br></br>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=mrprincesingh&theme=highcontrast&hide_border=false" alt="stat" />
  </div>
      </div>
      </div>
   
  );
};

export default Stats;