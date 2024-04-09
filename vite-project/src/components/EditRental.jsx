import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditRental = ({ rental, editRental }) => {
  const [name, setName] = useState(rental.name);
  const [city, setCity] = useState(rental.city);
  const [country, setCountry] = useState(rental.country);
  const [price, setPrice] = useState(rental.price);
  const [image, setImage] = useState(rental.picture_url.url);

  const handleName = (e) => setName(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handlePicture = (e) => setImage(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRental = {
      id: rental.id,
      name,
      city,
      country,
      price,
    };
    newRental.picture_url = {};
    newRental.picture_url.url = image;
    // "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/files/9a1168a0abcb0aca0512010b156ac61e";

    console.log("Edited", newRental);
    editRental(newRental);

    navigate("/");
  };

  return (
    <div className="addRental">
      <h4>Edit a Rental</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={handleName} />
          </label>
        </div>
        <div>
          <label>
            City:
            <input type="text" name="city" value={city} onChange={handleCity} />
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
        <button type="submit">Update Rental</button>
      </form>
    </div>
  );
};

export default EditRental;
