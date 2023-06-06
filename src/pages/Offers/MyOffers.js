import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";

export default function ShowOffers() {
  const [offers, setOffers] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    API.getOffersByUser(userId)
      .then((data) => {
        setOffers(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  return (
    <div>
      <hr></hr>

      <ul id="offer-ul">
        <p>My Offers</p>
        {offers.map((offer) => (
          <a href={`/profile/${offer.senderId._id}`}>
            <li id="offersingle">
              <img
                src={offer.senderId.profilepic}
                className="tiny-profile-pic"
              />
              <span id="usersoffer">{offer.senderId.username}</span>: "
              {offer.Text}"
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
