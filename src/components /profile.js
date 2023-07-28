import React from "react";
import MainNav from "./mainNav";
import Sidebar from "./sidebar";
import img from "./IMG_6204.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Userslice";

const Profile = () => {
  const user = useSelector(selectUser);
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
      <div className="profile-container">
        <div className="profile-header">
          <h1 className="mainH">Profile</h1>
          <img src={img} alt="Profile Picture" className="profile-picture" />
        </div>
        <div className="profile-details">
          <div className="profile-info">
            <h2 className="profile-info-title">Personal Info</h2>
            <p className="profile-info-item">
              <span className="profile-info-label">Name: {localStorage.getItem("username")}</span>
              {/* {user.username} */}
            </p>
            <p className="profile-info-item">
              <span className="profile-info-label">Email:</span>{" "}
              NoobMark@gmail.com
            </p>
            <p className="profile-info-item">
              <span className="profile-info-label">Location:</span> Mars
            </p>
            <p className="profile-info-item">
              <span className="profile-info-label">Contact:</span>{" "}
              Twitter@elonmusk
            </p>
          </div>
          <div className="profile-actions">
            <button className="search-button">Edit Profile</button>
            <button className="search-button">Change Password</button>
          </div>
        </div>
        <div className="profile-bio">
          <h2 className="profile-bio-title">About Me</h2>
          <p className="profile-bio-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            auctor dolor sed arcu feugiat tristique. Curabitur eu ullamcorper
            neque. Sed pretium nibh ut quam eleifend, vel fringilla mauris
            venenatis. Vivamus nec interdum leo. Nam blandit lorem lorem, in
            efficitur quam tristique in. Aenean et metus dui. Nullam auctor
            vulputate tortor, vel finibus nulla rhoncus id. Sed volutpat velit
            non dapibus eleifend. Duis rutrum feugiat nunc. Sed eleifend
            consequat nibh in pharetra. Cras sit amet elit id lacus ultricies
            lacinia non vel felis. Suspendisse ut gravida est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
