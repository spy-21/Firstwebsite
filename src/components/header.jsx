import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </>
  );
};

export default Header;
