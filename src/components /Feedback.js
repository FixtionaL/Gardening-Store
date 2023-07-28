import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainNav from "./mainNav";
import Sidebar from "./sidebar";

const Feedback = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with your backend API endpoint to handle feedback submission
      const apiUrl = "http://localhost:8081/post";

      // Replace 'YOUR_JWT_TOKEN' with the actual JWT token generated from your backend after authentication
      const token = localStorage.getItem("token");

      // Configuring the headers with JWT token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Sending the feedback data to the server
      const response = await axios.post(
        apiUrl,
        {
          name: name,
          email: email,
          feedback: feedbackText,
        },
        config
      );

      navigate("/home");
      if (response.status === 201) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div>
      <div>
        <MainNav />
        <div>
          <Sidebar />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div id="main-registration-container">
        <div id="register">
          <h2 className="head">Review Page</h2>
          <div>
            <div>
              <br />
              <label>Name ↴ &nbsp;&nbsp;</label>
              <br />
              <input
                type="text"
                id="name"
                className="inputs"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type Here"
              />
            </div>
            <div>
              <br />
              <label>Email ↴ &nbsp;&nbsp;</label>
              <br />
              <input
                type="email"
                id="email"
                className="inputs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type Here"
              />
            </div>
            <div>
              <br />
              <label>Feedback ↴ &nbsp;&nbsp;</label>
              <br />
              <br />
              <textarea
                id="feedback"
                className="feedback_input"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Enter your feedback here..."
              />
            </div>
            <br />
            <button type="submit" className="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
