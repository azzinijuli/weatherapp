import "./style.scss";

function PlaceDate({ current }) {
  const today = new Date().toDateString().split(" ");

  return (
    <section>
      {current.sys != undefined && (
        <div className="placedate-container">
          <h1 className="place">
            {current.name}, {current.sys.country}
          </h1>
          <h2 className="date">
            {today[0] + ", " + today[2] + " " + today[1]}
          </h2>
        </div>
      )}
    </section>
  );
}

export default PlaceDate;
