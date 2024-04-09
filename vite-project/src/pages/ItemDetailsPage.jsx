import { useParams, Link } from "react-router-dom"; // <== IMPORT
//import rentalListData from "../data/rentals.json";

const ItemDetailsPage = ({ rentalList }) => {
  console.log(rentalList);

  const { itemId } = useParams();
  const rentalObj = rentalList.filter((item) => item.id === itemId);
  const rental = rentalObj[0];
  return (
    <div className="rentalCardDetails">
      <h1>{rental.name}</h1>
      <img src={rental.picture_url.url} alt="" />
      <h2>
        {rental.city}, {rental.country}
      </h2>
      <p className="detailsDescription">{rental.description}</p>
      <h2>Price: {rental.price}€/night</h2>
      <Link to={`/`}>
        <button type="button" className="btn-edit">
          Back
        </button>
      </Link>
    </div>
  );
};

export default ItemDetailsPage;
