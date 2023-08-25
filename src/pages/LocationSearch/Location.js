import React, { useState } from "react";
import Navbar from "../../shared/navbar";
import API from "../../api/API";
import PlacesDropDown from "../../shared/PlacesDropDown";
import SingleDropdown from "../../shared/SingleDropdown";
import noProfileImg from "../Profile/no_profile.jpeg";

export default function LocationSearch() {
  const [locationInput, setlocationInput] = useState([]);
  const [locationdata, setlocationdata] = useState([]);
  const [SkillInput, setSkillInput] = useState(" ");
  const [Fetched, setFetched] = useState(false);
  //const [userdata , setuserdata]= ([ ])

  const searchLocation = (e) => {
    e.preventDefault();
    API.searchLocation(locationInput)
      .then((data) => {
        console.log("i am data", data);
        setFetched(true);
        const user = data.data;
        console.log("i am user", user);   
        setlocationdata(user);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const LocationandSkill = (e) => {
    e.preventDefault();
    API.searchskillsLocation(locationInput, SkillInput)
      .then((data) => {
        console.log(data);
        console.log("i am user wirth locationa and skill matching");
        setFetched(true);
        const user = data.data;
        setlocationdata(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <h1>search by location</h1>
      <div id="locatnbtn">
        <PlacesDropDown setlocationInput={setlocationInput} />

        <button className="editbtn" onClick={searchLocation}>
          Search
        </button>
        {Fetched ? <SingleDropdown setSkillInput={setSkillInput} /> : <p></p>}

        {Fetched ? (
          <button
            id="skbtn"
            className="editbtn"
            onClick={LocationandSkill}
            disabled={locationdata.length === 0}
          >
            Learn
          </button>
        ) : (
          <p></p>
        )}
      </div>
      <div id="userdiv">
        {locationdata.length === 0 && Fetched ? (
          <p id="no-matches-text">No matches found 😔</p>
        ) : (
          locationdata.map((arr, i) => {
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
                      <span id="usernameInput">Location: </span>
                      {arr.Location}
                    </p>
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
