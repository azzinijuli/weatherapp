import "./style.scss";

function PlaceDate({ current }) {
  const today = new Date().toDateString().split(" ");

  return (
    <section>
      {current.sys != undefined && (
        <div>
          <span>
            {current.name}, {current.sys.country}
          </span>
          <p>{today[0] + ", " + today[2] + " " + today[1]}</p>
        </div>
      )}
    </section>
  );
}

export default PlaceDate;
