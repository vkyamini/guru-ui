import React, {useState} from "react";
import API from "../../../api/API";
import getProfileUrl from "./showUploadWidget";
import "./style.css";

export default function SignUp() {
  // state for all the sign ups fields
  const [usernameInput, setuserName] = useState("");
  const [emailInput ,setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [profilePic, setprofilePic] = useState("")

  const getProfilePicUrl = (e) => {
    e.preventDefault();
    getProfileUrl(setprofilePic);   
  }

  const signUpUser = (e) => {
    e.preventDefault();
    API.creatUsers({username:usernameInput,email:emailInput,password:passwordInput,profilepic:profilePic})
    .then((data)=>{
      console.log(data);
    }).catch((err)=>{
      alert("invalid data",err)
      console.log("i am erroe", err)
    });
  }

  return (
    <div id="container">
      <form id="loginform">
        <p id="logintext">Please Sign Up!</p>
        <input 
              type="text" 
              placeholder="name" 
              id="email"
              value={usernameInput}
              onChange={(e)=>setuserName(e.target.value)} />
        <input 
              type="text" 
              placeholder="email@gmail.com" 
              id="email" 
              value={emailInput}
              onChange={(e)=>setEmailInput(e.target.value)}  />
        <input
              type="password" 
              placeholder="**************"
              id="password"
              value={passwordInput}
              onChange={(e)=>setPasswordInput(e.target.value)} />
        
        {/* <label>Skills Known</label>
        <select>
          <options value="HTML">HTML</options>
          <options  value="HTML">JavaScript</options>
          <options  value="HTML">Node.js</options>
        </select>
         */}

        <button id="addpic" onClick={getProfilePicUrl}>Profile Pic</button> 
        <button id="loginbtn" onClick={signUpUser} >Sign up</button>
      </form>
    </div>
  );
}
