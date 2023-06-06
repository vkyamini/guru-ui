import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";
import noProfileImg from "./no_profile.jpeg";
import NavTags from "../../shared/navbar";
import "./style.css";
import CreateOffer from "../Offers";
import ShowOffers from "../Offers/MyOffers";

export default function Profile() {
  const { userId } = useParams();

  const [user, setUser] = useState({});

  const EditUsers = (e) => {
    e.preventDefault();
    console.log("hello i am gonna edit ");
    console.log("i am the userId", userId);
    API.editUser(userId)
      .then((data) => {
        console.log("i am the data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <NavTags />
      <div id="profilediv">
        <div>
          <img
            id="profpic"
            src={user.profilepic ? user.profilepic : noProfileImg}
          />
        </div>
        <div id="userpartion">
          <p>
            <span id="usernameInput">Name:</span>
            {user.username}
          </p>
          {/* <p>
            <span id="usernameInput">GitHub:</span>
            {user.github}
          </p>
          <p>
            <span id="usernameInput">Linkedin:</span>
            {user.linkedIn}
          </p> */}
          <div id="links">
            <p>
              <span id="usernameInput">Skills:</span>
              {user.skillsknown}
            </p>
          </div>
          {user.isUser ? (
            <button onClick={EditUsers} id="editbtn">
              Edit
            </button>
          ) : null}
          {user.isUser ? (
            <div>
              <ShowOffers />
            </div>
          ) : (
            <CreateOffer />
          )}
        </div>
      </div>
    </div>
  );
}
