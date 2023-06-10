import React, { useState } from "react";
import "./style.css";
import API from "../../api/API";
import NavTags from "../../shared/navbar";
import SingleDropdown from "../../shared/SingleDropdown";
import Tag from "../../shared/Tag";

const noProfileImg =
  "https://res.cloudinary.com/dpaw5kaby/image/upload/v1686430797/no_profile_ntowau.webp";

export default function SearchSkill() {
  const [skillInput, setSkillInput] = useState("");
  const [userdata, setUserdata] = useState([]);
  const [isLearn, setIsLearn] = useState(true);
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
      <div id="line">
        <h3>
          Search Skills to{" "}
          <span onClick={() => setIsLearn(!isLearn)} id="learn-or-teach">
            {isLearn ? "Learn" : "Teach"}
          </span>
        </h3>
      </div>
      <div id="search-bar">
        <div id="dropdown">
          <SingleDropdown setSkillInput={setSkillInput} />
        </div>
        {isLearn ? (
          <button id="searchbtn" onClick={search}>
            Learn
          </button>
        ) : (
          <button id="searchbtn" onClick={usersUnknownskill}>
            Teach
          </button>
        )}
      </div>
      <div id="userdiv">
        {userdata.length === 0 && skillsWereFetched ? (
          <p id="no-matches-text">No matches found 😔</p>
        ) : (
          <div className="user-cards">
            {" "}
            {userdata.map((user, i) => {
              return (
                <a href={`/profile/${user._id}`}>
                  <div id="userdisplay">
                    <div>
                      <div
                        style={{
                          height: `200px`,
                          width: `200px`,
                          backgroundImage: `url(${
                            user.profilepic ? user.profilepic : noProfileImg
                          })`,
                          backgroundSize: "cover",
                          backgroundPosition: "top",
                          borderRadius: `5px`,
                          border: `1px solid black`,
                        }}
                      ></div>
                      <p style={{ fontSize: `25px`, marginTop: `0px` }}>
                        {user.username}
                      </p>
                    </div>
                    <div className="tag-container">
                      <div style={{ marginBottom: `20px` }}>
                        <p style={{ margin: `0px` }}>Wants To Teach</p>
                        <div class="skill-tags">
                          {user.skillsKnown.map((skill, i) => (
                            <Tag str={skill} knows={true} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p style={{ margin: `0px` }}>Wants To Learn</p>
                        <div class="skill-tags">
                          {user.skillsUnknown.map((skill, i) => (
                            <Tag str={skill} knows={false} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
