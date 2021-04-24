import { useEffect, useState } from "react";
import "./App.scss";
import PlaceDate from "./components/PlaceDate";
import Dropdown from "./components/Dropdown";
import CurrentTemp from "./components/CurrentTemp";
import CurrentStats from "./components/CurrentStats";
import Wrapper from "./components/Wrapper";

function App() {
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetchData();
  }, [selectedCity]);

  async function fetchData() {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (selectedCity == "") {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Buenos Aires&appid=${apiKey}`
      );
      const dataJson = await data.json();
      console.log(dataJson);
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${apiKey}`
      );
      const dataJson = await data.json();
      console.log(dataJson);
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
      <Wrapper />
    </div>
  );
}

export default App;
