import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
  return (
    <nav>
      <div>
        <Link to="/" className="nav-link">Home</Link>
      </div>
      <div>
        <Link to="/posts/new" className="nav-link">New Post</Link>
      </div>
      <div>
        <Link to="/signin" className="nav-link">Sign In</Link>
      </div>
      <div>
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </div>
    </nav>
  );
};
export default NavBar;
