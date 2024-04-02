import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
