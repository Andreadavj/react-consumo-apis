import React from "react";
import pizzas from "./pizzas";
import PropTypes from "prop-types";

const CardPizza = ({ pizza, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="card">
      <img src={pizza.image} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>

        <p className="card-text">
          🍕 {pizza.ingredients.join(", ")}
        </p>
        <p className="price">Precio: ${pizza.price.toLocaleString()}</p>

        <div>
          <button className="btn btn-primary"> 👀 Ver más</button>
          <button onClick={increaseQuantity} className="btn btn-success"> 🛒 Añadir</button>
        </div>

        <div className="mt-3 d-flex justify-content-center">
          <button onClick={increaseQuantity} className="btn btn-success">
            +
          </button>
          <button onClick={decreaseQuantity} className="btn btn-danger">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default CardPizza;