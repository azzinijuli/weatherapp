import "./style.scss";
import Card from "../Card";

function Wrapper(props) {
  const { list } = props.forecast;
  const { loading } = props;

  return (
    <>
      <h3 className="forecast-title">Next 5 days</h3>
      {loading ? (
        <div className="loading-container">
          <span className="loading-txt">Loading</span>
          <div className="first dot"></div>
          <div className="second dot"></div>
        </div>
      ) : (
        <section className="forecast-wrapper">
          {list != undefined &&
            list
              .filter((day) => {
                return day.dt_txt.endsWith("15:00:00");
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
