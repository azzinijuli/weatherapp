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
        <span>{Math.floor(day.main.temp)} °C</span>

        <span>{day.main.humidity}%</span>

        <span>{Math.floor(day.wind.speed)} km/h</span>
      </>
    </section>
  );
}

export default Card;
