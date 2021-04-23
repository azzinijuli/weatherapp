import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const accessToken = process.env.REACT_APP_API_KEY;
    console.log(accessToken);
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=3433955&appid=${accessToken}`
    );
    const dataJson = await data.json();
    console.log(dataJson);
  }

  return <div>Hola mundo</div>;
}

export default App;
