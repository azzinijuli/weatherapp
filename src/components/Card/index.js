import "./style.scss";

function Card({ day }) {
  return (
    <section>
      <>
        <span>{Math.floor(day.main.temp)} °C</span>
      </>
    </section>
  );
}

export default Card;
