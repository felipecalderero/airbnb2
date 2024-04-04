import RentalList from "../components/RentalList";
import AddRental from "../components/AddRental";
import rentalListData from "../data/rentals.json";
import { useState } from "react";

const DashboardPage = () => {
  const [rentalList, setRentalList] = useState(rentalListData.results);

  const deleteRental = (rentalId) => {
    const filteredRentals = rentalList.filter((rental) => {
      return rental.id !== rentalId;
    });
    setRentalList(filteredRentals);
  };

  const addRental = (newRental) => {
    console.log("in addrental");
    console.log(rentalList);
    console.log(newRental);
    const updatedRentalList = [newRental, ...rentalList];
    setRentalList(updatedRentalList);
  };

  console.log(rentalList);

  return (
    <>
      <AddRental rentalList={rentalList} addRental={addRental} />
      <RentalList rentalList={rentalList} deleteRental={deleteRental} />
    </>
  );
};

export default DashboardPage;
