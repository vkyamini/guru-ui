import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function navtags() {
  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
  };

  const user = window.localStorage.getItem("userId");

  return (
    <div>
      <ul id="navs">
        <li className="proflink">
          <Link to={`/profile/${user}`}>Profile</Link>
        </li>
        <li className="proflink">
          <Link to="/search">Skill Search</Link>
        </li>
        <li className="proflink">
          <Link to="/location">Location</Link>
        </li>
        <li className="proflink" onClick={logout}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
