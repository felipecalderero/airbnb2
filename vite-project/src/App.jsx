import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Sidebar from "/src/components/Sidebar.jsx";
import Footer from "/src/components/Footer.jsx";
import RentalList from "./components/RentalList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContent">
        <Sidebar />
        <RentalList />
      </div>

      <Footer />
    </div>
  );
}
export default App;
