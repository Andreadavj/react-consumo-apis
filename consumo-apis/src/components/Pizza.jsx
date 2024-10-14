import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Pizza = ({ cart, setCart }) => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!response.ok) {
          throw new Error("Error al obtener la pizza");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  const addToCart = (pizza) => {
    const updatedCart = cart.map((item) =>
      item.id === pizza.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id && pizza.quantity > 0
        ? { ...pizza, quantity: pizza.quantity - 1 }
        : pizza
    );
    setCart(updatedCart);
  };

  const removePizzaFromCart = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, quantity: 0 } : pizza
    );
    setCart(updatedCart);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!pizza) return <p>No hay datos de la pizza</p>;

  const pizzaInCart = cart.find((p) => p.id === pizza.id);

  return (
    <div className="container">
      <div className="card mb-3">
        <img
          src={pizza.img} 
          className="card-img-top"
          alt={pizza.name}
          style={{ width: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p>Precio: ${pizza.price.toLocaleString()}</p>
          <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
          <p>
            Cantidad en carrito: {pizzaInCart ? pizzaInCart.quantity : 0}
          </p>
          <div className="btn-container">
            <button
              onClick={() => decreaseQuantity(pizza.id)}
              className="btn btn-danger"
            >
              Reducir 1 unidad
            </button>
            <button
              onClick={() => removePizzaFromCart(pizza.id)}
              className="btn btn-danger"
            >
              Eliminar del carrito
            </button>
            <button
              onClick={() => addToCart(pizza)}
              className="btn btn-success"
            >
              Añadir 1 unidad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Pizza.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Pizza;
