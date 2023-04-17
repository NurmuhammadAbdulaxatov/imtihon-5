import React from "react";
import footer from "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer>
          <strong>QPICK</strong>
          <ul>
            <li>Избранное</li>
            <li>
              <Link to="korzina">Корзина</Link>
            </li>
            <li>
              <Link to="/contact">Контакты</Link>
            </li>
          </ul>

          <div className="lie">
            <Link to="/service">
              <p>Условия сервиса</p>
            </Link>
            <div className="language">
              <i className="fa-solid fa-globe"></i>
              <ul>
                <li>Каз</li>
                <li className="ru">Рус</li>
                <li>Eng</li>
              </ul>
            </div>
          </div>

          <div className="s-media">
            <i className="fa-brands fa-vk"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
