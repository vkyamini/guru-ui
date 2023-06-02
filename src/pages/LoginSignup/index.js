import React, {useState} from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function LoginSignup() {
    const [showLogin, setShowLogin] = useState(true);

    const styles={
        p:{
            color:'black',
            textAlign:'center',
            margin:'10px'
           },
        link:{
           
            textAlign:'center',
            
          }
    }
    
    return <div>
        {showLogin ? <Login/> : <Signup/>}
        <div style={styles.link}>
            <button style={styles.p} id="loginlink" onClick={() => setShowLogin(true)}>Login</button>
            <button id="loginlink" onClick={() => setShowLogin(false)}>Signup</button>
        </div>
            
        </div>
}