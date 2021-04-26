import "./style.scss";

function Card({ day }) {
  const newDay = day.dt_txt.split(" ")[0];
  const splitDay = newDay.split("-");
  return (
    <section className="card-wrapper">
      <>
        <span>{splitDay[2] + "/" + splitDay[1]}</span>
        <img
          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          className="forecast-icon"
        />
        <div className="forecast-stat-wrapper">
          <span>{Math.floor(day.main.temp)}°C</span>
          <span className="forecast-stat-txt">Temperature</span>
        </div>
        <div className="forecast-stat-wrapper">
          <span>{day.main.humidity}%</span>
          <span className="forecast-stat-txt">Humidity</span>
        </div>
        <div className="forecast-stat-wrapper">
          <span>{Math.floor(day.wind.speed)} km/h</span>
          <span className="forecast-stat-txt">Wind</span>
        </div>
      </>
    </section>
  );
}

export default Card;
