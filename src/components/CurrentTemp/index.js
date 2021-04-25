import "./style.scss";

function CurrentTemp({ current }) {
  return (
    <section>
      {current.weather != undefined && (
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          />
          <span>{Math.floor(current.main.temp)} °C</span>
          <span>{current.weather[0].main}</span>
        </div>
      )}
    </section>
  );
}

export default CurrentTemp;
