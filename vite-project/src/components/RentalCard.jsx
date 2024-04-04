import { Link } from "react-router-dom";

const RentalCard = ({ rental, deleteFunction }) => {
  return (
    <div className="rentalCard">
      <div
        className="img-ctn"
        style={{ backgroundImage: `url(${rental.picture_url.url})` }}
      ></div>

      <div className="details-ctn">
        <Link to={`item/${rental.id}`}>
          <h1>{rental.name}</h1>
        </Link>
        <h2>
          {rental.city}, {rental.country}
        </h2>
        <p>
          {" "}
          <span className="price">{rental.price}</span> €/night
        </p>
        <button
          type="button"
          onClick={() => {
            deleteFunction(rental.id);
          }}
          className="btn-delete"
        >
          {" "}
          Delete
        </button>
        <Link to={`edititem/${rental.id}`}>
          <button type="button">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default RentalCard;

//          <img src={rental.picture_url.url} alt="rental picture" />
