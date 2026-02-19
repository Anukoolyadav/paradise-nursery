import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/CartSlice";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const plantsData = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 12.99, image: "/plants/snake.jpg" },
    { id: 2, name: "Peace Lily", price: 14.99, image: "/plants/lily.jpg" },
    { id: 3, name: "ZZ Plant", price: 11.99, image: "/plants/zz.jpg" },
    { id: 4, name: "Pothos", price: 9.99, image: "/plants/pothos.jpg" },
    { id: 5, name: "Spider Plant", price: 8.99, image: "/plants/spider.jpg" },
    { id: 6, name: "Rubber Plant", price: 15.99, image: "/plants/rubber.jpg" },
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 6.99, image: "/plants/rose.jpg" },
    { id: 8, name: "Tulip", price: 5.99, image: "/plants/tulip.jpg" },
    { id: 9, name: "Sunflower", price: 4.99, image: "/plants/sunflower.jpg" },
    { id: 10, name: "Lavender", price: 7.99, image: "/plants/lavender.jpg" },
    { id: 11, name: "Daisy", price: 3.99, image: "/plants/daisy.jpg" },
    { id: 12, name: "Jasmine", price: 6.49, image: "/plants/jasmine.jpg" },
  ],
  Succulents: [
    { id: 13, name: "Aloe Vera", price: 6.99, image: "/plants/aloe.jpg" },
    { id: 14, name: "Echeveria", price: 5.49, image: "/plants/echeveria.jpg" },
    { id: 15, name: "Haworthia", price: 4.99, image: "/plants/haworthia.jpg" },
    { id: 16, name: "Jade Plant", price: 7.49, image: "/plants/jade.jpg" },
    { id: 17, name: "Cactus", price: 3.99, image: "/plants/cactus.jpg" },
    { id: 18, name: "String of Pearls", price: 8.99, image: "/plants/pearls.jpg" },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={totalItems} />

      <div style={{ padding: "20px" }}>
        <h1>Our Plants</h1>

        {Object.entries(plantsData).map(([category, plants]) => (
          <div key={category}>
            <h2>{category}</h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {plants.map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    width: "180px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="120"
                    height="120"
                  />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
