import logo from "/src/assets/airbnb_logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <p>Airbnb2 App</p>
    </nav>
  );
}

export default Navbar;
