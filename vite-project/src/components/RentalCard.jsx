import { Link } from "react-router-dom";

const RentalCard = ({ rental, deleteFunction }) => {
  return (
    <Link to={`item/${rental.id}`}>
      <div className="rentalCard">
        <div
          className="img-ctn"
          style={{ backgroundImage: `url(${rental.picture_url.url})` }}
        ></div>

        <div className="details-ctn">
          <h1>{rental.name}</h1>
          <h2>
            {rental.city}, {rental.country}
          </h2>
          <p>
            {" "}
            <span className="price">{rental.price}</span> €/night
          </p>
          <button type="button" onClick={deleteFunction} className="btn-delete">
            {" "}
            Delete
          </button>
        </div>
      </div>{" "}
    </Link>
  );
};

export default RentalCard;

//          <img src={rental.picture_url.url} alt="rental picture" />
