import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUsername } from "../Redux/Userslice";
const MainNav = () => {
  const username = useSelector(selectUsername);

  return (
    <div className="navbar">
      <Link to="/home" className="mainH">
        Urban Eden
      </Link>
      <SearchBar />
      <Link to="/profile" className="navbarh">
        Welcome {localStorage.getItem("username")}
      </Link>
      <Link to="/cart" className="navbarh">
        Cart
      </Link>
      <Link to="/wishlist" className="navbarh">
        WishList
      </Link>
      <Link to="/" className="navbarh">
        LogOut
      </Link>
    </div>
  );
};

export default MainNav;
