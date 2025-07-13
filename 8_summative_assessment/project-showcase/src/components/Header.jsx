import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-left">
        <h1>Nick Rathbone</h1>
      </div>
      <div className="header-center">
        <a href="https://github.com/nrathbone-turing" target="_blank" rel="noreferrer">
          SWE Fundamentals GitHub Repo
        </a>
      </div>
      <div className="header-right">
        <Link to="/add">Add New Project</Link>
      </div>
    </header>
  );
}

export default Header;