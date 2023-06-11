import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";

import SingleOffer from "./SingleOffer";

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
      <ul id="offer-ul">
        <h3 style={{ marginLeft: `5px` }}>Offers Recieved:</h3>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {offers.length === 0 ? (
            <p>No offers recieved.</p>
          ) : (
            offers.map((offer, i) => (
              <SingleOffer
                offer={offer}
                i={i}
                offers={offers}
                setOffers={setOffers}
              />
            ))
          )}
        </div>
      </ul>
    </div>
  );
}
