import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Login from "./pages/LoginSignup/Login";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SkillSearch from "./pages/SkillSearch";
import LocationSearch from "./pages/LocationSearch/Location";
import "./styles.css";
import EditForm from "./pages/EditForm/EditForm";
//import API from './utils/API'// all the fetch end-points here

// console.table(process.env);
function App() {
  return (
    <div id="root">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LoginSignup />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/search" element={<SkillSearch />} />
          <Route path="/location" element={<LocationSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
