import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Nick Rathbone</h1>
      <a href="https://github.com/nrathbone-turing/swe_fundamentals" target="_blank" rel="noreferrer">
        SWE Fundamentals GitHub Repo
      </a>
      <br />
      <Link to="/add">Add New Project</Link>
    </header>
  );
}

export default Header;