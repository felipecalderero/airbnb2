import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddRental = ({ addRental }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handlePicture = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRental = {
      id: uuidv4(),
      name,
      city,
      country,
      price,
    };
    newRental.picture_url = {};
    newRental.picture_url.url = image;
    // "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/files/9a1168a0abcb0aca0512010b156ac61e";

    console.log("Submitted", newRental);
    addRental(newRental);

    setName("");
    setCity("");
    setCountry("");
    setPrice(0);
    setImage("");
  };

  return (
    <div className="AddRental">
      <h4>Add a Rental</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleName} />
        </label>

        <label>
          City:
          <input type="text" name="city" value={city} onChange={handleCity} />
        </label>

        <label>
          Country:
          <input
            type="text"
            name="country"
            value={country}
            onChange={handleCountry}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={price}
            onChange={handlePrice}
          />
        </label>

        <label>
          Picture:
          <input
            type="text"
            name="picture"
            value={image}
            onChange={handlePicture}
          />
        </label>
        <button type="submit">Add a New Rental</button>
      </form>
    </div>
  );
};

export default AddRental;
