import "./App.css";
import Addproduct from "./Components/Addproduct";
import Navigation from "./Components/Navigation";
import { Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/product" element={<ProductList />} />
        <Route path="/addProduct" element={<Addproduct />} />
      </Routes>
    </div>
  );
}

export default App;
