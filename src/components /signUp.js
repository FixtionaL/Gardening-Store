import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fields, setFields] = useState({
    name: "",
    // address: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const submitUserRegistrationForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios
        .post("http://localhost:8181/api/v1/auth/register", fields)
        .then((res) => {
          console.log(fields);
          // alert(res.data.user);
          // setUserState(res.data.user);
          navigate("/login", { replace: true });
        });

      let updatedFields = {
        name: "",
        // address: "",
        email: "",
        password: "",
      };
      // setFields(updatedFields);
      // // alert("Your Form has been submitted successfully.");
      // navigate("/login");
    }
  };

  const validateForm = () => {
    let updatedErrors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      updatedErrors["name"] = "*Please enter your username.";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        updatedErrors["name"] = "*Please enter alphabet characters only.";
      }
    }

    // if (!fields["address"]) {
    //   formIsValid = false;
    //   updatedErrors["address"] = "*Please enter your address.";
    // }

    // if (typeof fields["address"] !== "undefined") {
    //   if (!fields["address"].match(/^[A-Z0-9._%+-]*$/)) {
    //     formIsValid = false;
    //     updatedErrors["address"] =
    //       "*Please enter alphanumeric characters only.";
    //   }
    // }

    if (!fields["email"]) {
      formIsValid = false;
      updatedErrors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      const pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        updatedErrors["email"] = "*Please enter valid email-ID.";
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
  // useEffect(() => {
  //   if (Object.keys(errors).length === 0) {
  //     console.log(fields);
  //     axios
  //       .post("http://localhost:8181/api/v1/auth/register", fields)
  //       .then((res) => {
  //         console.log(fields);
  //         // alert(res.data.user);
  //         // setUserState(res.data.user);
  //         // navigate("/login", { replace: true });
  //       });
  //   }
  // }, []);

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
              name="name"
              className="inputs"
              value={fields.name || ""}
              onChange={handleChange}
              placeholder="Type Here"
            />
            <br />
            <div className="errorMsg">{errors.name}</div>
            {/* <br />
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
            <div className="errorMsg">{errors.address}</div> */}
            <br />
            <label>Email ↴ &nbsp;&nbsp;</label>
            <br />
            <input
              type="text"
              name="email"
              className="inputs"
              value={fields.email || ""}
              onChange={handleChange}
              placeholder="Type Here"
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
            <input type="submit" className="button" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
