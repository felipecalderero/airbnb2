import { useParams } from "react-router-dom";
import EditRental from "../components/EditRental";

const EditItemPage = ({ editRental, rentalList }) => {
  const { itemId } = useParams();
  const rentalObj = rentalList.filter((item) => item.id === itemId);
  const rental = rentalObj[0];

  return <EditRental rental={rental} editRental={editRental} />;
};

export default EditItemPage;
