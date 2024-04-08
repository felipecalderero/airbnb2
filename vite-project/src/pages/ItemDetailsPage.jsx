import { useParams, Link } from "react-router-dom"; // <== IMPORT
//import rentalListData from "../data/rentals.json";

const ItemDetailsPage = ({ rentalList }) => {
  console.log(rentalList);

  const { itemId } = useParams();
  const rentalObj = rentalList.filter((item) => item.id === itemId);
  const rental = rentalObj[0];
  return (
    <div className="rentalCard">
      <h1>{rental.name}</h1>
      <img src={rental.picture_url.url} alt="" />
      <h2>
        {rental.city}, {rental.country}
      </h2>
      <p>{rental.description}</p>
      <p>{rental.price}</p>
    </div>
  );
};

export default ItemDetailsPage;
