import React from "react";
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <h1 className="logo">DEV@Deakin</h1>
       <div className="search-bar">
        <input type="text" placeholder="Search articles, tutorials..." />
        <button className="search-btn">Search</button>
      </div>
      <nav className="nav">
        <button>Post</button>
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Header;