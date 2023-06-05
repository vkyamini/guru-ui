import React, { useState } from "react";
import API from "../../../api/API";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import getProfileUrl from "./showUploadWidget";
import "./style.css";

export default function SignUp() {
  // state for all the sign ups fields
  const [usernameInput, setuserName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [skillInput, setSkillInput] = useState("");
  //const [options , setdefaultOption] = useState ("");

  //   const lists=["java","sjhdcgbsdh"]
  //  setdefaultOption(options)

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
        console.log(data);
      })
      .catch((err) => {
        alert("invalid data", err);
        console.log("i am erroe", err);
      });
  };

  return (
    <div id="container">
      <form id="loginform">
        <p id="logintext">Please Sign Up!</p>
        <input
          type="text"
          placeholder="name"
          id="email"
          value={usernameInput}
          onChange={(e) => setuserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email@gmail.com"
          id="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <input
          type="password"
          placeholder="**************"
          id="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="skills"
          id="skill"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        {/*         
         <Dropdown 
              options={lists} 
              onChange={(e)=>setdefaultOption(e.target.value)} 
              value={options} 
              placeholder="Select an option" />; */}

        {/* <label>Skills Known</label>
        <select>
          <options value="HTML">HTML</options>
          <options  value="HTML">JavaScript</options>
          <options  value="HTML">Node.js</options>
        </select>
         */}

        <button id="addpic" onClick={getProfilePicUrl}>
          Profile Pic
        </button>
        <button id="loginbtn" onClick={signUpUser}>
          Sign up
        </button>
      </form>
    </div>
  );
}
