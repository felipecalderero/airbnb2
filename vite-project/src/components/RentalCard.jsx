const RentalCard = ({ rental, deleteFunction }) => {
  return (
    <div className="rentalCard">
      <h1>{rental.name}</h1>
      <h2>
        {rental.city}, {rental.country}
      </h2>
      <p>{rental.price}</p>
      <button type="button" onClick={deleteFunction} className="btn-delete">
        {" "}
        Delete
      </button>
    </div>
  );
};

export default RentalCard;
