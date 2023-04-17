import React from "react";
import header from "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <h2 className="logo-txt">QPICK</h2>
        </Link>

        <div className="tel">
          <i
            className="fa-solid fa-mobile-screen"
            style={{ color: "#919191" }}
          ></i>
          <select name="select">
            <option value="default" disabled selected>
              Выбрать модель телефона
            </option>
            <option value="iPhone">Iphone</option>
            <option value="Samsung">Samsung</option>
            <option value="Redmi">Redmi</option>
            <option value="Vivo">Vivo</option>
            <option value="Poco">Poco</option>
            <option value="Realme">Realme</option>
          </select>
          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <nav>
          <div className="icons">
            <span className="like">2</span>
            <i className="fa-regular fa-heart" style={{ color: "#6c737f" }}></i>

            <Link to={"/korzina"}>
              <span className="korzina">4</span>
              <i
                className="fa-solid fa-cart-shopping"
                style={{ color: "#686e78" }}
              ></i>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
