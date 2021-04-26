import "./style.scss";
import Card from "../Card";

function Wrapper(props) {
  const { list } = props.forecast;
  const { loading } = props;
  console.log(loading);

  return (
    <>
      {loading ? (
        <div class="loading-container">
          <span className="loading-txt">Loading</span>
          <div class="first dot"></div>
          <div class="second dot"></div>
        </div>
      ) : (
        <section className="forecast-wrapper">
          <h3 className="forecast-title">Next 5 days</h3>
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
      )}
    </>
  );
}

export default Wrapper;
