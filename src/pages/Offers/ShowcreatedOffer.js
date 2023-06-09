import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";

export default function ShowcreatedOffer() {
  const [showoffers, setshowOffers] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    API.showOfferscreatedbyUser(userId)
      .then((data) => {
        // console.log("i am data", data);
        setshowOffers(data.data);
        // console.log("i am setdata", showoffers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  return (
    <ul id="offer-ul">
      <p>Sent offer</p>
      {showoffers.map((offer, i) => (
        <div id="offersingle" key={i}>
          <p>{offer.Text}</p>
          <p>{offer.createdAt}</p>
          <p>{offer.status}</p>
          <p>{offer.Reply}</p>
        </div>
      ))}
    </ul>
  );
}
