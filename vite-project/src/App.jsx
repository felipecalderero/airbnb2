import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Sidebar from "/src/components/Sidebar.jsx";
import Footer from "/src/components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="mainContent">
        <Sidebar />
        <div>Main Page goes here</div>
      </div>

      <Footer />
    </div>
  );
}
export default App;
