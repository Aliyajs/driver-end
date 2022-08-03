import React from "react";
import './header.css';

export default function Header(){
  return(
    <div>
      <header className="header">
        <a href="#" className="logo"><img src="/img/logo.svg" alt="logo"/></a>
        <h3 className="logo_name">Преподаватель ПДД и ОБДД</h3>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li><a href="#work">Our Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
    </div>
  )
}