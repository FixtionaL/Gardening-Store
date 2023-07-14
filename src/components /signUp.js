
import React, { useState } from "react";
import Navbar from "./navbar";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const submitUserRegistrationForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let updatedFields = {
        username: "",
        address: "",
        emailid: "",
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

    if (!fields["address"]) {
      formIsValid = false;
      updatedErrors["address"] = "*Please enter your address.";
    }

    if (typeof fields["address"] !== "undefined") {
      if (!fields["address"].match(/^[A-Z0-9._%+-]*$/)) {
        formIsValid = false;
        updatedErrors["address"] =
          "*Please enter alphanumeric characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      updatedErrors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      const pattern = new RegExp(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        updatedErrors["emailid"] = "*Please enter valid email-ID.";
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
      } else if (fields["password"].match(/^(?=.*[a-zA-Z0-9!@#$%^&*()])/)) {
        formIsValid = true;
        updatedErrors["password"] = "Password is Strong.";
      } else if (!fields["password"].match(/^(?=.*[!@#$%^&*()])/)) {
        formIsValid = true;
        updatedErrors["password"] = "Password is Good.";
      } else if (!fields["password"].match(/^(?=.*[0-9])/)) {
        formIsValid = true;
        updatedErrors["password"] = "Password is Weak.";
      }
    }

    setErrors(updatedErrors);
    return formIsValid;
  };

  return (
    <div>
      <Navbar />
      <div id="main-registration-container">
        <div id="register">
          <h2 className="head">SignUp</h2>
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
            <div className="errorMsg">{errors.username}</div>
            <br />
            <label>Address ↴ &nbsp;&nbsp;</label>
            <br />
            <input
              type="text"
              name="address"
              className="inputs"
              value={fields.address || ""}
              onChange={handleChange}
              placeholder="Type Here"
            />
            <br />
            <div className="errorMsg">{errors.address}</div>
            <br />
            <label>Email ↴ &nbsp;&nbsp;</label>
            <br />
            <input
              type="text"
              name="emailid"
              className="inputs"
              value={fields.emailid || ""}
              onChange={handleChange}
              placeholder="Type Here"
            />
            <br />
            <div className="errorMsg">{errors.emailid}</div>
            <br />
            <label>New Password ↴&nbsp;&nbsp;</label>
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
            <input type="submit" className="button" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
