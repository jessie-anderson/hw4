import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
  const siteName = 'Home';
  const newPost = 'New Post';
  return (
    <nav>
      <div>
        <Link to="/" className="nav-link">{siteName}</Link>
      </div>
      <div>
        <Link to="/posts/new" className="nav-link">{newPost}</Link>
      </div>
    </nav>
  );
};
export default NavBar;
