import { useEffect, useState } from "react";
import "./App.scss";
import PlaceDate from "./components/PlaceDate";
import Dropdown from "./components/Dropdown";
import CurrentTemp from "./components/CurrentTemp";
import CurrentStats from "./components/CurrentStats";
import Wrapper from "./components/Wrapper";

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [current, setCurrent] = useState([]);
  const [forecast, setForecast] = useState([]);

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
  }

  function handleCallback(city) {
    setSelectedCity(city);
  }

  return (
    <div>
      <PlaceDate />
      <Dropdown handleCallback={handleCallback} />
      <CurrentTemp />
      <CurrentStats />
      <Wrapper forecast={forecast} />
    </div>
  );
}

export default App;
