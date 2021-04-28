import { useEffect, useState } from "react";
import "./App.scss";
import PlaceDate from "./components/PlaceDate";
import Dropdown from "./components/Dropdown";
import HamburgerMenu from "./components/HamburgerMenu";
import CurrentTemp from "./components/CurrentTemp";
import CurrentStats from "./components/CurrentStats";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [current, setCurrent] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchForecast();
    fetchCurrent();
  }, [selectedCity]);

  async function fetchForecast() {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (selectedCity == "") {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Buenos Aires&appid=${apiKey}&units=metric`
      );
      const dataJson = await data.json();
      setForecast(dataJson);
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${apiKey}&units=metric`
      );
      const dataJson = await data.json();
      setForecast(dataJson);
    }
    setLoading(!setLoading);
  }

  async function fetchCurrent() {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (selectedCity == "") {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=${apiKey}&units=metric`
      );
      const dataJson = await data.json();
      setCurrent(dataJson);
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`
      );
      const dataJson = await data.json();
      setCurrent(dataJson);
    }
    setLoading(!setLoading);
  }

  function handleCallback(city) {
    setSelectedCity(city);
  }

  return (
    <div className="hero">
      <PlaceDate current={current} />
      <Dropdown handleCallback={handleCallback} />
      <div className="hamburger-menu">
        <HamburgerMenu handleCallback={handleCallback} />
      </div>
      <div className="current-wrapper">
        <CurrentTemp current={current} />
        <CurrentStats current={current} />
      </div>
      <Wrapper forecast={forecast} loading={loading ?? loading} />
      <Footer />
    </div>
  );
}

export default App;
