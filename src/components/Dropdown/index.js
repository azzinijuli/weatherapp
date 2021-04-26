import { useState, useEffect } from "react";
import "./style.scss";
import data from "../../data/data.json";

function Dropdown(props) {
  function handleClick(e, name) {
    e.preventDefault();
    props.handleCallback(name);
  }

  return (
    <section className="city-menu">
      <div className="wrapper-menu">
        <h3 className="menu-title">Choose another city...</h3>
        <ul className="select-menu">
          {data.map((city, key) => {
            return (
              <li
                key={key}
                onClick={(e) => {
                  handleClick(e, city.city);
                }}
                key={city.city}
                className="item-menu"
              >
                {city.city}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Dropdown;
