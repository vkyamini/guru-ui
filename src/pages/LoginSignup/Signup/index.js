import React, { useState } from "react";
import Login from "../Login";
import API from "../../../api/API";
import LocationDropdown from "../../../shared/PlacesDropDown";
import Dropdown from "../../../shared/Dropdown";
import UnknownSkill from "../../../shared/UnknownSkill";
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
  const [skillunknownInput, setskillunknown] = useState([]);
  const [locationInput, setlocationInput] = useState(" ");

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
      skillsUnknown: skillunknownInput,
      Location: locationInput,
    })
      .then((data) => {
        alert("sucessfull, please Login", data);
        navigate("/login");
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
        <div id="inputskill">
          <LocationDropdown setlocationInput={setlocationInput} />
        </div>

        <p>skills can Teach</p>
        <div id="inputskill">
          <Dropdown setSkillInput={setSkillInput} />
        </div>
        <p>skill you want to learn</p>
        <div id="inputskill">
          <UnknownSkill setskillunknown={setskillunknown} />
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
