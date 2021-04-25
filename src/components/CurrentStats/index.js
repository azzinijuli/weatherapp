import "./style.scss";

function CurrentStats({ current }) {
  return (
    <section>
      {current.main != undefined &&
        current.wind != undefined &&
        current.clouds.all != undefined &&
        current.wind != undefined && (
          <div>
            <span>Mínima</span>
            <span>{Math.floor(current.main.temp_min)}°C</span>
            <span>Máxima</span>
            <span>{Math.floor(current.main.temp_max)}°C</span>
            <span>Sensación térmica</span>
            <span>{Math.floor(current.main.feels_like)} °C</span>
            <span>Nubosidad</span>
            <span>{current.clouds.all}%</span>
            <span>Humedad</span>
            <span>{current.main.humidity}%</span>
            <span>Viento</span>
            <span>{Math.floor(current.wind.speed)} km/h</span>
            <span></span>
          </div>
        )}
    </section>
  );
}

export default CurrentStats;
