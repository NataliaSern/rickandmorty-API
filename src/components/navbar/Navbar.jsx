import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" width="60" height="60" style={{borderRadius: '50%'}} src="https://i.pinimg.com/736x/f6/ba/96/f6ba9626bc761bc5408da7c4a4983afa.jpg" alt="Logo" />
            <span className="font-weight-bold" style={{color: "#333"}}>Rick & Morty &nbsp;</span>
            <span className="font-weight-light"  style={{color: "#000"}}> API Characters </span>
          </Link>
        </div>
      </div>
    );
  }
}
