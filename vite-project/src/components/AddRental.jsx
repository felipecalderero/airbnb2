import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import defaultImage from "../assets/default-house.jpeg";

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
    if (image) {
      newRental.picture_url.url = image;
      // "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/files/9a1168a0abcb0aca0512010b156ac61e";
    } else {
      newRental.picture_url.url = defaultImage;
    }

    console.log("Submitted", newRental);
    addRental(newRental);

    setName("");
    setCity("");
    setCountry("");
    setPrice(0);
    setImage("");
  };

  return (
    <div className="addRental">
      <h4>Add a Rental</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleName}
              required
            />
          </label>
        </div>
        <div>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={city}
              onChange={handleCity}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={country}
              onChange={handleCountry}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={price}
              onChange={handlePrice}
              required
              min="10"
            />
          </label>
        </div>
        <div>
          <label>
            Picture:
            <input
              type="text"
              name="picture"
              value={image}
              onChange={handlePicture}
            />
          </label>
        </div>
        <button type="submit">Add a New Rental</button>
      </form>
    </div>
  );
};

export default AddRental;
