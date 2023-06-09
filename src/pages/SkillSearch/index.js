import React, { useState } from "react";
import "./style.css";
import API from "../../api/API";
import NavTags from "../../shared/navbar";
import SingleDropdown from "../../shared/SingleDropdown";
import noProfileImg from "../Profile/no_profile.jpeg";

export default function SearchSkill() {
  const [skillInput, setSkillInput] = useState("");
  const [userdata, setUserdata] = useState([]);
  const [skillsWereFetched, setSkillsWereFetched] = useState(false);

  const usersUnknownskill = (e) => {
    e.preventDefault();
    API.searchUnknownBar(skillInput)
      .then((data) => {
        setSkillsWereFetched(true);
        const userarray = data.data;
        setUserdata(userarray);
      })
      .catch((err) => {
        console.log(err);
        alert("no skills matched");
      });
  };

  // search for the users with the needed skill set from the array opf users
  const search = (e) => {
    e.preventDefault();
    API.searchBar(skillInput)
      .then((data) => {
        setSkillsWereFetched(true);
        console.log(data.data);
        const userarray = data.data;
        setUserdata(userarray);
        console.log("i am userarray", userdata);
      })
      .catch((err) => {
        console.log(err);
        alert("no skills matched");
      });
  };
  return (
    <div>
      <NavTags />
      <p id="line">
        What skill do you want to{" "}
        <button onClick={usersUnknownskill}>Teach?</button>
      </p>
      <div id="search-bar">
        <div id="dropdown">
          <SingleDropdown setSkillInput={setSkillInput} />
        </div>
        <button id="searchbtn" onClick={search}>
          Learn
        </button>
      </div>
      <div id="userdiv">
        {userdata.length === 0 && skillsWereFetched ? (
          <p id="no-matches-text">No matches found 😔</p>
        ) : (
          userdata.map((arr, i) => {
            return (
              <a href={`/profile/${arr._id}`}>
                <div id="userdisplay">
                  <img
                    className="userdispplayImg"
                    src={arr.profilepic ?? noProfileImg}
                  />
                  <hr />

                  <p>
                    {" "}
                    <span id="usernameInput">Name: </span>
                    {arr.username}
                  </p>
                  <div>
                    <p>
                      {" "}
                      <span id="usernameInput">Skills: </span>
                      {arr.skillsKnown.join(", ")}
                    </p>
                    <p>
                      {" "}
                      <span id="usernameInput">skillsUnknown: </span>
                      {arr.skillsUnknown.join(", ")}
                    </p>
                    <p>
                      {" "}
                      <span id="usernameInput">Location: </span>
                      {arr.Location}
                    </p>
                    <span id="star">&#11089;&#11089;&#11089;&#11089;</span>
                  </div>
                  <p>{arr.aboutme}</p>
                </div>
              </a>
            );
          })
        )}
      </div>
    </div>
  );
}
