import "./style.scss";
import Card from "../Card";

function Wrapper(props) {
  const { list } = props.forecast;
  console.log(list);
  console.log(list);
  return (
    <section>
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
/*

        list.map((day, key) => {
          return (
            <>
              <p key={key}>{day.main.temp}</p>
              <p>{day.dt_txt}</p>
            </>
          );
        })

        */
