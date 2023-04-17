import React from "react";
import card from "./cards.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  let titleT = "";

  for (let i = 0; i < item.title.length; i++) {
    if (i < 15) {
      titleT += item.title[i];
    }
  }

  return (
    <>
      <Link to={`/${item.id}`}>
        <div className="xit">
          <img src={item.image} alt={item.title} />
          <div className="card-text">
            <h3>{titleT}</h3>
            <p>{item.price}₸</p>
          </div>
          <div className="rate-box">
            <i className="fa-solid fa-star"></i>
            <p className="rate">{item.rating.rate}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
