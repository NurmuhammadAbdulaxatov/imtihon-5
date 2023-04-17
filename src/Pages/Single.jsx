import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Singlepr from "../Components/Cards/Singlepr";
import { useParams } from "react-router-dom";
import card from "../Components/Cards/cards.scss";

const Single = () => {
  const { id } = useParams();
  const [sProducts, setSProducts] = useState([]);

  let api = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((item) => {
        setSProducts(item);
      });
  }, []);

  return (
    <>
      <div className="single">
        <div className="container">
          <h2>Автодержатель</h2>

          <div className="single-product">
            <div className="product-logo">
              <h2>
                FAKE <sup>®</sup>
              </h2>
              <p>FAKESOTOREAPI</p>
            </div>

            <img src={sProducts.image} alt={sProducts.title} />
            <div className="p-name">
              <h3>{sProducts.title}</h3>
              <p>{sProducts.price}₸</p>
            </div>
          </div>

          <div className="nothing">
            <div className="info-product">
              <h2>Описание и характеристики</h2>
              <ul>
                <li>{sProducts.description}</li>
              </ul>
            </div>

            <div className="buy">
              <div className="buy-btn">Купить!</div>
              <div className="korzina">
                <i className="fa-solid fa-cart-shopping"></i>
                Добавить в корзину
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
