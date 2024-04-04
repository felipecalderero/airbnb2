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
import { useState } from "react";
import EditItemPage from "./pages/EditItemPage";

function App() {
  const [rentalList, setRentalList] = useState(rentalListData.results);

  const deleteRental = (rentalId) => {
    const filteredRentals = rentalList.filter((rental) => {
      return rental.id !== rentalId;
    });
    setRentalList(filteredRentals);
  };

  const addRental = (newRental) => {
    const updatedRentalList = [newRental, ...rentalList];
    setRentalList(updatedRentalList);
  };

  const editRental = (updatedRental) => {
    const filteredRentals = rentalList.filter((rental) => {
      return rental.id !== updatedRental.id;
    });
    const updatedRentalList = [updatedRental, ...filteredRentals];
    setRentalList(updatedRentalList);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="mainContent">
        <Sidebar />
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <DashboardPage
                  addRental={addRental}
                  deleteRental={deleteRental}
                  rentalList={rentalList}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/item/:itemId"
              element={<ItemDetailsPage rentalList={rentalList} />}
            />
            <Route
              path="/edititem/:itemId"
              element={
                <EditItemPage rentalList={rentalList} editRental={editRental} />
              }
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
