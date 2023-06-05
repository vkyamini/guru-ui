import React, { useState } from "react";
import "./style.css";
import API from "../../api/API";

export default function SearchSkill() {
  const [skillInput, setskillInput] = useState("");
  const [userdata, setUserdata] = useState([]);

  // search for the users with the needed skill set from the array opf users
  const search = (e) => {
    e.preventDefault();
    API.searchBar(skillInput)
      .then((data) => {
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
      <input
        type="text"
        id="search"
        value={skillInput}
        onChange={(e) => setskillInput(e.target.value)}
      />
      <button id="searchbtn" onClick={search}>
        search
      </button>
      <div id="userdiv">
        {userdata.map((arr, i) => {
          return (
            <div id="userdisplay">
              {/* <p>Welcome ${arr.username}</p> */}
              <img src={arr.profilepic} />
              <a href={`/profile/${arr._id}`}>
                <p>{arr.username}</p>
              </a>
              {/* <p>{arr._id}</p> */}
              <p>{arr.aboutme}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
