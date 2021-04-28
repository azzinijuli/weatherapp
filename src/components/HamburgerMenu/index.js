import "./style.scss";
import { slide as Menu } from "react-burger-menu";
import data from "../../data/data.json";
import { useState } from "react";

function Dropdown(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleStateChange(state) {
    setMenuOpen(state.isOpen);
  }

  function handleClick(e, name) {
    e.preventDefault();
    props.handleCallback(name);
    setMenuOpen(false);
  }

  return (
    <Menu
      right
      width={250}
      isOpen={menuOpen}
      onStateChange={(state) => handleStateChange(state)}
    >
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
    </Menu>
  );
}

export default Dropdown;
