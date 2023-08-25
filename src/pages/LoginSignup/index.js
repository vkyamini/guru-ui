import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./style.css";

export default function LoginSignup() {
  const [showLogin, setShowLogin] = useState(true);

  const styles = {
    p: {
      color: "black",
      textAlign: "center",
    },
    link: {
      textAlign: "center",
    },
  };

  return (
    <div id="container">
     {/* <centre><p>For trial login</p>
      <p>username:test@gmail.com</p>
      <p>password:password</p></centre>  */}
      {/* <p id="header">Guru</p> */}
      {showLogin ? <Login /> : <Signup />}
      <div className="login-signup-footer">
        <p
          className={`login-signup-option ${showLogin ? "selected" : null}`}
          onClick={() => setShowLogin(true)}
          style={{ marginRight: `20px` }}
        >
          Login
        </p>
        <p
          className={`login-signup-option ${!showLogin ? "selected" : null}`}
          onClick={() => setShowLogin(false)}
        >
          Signup
        </p>
      </div>
    </div>
  );
}
