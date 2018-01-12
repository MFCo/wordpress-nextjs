import React from 'react';

const NavBar = () =>
  <header className="navbar">
    <nav>
      <h1 className="nav-title">
        YOUR OWN NEXTJS BLOG WITH WORDPRESS
      </h1>
      <a className="nav-link" href="/">
        Go Home
      </a>
    </nav>
    <style jsx>{`
      .navbar{
        height: 80px;
        background: linear-gradient(to bottom right, black, grey);
        width: 100%;
        z-index: 1;
        text-align: center;
        padding: 20px 0;
        box-sizing: content-box;
      }
      .nav-link, .nav-title {
        color: white;
      }
      .nav-link {
        float: right;
        margin-right: 20px;
      }
    `}</style>
  </header>;
export default NavBar;