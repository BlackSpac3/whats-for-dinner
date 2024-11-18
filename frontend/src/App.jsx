import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import { useState } from "react";
import LogInPopup from "./components/LogInPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      {showLogin ? <LogInPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="w-[80%] phone:w-[100%] m-auto">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;
