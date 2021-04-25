import "./style.scss";
import Card from "../Card";

function Wrapper(props) {
  return (
    <div>
      {props.forecast.length ??
        props.forecast.list.map((day, key) => {
          return <Card day={day} key={key} />;
        })}
    </div>
  );
}

export default Wrapper;
