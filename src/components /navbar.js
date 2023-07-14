import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="mainH">
          Urban Eden
        </Link>
      </div>
      <div className="navOpt">
        <Link to="/login" className="navbarh">
            Login
        </Link>
        <Link to="/signUp" className="navbarh">
            SignUp
        </Link>
     </div>
    </div>
  );
};

export default Navbar;

