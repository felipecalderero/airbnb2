import RentalCard from "./RentalCard";

const RentalList = ({ rentalList, deleteRental }) => {
  return (
    <div className="list">
      {rentalList
        .filter((rental) => rental.price < 150)
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
