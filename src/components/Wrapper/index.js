import "./style.scss";
import Card from "../Card";

function Wrapper(props) {
  const { list } = props.forecast;

  return (
    <section className="forecast-wrapper">
      <h3>Next 5 days</h3>
      {list != undefined &&
        list
          .filter((day) => {
            return day.dt_txt.endsWith("00:00:00");
          })
          .map((day, key) => {
            return (
              <div key={key}>
                <Card day={day} />
              </div>
            );
          })}
    </section>
  );
}

export default Wrapper;
