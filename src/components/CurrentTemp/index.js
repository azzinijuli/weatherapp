import "./style.scss";

function CurrentTemp({ current }) {
  return (
    <section>
      {current.weather !== undefined && (
        <div className="weather-wrapper">
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            className="weather-image"
            alt="weather icon"
          />
          <div className="temperature-wrapper">
            <span className="temperature-num">
              {Math.floor(current.main.temp)}°C
            </span>
            <span className="temperature-txt">{current.weather[0].main}</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default CurrentTemp;
