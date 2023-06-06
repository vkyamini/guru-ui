import React, { useState } from "react";
import API from "../../../api/API";
import Dropdown from "../../../shared/Dropdown";
import getProfileUrl from "./showUploadWidget";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  // state for all the sign ups fields
  const navigate = useNavigate();
  const [usernameInput, setuserName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [skillInput, setSkillInput] = useState([]);

  const getProfilePicUrl = (e) => {
    e.preventDefault();
    getProfileUrl(setprofilePic);
  };

  const signUpUser = (e) => {
    e.preventDefault();
    API.creatUsers({
      username: usernameInput,
      email: emailInput,
      password: passwordInput,
      profilepic: profilePic,
      skillsKnown: skillInput,
    })
      .then((data) => {
        console.log(" i am the data" ,data);
        navigate(`/search`);
      })
      .catch((err) => {
        alert("invalid data", err);
        console.log("i am erroe", err);
      });
  };

  return (
    <div id="container">
      <form className="login-signup-form">
        <p id="signuptext">Sign Up</p>
        <input
          type="text"
          placeholder="name"
          value={usernameInput}
          onChange={(e) => setuserName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="email@gmail.com"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="**************"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          className="input-field"
        />
        <p>What skills do you know?</p>
        <div id="inputskill">
          <Dropdown setSkillInput={setSkillInput} />
        </div>
        <button id="addpic" onClick={getProfilePicUrl}>
          Upload Profile Pic
        </button>
        <button id="signupbtn" onClick={signUpUser}>
          Sign up
        </button>
      </form>
    </div>
  );
}
