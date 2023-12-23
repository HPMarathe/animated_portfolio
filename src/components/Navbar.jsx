import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Hrushikesh Marathe</span>
        <div className="social">
          <a href="https://www.linkedin.com/in/hrushikesh-marathe">
            <img src="/public/Linkedin.png" alt="" />
          </a>
          <a href="">
            <img src="/public/Twitter.png" alt="" />
          </a>
          <a href="">
            <img src="/public/Github.png" alt="" />
          </a>
          <a href="">
            <img src="/public/Instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
