import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";
import noProfileImg from "./no_profile.jpeg";
import NavTags from "../../shared/navbar";
import Tag from "../../shared/Tag";
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
          Github: data.data.Github,
          Location: data.data.Location,
          linkedIn: data.data.LinkedIn,
          isUser: data.data.isUser,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  // User not loaded yet.
  if (Object.keys(user).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <NavTags />
      <div id="profilediv">
        <div id="flexbody">
          <div id="left-section">
            <img
              id="profpic"
              src={user.profilepic ? user.profilepic : noProfileImg}
            />
            {!editMode ? (
              <p
                style={{
                  fontSize: `25px`,
                  marginLeft: `65px`,
                  marginTop: `0px`,
                  marginBottom: `0px`,
                }}
              >
                {user.username}
              </p>
            ) : (
              <div style={{ marginLeft: `10px` }}>
                <p style={{ marginBottom: `0px` }}>Username: </p>
                <input
                  type="text"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  className="input-field"
                />
              </div>
            )}
            {!editMode ? (
              <p style={{ marginLeft: `60px`, marginTop: `0px` }}>
                From {user.Location}
              </p>
            ) : (
              <div style={{ marginLeft: `10px` }}>
                <p style={{ marginBottom: `0px` }}>Location: </p>
                <input
                  type="text"
                  value={user.Location}
                  onChange={(e) =>
                    setUser({ ...user, Location: e.target.value })
                  }
                  className="input-field"
                />
              </div>
            )}
            {!editMode ? (
              user.Github ? (
                <span
                  style={{
                    marginLeft: `60px`,
                    marginBottom: `10px`,
                    display: "block",
                  }}
                >
                  Github:{" "}
                  <a href={`https://github.com/${user.Github}`} target="_blank">
                    {user.Github}
                  </a>
                </span>
              ) : null
            ) : (
              <div style={{ marginLeft: `10px` }}>
                <p style={{ marginBottom: `0px` }}>Github: </p>
                <input
                  type="text"
                  value={user.Github}
                  onChange={(e) => setUser({ ...user, Github: e.target.value })}
                  className="input-field"
                />
              </div>
            )}
          </div>
          <div id="right-section">
            <div>
              {!editMode ? (
                <div style={{ marginBottom: `20px`, marginLeft: `10px` }}>
                  <p style={{ margin: `0px` }}>I know:</p>
                  <div class="skill-tags">
                    {user.skillsKnown.map((skill, i) => (
                      <Tag str={skill} knows={true} />
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <p style={{ marginBottom: `0px`, marginLeft: `10px` }}>
                    Skills Known:{" "}
                  </p>
                  <Select
                    options={options}
                    isMulti={true}
                    value={formatSelectedOptions(user.skillsKnown)}
                    className="input-dropdown"
                    onChange={(arr) => {
                      const list = [];
                      for (let i = 0; i < arr.length; i++) {
                        const string = arr[i].value;
                        list.push(string);
                      }

                      setUser({ ...user, skillsKnown: list });
                    }}
                  />
                </div>
              )}

              {!editMode ? (
                <div style={{ marginBottom: `20px`, marginLeft: `10px` }}>
                  <p style={{ margin: `0px` }}>I want to learn:</p>
                  <div class="skill-tags">
                    {user.skillsUnknown.map((skill, i) => (
                      <Tag str={skill} knows={false} />
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <p style={{ marginBottom: `0px`, marginLeft: `10px` }}>
                    Skills Unknown:{" "}
                  </p>
                  <Select
                    options={options}
                    isMulti={true}
                    className="input-dropdown"
                    value={formatSelectedOptions(user.skillsUnknown)}
                    onChange={(arr) => {
                      setUser({
                        ...user,
                        skillsUnknown: arr.map((obj) => obj.value),
                      });
                    }}
                  />
                </div>
              )}
            </div>
            {user.isUser ? (
              editMode ? (
                <div style={{ marginLeft: `10px` }}>
                  <button className="editbtn" onClick={handleEditUser}>
                    Save
                  </button>
                  <button
                    className="editbtn"
                    onClick={() => setEditMode(false)}
                    style={{ marginLeft: `10px` }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="editbtn"
                  style={{ marginLeft: `10px` }}
                  onClick={handleEditMode}
                >
                  Edit
                </button>
              )
            ) : null}
            {user.isUser ? <hr style={{ border: "1px solid black" }} /> : null}
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
