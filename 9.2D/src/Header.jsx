import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">DEV@Deakin</Link>
      <div className="search-bar">
        <input type="text" placeholder="Search articles, tutorials..." />
        <button className="search-btn">Search</button>
      </div>
      <nav className="nav">
        <Link to="/post"><button>Post</button></Link>
        <Link to="/plans"><button>Plans</button></Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Header;