import React, { useState } from "react";
import Navbar from "./navbar";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Userslice";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({ ...prevFields, [name]: value }));
    dispatch(login({ email: fields.email }));
  };

  const submitUserRegistrationForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8181/api/v1/auth/authenticate", fields)
      .then((res) => {
        let token = res.data.token;
        localStorage.setItem("token", token);
        let username = res.data.name; // Get the username from the response

        // Dispatch the login action with the user object containing the email and username
        dispatch(login({ email: fields.email, username }));

        navigate("/home", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        // Handle login error here
        alert("Invalid email or password. Please try again.");
      });

    // const Get=()=>{
    // e.preventDefault();
    fetch(`http://localhost:8181/api/v1/demo/get/${fields.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("GET request failed");
        }
      })
      .then((data) => {
        console.log(data.name);

        // setTitle(data.name)
        localStorage.setItem("username", data.name);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // }

    if (validateForm()) {
      let updatedFields = {
        email: "",
        password: "",
      };
      setFields(updatedFields);
      //   alert("Your Form has been submitted successfully.");
      // navigate("/home");
    }
  };

  const validateForm = () => {
    let updatedErrors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      updatedErrors["email"] = "*Please enter your Email ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      const pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        updatedErrors["email"] = "*Please enter a valid Email ID.";
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
  const [Email, setEmail] = useState("");

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
            <label> Email ↴ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <br />
            <input
              type="text"
              name="email"
              className="inputs"
              value={fields.email || ""}
              onChange={handleChange}
              placeholder="Enter Here"
            />
            <br />
            <div className="errorMsg">{errors.email}</div>
            <br />
            <label>Password ↴&nbsp;&nbsp;</label>
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
