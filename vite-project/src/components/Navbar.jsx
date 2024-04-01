import logo from "/src/assets/airbnb_logo.svg";

function Navbar() {
  return (
    <nav className="Navbar">
      <img src={logo} alt="logo" />
      <p>Airbnb2 App</p>
    </nav>
  );
}

export default Navbar;
