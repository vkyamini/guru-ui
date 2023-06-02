import React from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../../utils/API";
import "./style.css"
 


 export default function SignUp(){
    return(
       
    <div id="container">
    <form id="loginform">
       
    <p id="logintext">Sign Up!</p>
        <input type="text" placeholder="email@gmail.com" id="email"/><br></br><br></br>
        <input type="password" id="password"/><br></br><br></br>
        <button id="loginbtn">Sign up</button>
    </form>
    </div>
    )
}