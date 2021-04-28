import "./style.scss";

function CurrentStats({ current }) {
  return (
    <section>
      {current.main !== undefined &&
        current.wind !== undefined &&
        current.clouds.all !== undefined &&
        current.wind !== undefined && (
          <div className="allstats-wrapper">
            <div className="stats-wrapper">
              <div className="stats">
                <span className="stats-num">
                  {Math.floor(current.main.temp_min)}°C
                </span>
                <span className="stats-txt">Low</span>
              </div>
              <div className="stats">
                <span className="stats-num">
                  {Math.floor(current.main.temp_max)}°C
                </span>
                <span className="stats-txt">High</span>
              </div>
            </div>

            <div className="stats-wrapper">
              <div className="stats">
                <span className="stats-num">
                  {Math.floor(current.main.feels_like)}°C
                </span>
                <span className="stats-txt">Feels like</span>
              </div>
              <div className="stats">
                <span className="stats-num">{current.clouds.all}%</span>
                <span className="stats-txt">Clouds</span>
              </div>
            </div>

            <div className="stats-wrapper">
              <div className="stats">
                <span className="stats-num">{current.main.humidity}%</span>
                <span className="stats-txt">Humidity</span>
              </div>
              <div className="stats">
                <span className="stats-num">
                  {Math.floor(current.wind.speed)} km/h
                </span>
                <span className="stats-txt">Wind</span>
              </div>
            </div>
          </div>
        )}
    </section>
  );
}

export default CurrentStats;
