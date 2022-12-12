import React from "react";
import AboutImage from "../../assest/shikha.png";
import "./About.css";
import cv from "../../assest/Prince_Singh_Resume.pdf";
import { ImDownload } from "react-icons/im";
import data from "./data";
import Card from "../Header/Components/Card";
import {motion} from "framer-motion"

const About = () => {
  return (
    <section id="about" >
        <h2 className="titleh2">About Me</h2>
      <div className="about_conatiner">
      <div className="photo">
     <img src={AboutImage} alt="prince"  />
      </div>
      <div>
        <div>
        <div className="about_cards">
            {data.map((item) => {
              return (
                <Card key={item.id} className="about_card">
                  <span className="about_card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desec}</small>
                </Card>
              );
            })}
          </div>

        <p>
        Full-Stack Developer designs and maintains websites and systems to serve a company's needs. develop these platforms to function independently Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript,REACT , REACT-REDUX) AND writing code which is optimized.
          </p>
        </div>
        <br />
        <div>
        <p>
        i Learnt Full Stack Web Development from Masai School🏫(India's
            first Skill building School "Driven by Outcomes, Fuelled by
            Ambitions.")

          </p>
        </div>
        <br />
        <div>
        <p>
        💻 1200+ Hours Practical Coding , ⌛100+ Hours Soft Skill
            Development , 🌟80+ Mini Projects , 📚300 Hours Data Structures &
            Algorithms , ⏰100+ Hours Math & Logic , 📂10+ Projects & Hackathon

          </p>
        </div>
        <br />
        <div>
        <a href="https://drive.google.com/file/d/11JZzxtl0CU3PL-Rx89glde13Cw_Q4VeQ/view?usp=sharing"  target="_blank" download className="btn primary">
            Download Resume
            <ImDownload />
          </a>

        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
