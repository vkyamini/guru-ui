import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Profile from "./pages/Profile";
import "./styles.css";
//import API from './utils/API'// all the fetch end-points here

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
