import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Sidebar from "/src/components/Sidebar.jsx";
import Footer from "/src/components/Footer.jsx";
//import RentalList from "./components/RentalList";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContent">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
