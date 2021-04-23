import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="px-5 py-3 bg-purple-600 text-white flex justify-between items-center">
      <Link to="/">
        <h3 className="logo">Logo</h3>
      </Link>
      <ul className="flex">
        <Link to="/post" className="ml-3">
          <li>Posts</li>
        </Link>
        <Link to="/gallery" className="ml-3">
          <li>Gallery</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
