import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import profile from '../../Profile'
import API from "../../../api/API";
import "./style.css"
 


 export default function Login(){
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          navigate(`/profile`);
        }
      }, []);
   
    const loginUser = (e) => {
        e.preventDefault();

        API.getAllUsers({email: emailInput, password: passwordInput})
        
            .then((data) => {
                const storedToken = data.data.token;
                const userid = data.data.user._id;
                console.log("i am userid", userid)
            // save token from data in local storage
                localStorage.setItem("token", storedToken)
             
                
           // re-route to profile change 
           navigate(`/profile`);
                
            }) 
            .catch((err) => { 
               alert("invalid credentials",err)
            });
    }

    return(
       
    <div id="container">
    <form id="loginform">
       
    <p id="logintext">Login</p>
        <input 
            type="text"
            placeholder="email@gmail.com" 
            id="email" 
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
        />
        <input 
            type="password" 
            id="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button id="loginbtn" onClick={loginUser}>Login</button>
    </form>
    </div>
    )
}