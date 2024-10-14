import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas"); // URL de tu API
        const data = await response.json();
        const pizzasWithQuantity = data.map(pizza => ({
          ...pizza,
          id: Number(pizza.id), 
          quantity: 0,
        }));
        setCart(pizzasWithQuantity);
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  const calculateTotal = () => {
    const newTotal = cart.reduce(
      (acc, pizza) => acc + pizza.price * pizza.quantity,
      0
    );
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <div>
      <Navbar total={total} />
      <Header />
      <Home setCart={setCart} cart={cart} />
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart cart={cart} setCart={setCart} /> */}
      <Pizza cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
};

export default App;