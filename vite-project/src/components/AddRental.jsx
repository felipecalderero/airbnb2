import { useState } from "react";

const AddRental = () => {
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
      name,
      city,
      country,
      price,
      image,
    };

    console.log("Submitted", newRental);
    //props.addRental(newRental);

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
