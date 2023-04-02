import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Item from "./pages/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
