import logo from "/src/assets/logoEquistay.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="navbarText">
        <h3>Connect Globally, Stay Locally:</h3>
        <p>Building a Fairer World, One Stay at a Time</p>
      </div>
    </nav>
  );
}

export default Navbar;
