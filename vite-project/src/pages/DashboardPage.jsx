import RentalList from "../components/RentalList";
import AddRental from "../components/AddRental";

const DashboardPage = ({ deleteRental, addRental, rentalList }) => {
  return (
    <>
      <AddRental rentalList={rentalList} addRental={addRental} />
      <RentalList rentalList={rentalList} deleteRental={deleteRental} />
    </>
  );
};

export default DashboardPage;
