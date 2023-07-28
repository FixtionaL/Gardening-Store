import React, { useEffect, useState } from "react";
import MainNav from "./mainNav";
import Sidebar from "./sidebar";
import img from "./black-white-floral-border-with-black-background_901003-5726.avif";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // console.log("kdjdjdjdjdjdjdj");
    fetchCartItems();
  }, []);

  const token = localStorage.getItem("token");
  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:8181/api/cart/16", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Replace '16' with the user_id of the logged-in user
      setCartItems(response.data);
      // console.log("firjjjjjst");
      console.log(cartItems);
      console.log(response);
      // console.log(cartItems);
      // console.log(token);
    } catch (error) {
      console.error(error);
    }
  };

  const removeCartItem = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        `http://localhost:8181/api/cart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // fetchCartItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <MainNav />
      <div>
        <Sidebar />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={img}
                alt={`Product ${item.product_id}`}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.productName}</h2>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <p className="cart-item-price">Quantity: {item.quantity}</p>
              </div>
              <div className="cart-item-actions">
                <button
                  className="search-button"
                  onClick={() => {
                    removeCartItem(item.id);
                    console.log(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-subtotal">
            <span className="cart-summary-label">Subtotal :</span>
            <span className="cart-summary-value">
              ${calculateSubtotal().toFixed(2)}
            </span>
          </div>
          <div className="cart-summary-buttons">
            <button className="search-button">Continue Shopping</button>
            <button className="search-button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
