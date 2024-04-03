import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Sidebar from "/src/components/Sidebar.jsx";
import Footer from "/src/components/Footer.jsx";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import rentalListData from "./data/rentals.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContent">
        <Sidebar />
        <div className="page">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/item/:itemId"
              element={<ItemDetailsPage rentals={rentalListData} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
