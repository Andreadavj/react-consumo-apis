import React, { useState, useEffect } from "react";
import CardPizza from "./CardPizza";

const Home = ({ setCart, cart }) => {
  const [pizzas, setPizzas] = useState([]);

  // Aumentar cantidad
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id && pizza.quantity < pizza.stock
        ? { ...pizza, quantity: pizza.quantity + 1 }
        : pizza
    );
    setCart(updatedCart);
  };

  // Disminuir cantidad
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id && pizza.quantity > 0
        ? { ...pizza, quantity: pizza.quantity - 1 }
        : pizza
    );
    setCart(updatedCart);
  };

  // useEffect para consumir la API de pizzas
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        const pizzasWithQuantity = data.map((pizza) => ({
          ...pizza,
          quantity: 0, // Inicializamos la cantidad en 0
        }));
        setPizzas(pizzasWithQuantity);
        setCart(pizzasWithQuantity); // Esto establece las pizzas iniciales en el carrito
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      }
    };

    fetchPizzas();
  }, [setCart]);

  return (
    <div className="container">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={pizza.id}>
            <CardPizza
              pizza={{
                ...pizza,
                id: Number(pizza.id), // Asegúrate de que el ID sea un número
              }}
              increaseQuantity={() => increaseQuantity(pizza.id)}
              decreaseQuantity={() => decreaseQuantity(pizza.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
