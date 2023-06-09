import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";

export default function ShowOffers() {
  const [offers, setOffers] = useState([]);
  const [replyInput, setreplyInput] = useState([]);
  const { userId } = useParams();
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
  useEffect(() => {
    API.getOffersByUser(userId)
      .then((data) => {
        setOffers(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

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

  return (
    <div>
      <hr></hr>

      <ul id="offer-ul">
        <p>My Offers</p>

        {offers.map((offer, i) => (
          <li id="offersingle" key={i}>
            <a href={`/profile/${offer.senderId._id}`}>
              <img
                src={offer.senderId.profilepic}
                className="tiny-profile-pic"
              />
              <span id="usersoffer">{offer.senderId.username}</span>: "
              {offer.Text}"<p>Status = {offer.status}</p>
            </a>
            <div>
              <p>Reply{offer.Reply}</p>
            </div>

            <input
              type="text"
              value={replyInput}
              onChange={(e) => setreplyInput(e.target.value)}
            />

            <button
              onClick={() => handleOfferStatusUpdate(offer._id, i, "accepted")}
              disabled={offer.status === "accepted"}
            >
              Approve
            </button>
            <button
              onClick={() => handleOfferStatusUpdate(offer._id, i, "rejected")}
              disabled={offer.status === "rejected"}
            >
              Reject
            </button>
            <button onClick={() => handleOfferMessage(offer._id, i)}>
              Reply
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
