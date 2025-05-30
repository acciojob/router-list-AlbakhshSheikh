import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
  );
}

export default Navigation;
