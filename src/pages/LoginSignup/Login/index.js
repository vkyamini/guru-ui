import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import API from "../../../api/API";
import "./style.css";

export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(`/search`);
    }
  }, []);

  const loginUser = (e) => {
    e.preventDefault();

    API.getAllUsers({ email: emailInput, password: passwordInput })
      .then((data) => {
        const storedToken = data.data.token;
        const userId = data.data.user._id;

        // save token from data in local storage
        localStorage.setItem("token", storedToken);
        localStorage.setItem("userId", userId);

        // re-route to search change
        navigate(`/search`);
      })
      .catch((err) => {
        alert("invalid credentials", err);
      });
  };

  return (
    <div id="logincontainer">
     
     <p>To test the product without signing up use these credential</p>
     <p> Email: test@gmail.com </p>
     <p>password: password</p>
      
      
     
      <p id="header">Guru</p>
       <form className="login-signup-form">
        <p id="logintext">Login</p>
        <div>
          <i class="fa fa-envelope icon margin-right"></i>
          <input
            type="text"
            placeholder="email@gmail.com"
            className="input-field"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div>
          <i class="fa fa-key icon margin-right"></i>
          <input
            type="password"
            className="input-field"
            placeholder="************"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <button id="loginbtn" onClick={loginUser}>
          Login
        </button>
       </form>
      
    </div>
  );
}
