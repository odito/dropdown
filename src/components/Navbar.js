import React, { Component } from "react";

import Transition from "react-transition-group/Transition";
import "./Navbar.css";
import image from "./logo.png";

import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false
  };
 
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  closeNavbar = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
      <nav>
        <div className="logoBtn">
          <Link to="/" className="logo">
            <img  src={image} alt="img" />
          </Link>

          <div className="btn" onClick={this.handleToggle}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>

        {/* use showNav class to toggle */}
        <ul className={this.state.isOpen ? "showNav" : "undefined"}>
          <li>
            <Link to="/" onClick={this.closeNavbar}>
              home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={this.closeNavbar}>
              about
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={this.closeNavbar}>
              projects
          <i className="fas fa-caret-down"></i>
            </Link>
              <ul>
                <Link to="/about" onClick={this.closeNavbar}>
                electrical
            </Link>

              <Link to="/about" onClick={this.closeNavbar}>
               photovoltaic
            </Link>

              <Link to="/about" onClick={this.closeNavbar}>
                automotions
            </Link>
              </ul>

          </li>
          <li>
            <Link to="/contacts" onClick={this.closeNavbar}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
