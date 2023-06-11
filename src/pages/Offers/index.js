import React, { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";
import "./style.css";

export default function CreateOffer() {
  // useState for the Text getting entred
  const [textInput, setTextInput] = useState("");
  const [offersent, setoffersent] = useState(false);

  const { userId } = useParams();

  const handleCreateOffer = (e) => {
    e.preventDefault();
    console.log("this is on click of offers");
    const senderId = localStorage.getItem("userId");

    API.createOffer({ Text: textInput, senderId: senderId, userId: userId })
      .then((data) => {
        setoffersent(true);
        setTextInput("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <hr style={{ border: `1px solid black` }} />
      <h3>Send an offer to connect</h3>
      <input
        type="text"
        placeholder="Add your offer here..."
        id="offertext"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button onClick={handleCreateOffer} id="send-offer-btn">
        {offersent ? <span>Sent <i className="fa fa-thumbs-up"></i></span> : <span>Send</span>}
      </button>
    </div>
  );
}
