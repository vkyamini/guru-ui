import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";
import noProfileImg from "./no_profile.jpeg";
import "./style.css";

export default function Profile() {
  const { userId } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    API.getSingleUser(userId)
      .then((data) => {
        setUser({
          username: data.data.username,
          aboutme: data.data.aboutme,
          profilepic: data.data.profilepic,
          skillsknown: data.data.skillsKnown,
          skillsunknown: data.data.skillsUnknown,
          github: data.data.github,
          linkedIn: data.data.linkedIn,
          isUser: data.data.isUser,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div>
      <div id="profilediv">
        <img src={user.profilepic ? user.profilepic : noProfileImg} />
        <p>{user.username}</p>
        <div id="profile">
          <p>{user.aboutme}</p>
        </div>
        <div id="links">
          <p id="git">{user.github}</p>
          <p id="linked">{user.linkedIn}</p>
        </div>
        {user.isUser ? (
          <button id="editbtn">Edit</button>
        ) : (
          <button id="editbtn">Make Offer</button>
        )}
      </div>
    </div>
  );
}
