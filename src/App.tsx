import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import SummaryPage from './pages/SummaryPage';
import {useCart} from "./context/CartContext";

function App() {
    const { clearCart } = useCart();

    useEffect(() => {
        // Sprawdź, czy koszyk powinien zostać wyczyszczony po powrocie ze strony potwierdzenia
        const cartCleared = localStorage.getItem("cartCleared");
        if (cartCleared === "true") {
            clearCart();
            localStorage.removeItem("cartCleared");
        }
    }, [clearCart]);

    return (

      <Router>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          {/*<Route path="/confirmation" element={<ConfirmationPage />} />*/}
        </Routes>
      </Router>

  );
}

export default App;
