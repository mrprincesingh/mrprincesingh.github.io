import React from "react";
import "./Navbar.css";
import Logo from "../../assest/giphy.gif";
import data from "./data";
import cv from "../../assest/Prince_Singh_Resume.pdf";
import { ImDownload } from "react-icons/im";
const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <a href="index.html"  className='nav_logo'>
          <img src={Logo} alt="logo"  />
        </a>
       
        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div>
        <a  href="https://drive.google.com/file/d/11JZzxtl0CU3PL-Rx89glde13Cw_Q4VeQ/view?usp=sharing" target="_blank" download={cv} className="btn primary">
            Download Resume
            <ImDownload />
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
