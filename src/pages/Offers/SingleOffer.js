import React, { useState } from "react";
import API from "../../api/API";

const noProfileImg =
  "https://res.cloudinary.com/dpaw5kaby/image/upload/v1686430797/no_profile_ntowau.webp";

const SingleOffer = ({ offer, i, offers, setOffers }) => {
  const [replyInput, setreplyInput] = useState([]);

  const handleOfferMessage = (offersId, i) => {
    API.editStatusinOffers(offersId, { Reply: replyInput })
      .then((data) => {
        const newOffers = [...offers];
        newOffers[i].Reply = data.data.Reply;
        setOffers(newOffers);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOfferStatusUpdate = (offersId, i, status) => {
    API.editStatusinOffers(offersId, { status })
      .then((data) => {
        const newOffers = [...offers]; // copy array
        newOffers[i].status = data.data.status; // update status in offer
        setOffers(newOffers); // update state
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const replyAlreadySent = offer.Reply && offer.Reply.length > 0;
  return (
    <li id="offersingle" key={i}>
      <a href={`/profile/${offer.senderId._id}`}>
        <img
          src={
            offer.senderId.profilepic ? offer.senderId.profilepic : noProfileImg
          }
          className="tiny-profile-pic"
        />
        <span id="usersoffer">{offer.senderId.username}</span>
      </a>
      <p>
        <span className="bold">Message:</span> {offer.Text}
      </p>
      <p>
        <span className="bold">Status:</span>{" "}
        <span className={`tag ${offer.status}`}>{offer.status}</span>
      </p>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => handleOfferStatusUpdate(offer._id, i, "accepted")}
          disabled={offer.status === "accepted"}
          className="offer-btn accept-btn"
        >
          Accept
        </button>
        <button
          onClick={() => handleOfferStatusUpdate(offer._id, i, "rejected")}
          disabled={offer.status === "rejected"}
          className="offer-btn reject-btn"
        >
          Reject
        </button>
      </div>
      <input
        type="text"
        value={replyAlreadySent ? offer.Reply : replyInput}
        onChange={(e) => setreplyInput(e.target.value)}
        style={{
          marginTop: `30px`,
          border: `1px solid black`,
          height: `80px`,
          width: `98%`,
          display: `block`,
          borderRadius: `5px`,
        }}
      />
      <button
        onClick={() => handleOfferMessage(offer._id, i)}
        className="offer-btn"
        style={{
          display: "block",
          marginLeft: `auto`,
          marginTop: `10px`,
        }}
      >
       {replyAlreadySent ? "Change Reply" : "Reply"}
      </button>
    </li>
  );
};

export default SingleOffer;
