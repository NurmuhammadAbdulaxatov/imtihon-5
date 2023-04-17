import React, { useEffect, useState } from "react";
import card from "./cards.scss";
import Card from "./Card";
import Sale from "./Sale";
import New from "./New";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  let api = `https://fakestoreapi.com/products?limit=3`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((item) => setProducts(item));
  }, []);

  let sale = `https://fakestoreapi.com/products?limit=10`;

  useEffect(() => {
    fetch(sale)
      .then((res) => res.json())
      .then((item) => setSales(item));
  }, []);

  let nProduct = `https://fakestoreapi.com/products?limit=14`;

  useEffect(() => {
    fetch(nProduct)
      .then((res) => res.json())
      .then((item) => setNewProducts(item));
  }, []);

  return (
    <>
      <div className="container">
        <h2>Топ продаж</h2>

        <div className="cards">
          {!products.length ? (
            <h1>Loading...</h1>
          ) : (
            products.map((item, index) => {
              return <Card key={index} item={item} />;
            })
          )}

          <h2 className="sale-txt">Акция недели</h2>

          {sales.map((item, index) => {
            if (index > 3) {
              return <Sale key={index} item={item} />;
            }
          })}

          <h2 className="news-txt">Новинки</h2>

          {newProducts.map((item, index) => {
            if (index > 10) {
              return <New key={index} item={item} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
