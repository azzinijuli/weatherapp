import "./style.scss";

function Card(props) {
  return (
    <div>
      <p>{props.day.main.temp}</p>
    </div>
  );
}

export default Card;
