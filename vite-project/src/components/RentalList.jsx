import RentalCard from "./RentalCard";
import rentalListData from "../data/rentals.json";
import { useState } from "react";

const RentalList = () => {
  const [rentalList, setRentalList] = useState(rentalListData.results);

  const deleteRental = (rentalId) => {
    const filteredRentals = rentalList.filter((rental) => {
      return rental.id !== rentalId;
    });

    setRentalList(filteredRentals);
  };

  return (
    <div className="list">
      {rentalList
        .filter((rental) => rental.price < 50)
        .map((rental) => {
          return (
            <RentalCard
              key={rental.id}
              rental={rental}
              deleteFunction={() => deleteRental(rental.id)}
            />
          );
        })}
    </div>
  );
};

export default RentalList;
