import React, { useState } from "react";
//import Login from "../Login";
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
        navigate(`/login`);
      })
      .catch((err) => {
        alert("invalid data", err);
        console.log("i am erroe", err);
      });
  };

  return (
    <div id="container">
      <p id="header">Guru</p>
      <form className="login-signup-form">
        <p id="signuptext">Sign Up</p>
        <div>
          <i class="fa fa-user icon margin-right"></i>
          <input
            type="text"
            placeholder="name"
            value={usernameInput}
            onChange={(e) => setuserName(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <i class="fa fa-envelope icon margin-right"></i>
          <input
            type="text"
            placeholder="email@gmail.com"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <i class="fa fa-key icon margin-right"></i>
          <input
            type="password"
            placeholder="**************"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="inputskill">
          <LocationDropdown setlocationInput={setlocationInput} />
        </div>

        <div className="inputskill">
          <Dropdown setSkillInput={setSkillInput} />
        </div>
        <div className="inputskill">
          <UnknownSkill setskillunknown={setskillunknown} />
        </div>

        <button id="addpic" onClick={getProfilePicUrl}>
          <i class="fa fa-file-picture-o"></i> Upload Profile Pic
        </button>
        <button id="signupbtn" onClick={signUpUser}>
          Sign up
        </button>
      </form>
    </div>
  );
}
