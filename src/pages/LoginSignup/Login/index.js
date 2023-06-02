import React from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../../utils/API";
import "./style.css"
 


 export default function Login(){
    return(
       
    <div id="container">
    <form id="loginform">
       
    <p id="logintext">Login</p>
        <input type="text" placeholder="email@gmail.com" id="email"/><br></br><br></br>
        <input type="password" id="password"/><br></br><br></br>
        <button id="loginbtn">Login</button>
    </form>
    </div>
    )
}