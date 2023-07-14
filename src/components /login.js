
import React, { useState } from "react";
import Navbar from "./navbar";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import {login } from "../Redux/Userslice"

const Login = () => {
    const dispatch = useDispatch()
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({ ...prevFields, [name]: value }));
    dispatch(login({username:fields.username}))
  };

  const submitUserRegistrationForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let updatedFields = {
        username: "",
        password: "",
      };
      setFields(updatedFields);
    //   alert("Your Form has been submitted successfully.");
      navigate("/home");
    }
  };

  const validateForm = () => {
    let updatedErrors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      updatedErrors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        updatedErrors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      updatedErrors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (fields["password"].length < 8) {
        formIsValid = false;
        updatedErrors["password"] = "*Please enter at least 8 characters.";
      } 
    }

    setErrors(updatedErrors);
    return formIsValid;
  };
  const [username,setUsername]=useState("");

  return (
    <div>
      <Navbar />
      <div id="main-registration-container">
        <div id="register">
          <h2 className="head">Login Page</h2>
          <form
            method="post"
            name="userRegistrationForm"
            onSubmit={submitUserRegistrationForm}
          >
            <br />
            <label> Username ↴ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <br />
            <input
              type="text"
              name="username"
              className="inputs"
              value={fields.username || ""}
              onChange={handleChange}
              placeholder="Type Here"
              
            />
            <br />
            <br />
            <label>Enter Password ↴&nbsp;&nbsp;</label>
            <br />
            <input
              type="password"
              name="password"
              className="inputs"
              value={fields.password || ""}
              onChange={handleChange}
              placeholder="Enter Here"
            />
            <br />
            <div className="errorMsg">{errors.password}</div>
            <br />
            <input type="submit" className="button" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
