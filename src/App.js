import React from "react";
 import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import LoginSignup from './pages/LoginSignup';
import Profile from './pages/Profile'
import "./styles.css";
//import API from './utils/API'// all the fetch end-points here

function App() {
  // const [userId, setUserId] = useState(-1);
  // const [username, setUsername] = useState("")
  // const [token, setToken] = useState("")

  // useEffect(()=>{
  //   const storedToken = localStorage.getItem("token");
  //   API.verifyToken(storedToken).then(data=>{
  //     setToken(storedToken);
  //     setUserId(data.id);
  //     setUsername(data.username);
  //   }).catch(err=>{
  //     console.log(err)
  //    logout();
  //   })
  // },[])


  // const logout = ()=>{
  //   localStorage.removeItem("token")
  //     setToken(null);
  //     setUsername(null);
  //     setUserId(0);
  // }

  return ( 
   <div>
    {/* <h1>hello all</h1> */}
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginSignup/>}/>
    <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
   
}

export default App;
