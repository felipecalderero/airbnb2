import { Link } from "react-router-dom";

const RentalCard = ({ rental, deleteFunction }) => {
  return (
    <div className="rentalCard">
      <Link to={`item/${rental.id}`}>
        <div
          className="img-ctn"
          style={{ backgroundImage: `url(${rental.picture_url.url})` }}
        ></div>
      </Link>

      <div className="details-ctn">
        <Link to={`item/${rental.id}`}>
          <h1 className="rental-title">{rental.name}</h1>
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
          <button type="button" className="btn-edit">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RentalCard;

//          <img src={rental.picture_url.url} alt="rental picture" />
