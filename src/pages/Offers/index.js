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
        console.log(" initial data", data);
        // alert("Hurray !offer created");
        console.log("i ma the data you seeing mnow", data);
        setoffersent(true);
        setTextInput(" ");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <hr style={{ border: `1px solid black` }} />
      <input
        type="text"
        placeholder="Add your offer here..."
        id="offertext"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button onClick={handleCreateOffer} id="send-offer-btn">
        Send
      </button>
      <h3>
        {offersent === true ? (
          <p>
            Offer Sent<i className="fa fa-thumbs-up"></i>
          </p>
        ) : (
          <p>Send an offer to connect</p>
        )}
      </h3>
    </div>
  );
}
