import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";
import noProfileImg from "./no_profile.jpeg";
import NavTags from "../../shared/navbar";
//import PlacesDropDown from "../../shared/PlacesDropDown";

import Select from "react-select";
import { options } from "../../shared/Dropdown";
import "./style.css";

import CreateOffer from "../Offers";
import ShowOffers from "../Offers/MyOffers";
import ShowcreatedOffer from "../Offers/ShowcreatedOffer";

export default function Profile() {
  const { userId } = useParams();

  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);

  const formatSelectedOptions = (arr) => {
    return arr.map((str) => {
      const obj = { label: str, value: str };
      return obj;
    });
  };
  const handleEditMode = (e) => {
    setEditMode(true);
  };

  const handleEditUser = () => {
    API.editUser(userId, user)
      .then((data) => {
        setEditMode(false);
        // data.data.aboutme = setaboutmeInput(aboutmeInput)
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
          skillsKnown: data.data.skillsKnown,
          skillsUnknown: data.data.skillsUnknown,
          github: data.data.Github,
          Location: data.data.Location,
          linkedIn: data.data.LinkedIn,
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
        <div id="flexbody">
          <div>
            <img
              id="profpic"
              src={user.profilepic ? user.profilepic : noProfileImg}
            />
            <span id="usernameInput">GitHub:</span>
            {!editMode ? (
              <a href={`https://github.com/${user.github}`}>{user.github}</a>
            ) : (
              <input
                type="text"
                value={user.github}
                onChange={(e) => setUser({ ...user, github: e.target.value })}
              />
            )}
            <span>Location:</span>
            {!editMode ? (
              <p>{user.Location}</p>
            ) : (
              <input
                type="text"
                value={user.Location}
                onChange={(e) => setUser({ ...user, Location: e.target.value })}
              />
            )}
          </div>
          <div id="userpartion">
            <span id="usernameInput">Name:</span>
            {!editMode ? (
              <p>{user.username}</p>
            ) : (
              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            )}

            <span id="usernameInput">About me</span>
            {!editMode ? (
              <p>{user.aboutme}</p>
            ) : (
              <input
                type="text"
                value={user.aboutme}
                onChange={(e) => setUser({ ...user, aboutme: e.target.value })}
              />
            )}

            <div id="links">
              <span id="usernameInput">Skills:</span>
              {!editMode ? (
                <p>{user.skillsKnown}</p>
              ) : (
                <Select
                  options={options}
                  isMulti={true}
                  value={formatSelectedOptions(user.skillsKnown)}
                  onChange={(arr) => {
                    const list = [];
                    for (let i = 0; i < arr.length; i++) {
                      const string = arr[i].value;
                      list.push(string);
                    }

                    setUser({ ...user, skillsKnown: list });
                  }}
                />
              )}

              <span id="usernameInput">Want To Learn:</span>
              {!editMode ? (
                <p> {user.skillsUnknown}</p>
              ) : (
                <Select
                  options={options}
                  isMulti={true}
                  value={formatSelectedOptions(user.skillsUnknown)}
                  onChange={(arr) => {
                    setUser({
                      ...user,
                      skillsUnknown: arr.map((obj) => obj.value),
                    });
                  }}
                />
              )}
            </div>
            {user.isUser ? (
              editMode ? (
                <button id="editbtn" onClick={handleEditUser}>
                  Save
                </button>
              ) : (
                <button id="editbtn" onClick={handleEditMode}>
                  Edit
                </button>
              )
            ) : null}
            {user.isUser ? (
              <div>
                <ShowcreatedOffer />
                <ShowOffers />
              </div>
            ) : (
              <div>
                <CreateOffer />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
