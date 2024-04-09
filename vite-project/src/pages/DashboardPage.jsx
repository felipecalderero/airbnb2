import RentalList from "../components/RentalList";
import AddRental from "../components/AddRental";

const DashboardPage = ({ deleteRental, addRental, rentalList }) => {
  return (
    <>
      <div className="top-ctn">
        <h1>List of Rentals</h1>
        <AddRental rentalList={rentalList} addRental={addRental} />
      </div>
      <RentalList rentalList={rentalList} deleteRental={deleteRental} />
    </>
  );
};

export default DashboardPage;
