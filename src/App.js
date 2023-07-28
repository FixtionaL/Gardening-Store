import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUp from "../src/components /signUp";
import Login from "../src/components /login";
import Home from "../src/components /home";
import Navbar from "./components /navbar";
import MainPage from "./components /main";
import Profile from "./components /profile";
import Cart from "./components /cart";
import Wishlist from "./components /wishlist";
import Store from "./components /store";
import Stores from "./components /stores";
import Feedback from "./components /Feedback";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar />  */}

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/signUp" element={<SignUp></SignUp>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/home" element={<MainPage></MainPage>} />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/wishlist" element={<Wishlist></Wishlist>} />
          <Route path="/store" element={<Store></Store>} />
          <Route path="/stores" element={<Stores></Stores>} />
          <Route path="/review" element={<Feedback></Feedback>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
