import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";
import "./style.css";
import Tag from "../../shared/Tag";

export default function ShowcreatedOffer() {
  const [showoffers, setshowOffers] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    API.showOfferscreatedbyUser(userId)
      .then((data) => {
        // console.log("i am data", data);
        setshowOffers(data.data);
        console.log("i am setdata", showoffers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const offerdelete = (offersId, i) => {
    API.offerDelete(offersId)
      .then((data) => {
        console.log(data);
        const newoff = [...showoffers];
        newoff[i] = data.data;
        setshowOffers(newoff);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ul id="offer-ul">
      <h3 style={{ marginLeft: `5px` }}>Offers Sent:</h3>
      {showoffers.map((offer, i) => (
        <div id="offersingle" key={i}>
          <p style={{ fontSize: `14px`, textAlign: `right` }}>
            {new Date(offer.createdAt).toDateString()}
          </p>
          <p>
            <span className="bold">Message:</span> {offer.Text}
          </p>
          <p>
            <span className="bold">Status:</span>{" "}
            <span className={`tag ${offer.status}`}>{offer.status}</span>
          </p>
          <p>
            <span className="bold">Reply:</span> {offer.Reply}
          </p>
          {/* <p>{offer.Reply}</p> */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => offerdelete(offer._id, i)}
              className="offer-btn delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
}
