import React from "react";
import contact from "./contact.scss";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contact">
          <div className="map">
            <h2>Наш офис</h2>
            <img src="./map.png" alt="map" />
            <div className="geo">
              <i className="fa-solid fa-location-dot"></i>
              <p> Аксай-3а, 62ф, Алматы, Казахстан</p>
            </div>
          </div>

          <div className="soc-med">
            <div className="icon">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-vk"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>
        </div>

        <div className="tel">
          <i className="fa-solid fa-phone"></i>+998 91 005 5660
        </div>
      </div>
    </>
  );
};

export default Contact;
