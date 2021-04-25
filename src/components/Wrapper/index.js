import "./style.scss";
import Card from "../Card";

function Wrapper(props) {
  const { list } = props.forecast;
  return (
    <section>
      {list != undefined &&
        list.map((day, key) => {
          return <p>{day.main.temp}</p>;
        })}
    </section>
  );
}

export default Wrapper;
