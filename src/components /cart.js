import React from 'react';
import MainNav from './mainNav';
import Sidebar from './sidebar';
import img from './black-white-floral-border-with-black-background_901003-5726.avif';

const Cart = () => {
  return (
    <div>
        <div>
        <MainNav/>
        <div>
         <Sidebar/>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-items">
        <div className="cart-item">
          <img src={img} alt="Product 1" className="cart-item-image" />
          <div className="cart-item-details">
            <h2 className="cart-item-name">Product 1</h2>
            <p className="cart-item-price">$19.99</p>
          </div>
          <div className="cart-item-actions">
            <button className="search-button">Remove</button>
          </div>
        </div>
        <div className="cart-item">
          <img src={img} alt="Product 2" className="cart-item-image" />
          <div className="cart-item-details">
            <h2 className="cart-item-name">Product 2</h2>
            <p className="cart-item-price">$24.99</p>
          </div>
          <div className="cart-item-actions">
            <button className="search-button">Remove</button>
          </div>
        </div>
      </div>
      <div className="cart-summary">
        <div className="cart-summary-subtotal">
          <span className="cart-summary-label">Subtotal :</span>
          <span className="cart-summary-value">$44.98</span>
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
