import React, { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";
import "./style.css";

export default function CreateOffer() {
  // useState for the Text getting entred
  const [textInput, setTextInput] = useState("");
  const { userId } = useParams();

  const handleCreateOffer = (e) => {
    e.preventDefault();
    console.log("this is on click of offers");
    const senderId = localStorage.getItem("userId");

    API.createOffer({ Text: textInput, senderId: senderId, userId: userId })
      .then((data) => {
        console.log(data);
        alert("Hurray !offer created")
      })
      .catch((err) => {});
  };

  return (
    <div>
      <hr></hr>
      <input
        type="text"
        placeholder="Add your offer here..."
        id="offertext"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button onClick={handleCreateOffer} id="send-offer-btn">
        Send Offer
      </button>
    </div>
  );
}
