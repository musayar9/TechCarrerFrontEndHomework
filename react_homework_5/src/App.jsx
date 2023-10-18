import { Route, Routes, Link } from "react-router-dom";
import Orders from "./components/Orders";
import Suppliers from "./components/Suppliers"
Orders
function App() {


  return (
    <>
      <div className="w3-bar w3-blue  w3-padding-16 ">
        <Link className="w3-bar-item  w3-large" to="/">
          Suppliers
        </Link>
        <Link className="w3-bar-item  w3-large" to="/orders">
          Orders
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Suppliers />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App
