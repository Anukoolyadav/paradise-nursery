import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "../store/CartSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <div style={{ padding: "20px" }}>
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "12px 0",
                  gap: "12px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width="80"
                  height="80"
                />

                <div style={{ flex: 1 }}>
                  <h4>{item.name}</h4>
                  <p>Unit Price: ${item.price}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div>
                  <button onClick={() => handleDecrement(item.id, item.quantity)}>
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id, item.quantity)}>
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleDelete(item.id)}
                  style={{ marginLeft: "12px", color: "red" }}
                >
                  Delete
                </button>
              </div>
            ))}

            <h3>Total Cart Amount: ${totalAmount.toFixed(2)}</h3>

            <div style={{ marginTop: "20px" }}>
              <button
                onClick={() => alert("Coming Soon")}
                style={{ marginRight: "10px" }}
              >
                Checkout
              </button>

              <button onClick={() => navigate("/plants")}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartItem;
