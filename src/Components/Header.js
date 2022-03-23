import React from "react";
import { Link } from "react-router-dom";

function Header({ user }) {
  return (
    <div className="h-20 flex items-center justify-end px-3 md:px-0">
      <div
        className="h-10 w-36 border border-gray-900 rounded-md text-gray-900 flex items-center justify-center
hover:bg-gray-900 hover:text-gray-100 font-medium tracking-wide text-sm md:text-base"
      >
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/write">Write Stories</Link>
        )}
      </div>
    </div>
  );
}

export default Header;
