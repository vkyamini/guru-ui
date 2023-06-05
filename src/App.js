import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Profile from "./pages/Profile";
import SkillSearch from "./pages/SkillSearch";
import "./styles.css";
//import API from './utils/API'// all the fetch end-points here

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/search" element={<SkillSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
