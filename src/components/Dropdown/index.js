import { useState, useEffect } from "react";
import "./style.scss";
import data from "../../data/data.json";

function Dropdown(props) {
  function handleClick(e, name) {
    e.preventDefault();
    props.handleCallback(name);
  }

  return (
    <div>
      <ul>
        {data.map((city, key) => {
          return (
            <li
              key={key}
              onClick={(e) => {
                handleClick(e, city.city);
              }}
              key={city.city}
            >
              {city.city}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
