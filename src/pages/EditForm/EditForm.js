import React, { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";

export default function EditUsers() {
  const [aboutmeInput, setaboutmeInput] = useState("");
  const [skillsInput, setskillsInput] = useState("");
  const [skillsunknownInput, setskillsunknownInput] = useState("");
  const [githubInput, setgithubInput] = useState("");
  const [linkedInput, setlinkedInput] = useState("");

  const { userId } = useParams();
  const EditUsers = (e) => {
    e.preventDefault();
    API.editUser(userId, { aboutme: aboutmeInput })
      .then((data) => {
        // data.data.aboutme = setaboutmeInput(aboutmeInput)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="About me"
          value={aboutmeInput}
          onChange={(e) => setaboutmeInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="skills known"
          value={skillsInput}
          onChange={(e) => setskillsInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="skills Uknown"
          value={skillsunknownInput}
          onChange={(e) => setskillsunknownInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="GitHub"
          value={githubInput}
          onChange={(e) => setgithubInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="LinkedIn"
          value={linkedInput}
          onChange={(e) => setlinkedInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={EditUsers} id="send-offer-btn">
          Add Changes
        </button>
      </div>
    </div>
  );
}
