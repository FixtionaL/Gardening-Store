import React from 'react';
import MainNav from './mainNav';
import Sidebar from './sidebar';
import img from './black-white-floral-border-with-black-background_901003-5726.avif';

const Wishlist = () => {
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
    <div className="wishlist-container">
      <h1 className="wishlist-title">Products</h1>
      <div className="wishlist-items">
        <div className="wishlist-item">
          <img src= {img} alt="Product 1" className="wishlist-item-image" />
          <div className="wishlist-item-details">
            <h2 className="wishlist-item-name">Product 1</h2>
            <p className="wishlist-item-price">$19.99</p>
            <button className="search-button">Remove</button>
          </div>
        </div>
        <div className="wishlist-item">
          <img src= {img} alt="Product 2" className="wishlist-item-image" />
          <div className="wishlist-item-details">
            <h2 className="wishlist-item-name">Product 2</h2>
            <p className="wishlist-item-price">$24.99</p>
            <button className="search-button">Remove</button>
          </div>
        </div>
        <div className="wishlist-item">
          <img src= {img} alt="Product 2" className="wishlist-item-image" />
          <div className="wishlist-item-details">
            <h2 className="wishlist-item-name">Product 3</h2>
            <p className="wishlist-item-price">$15.99</p>
            <button className="search-button">Remove</button>
          </div>
        </div>
        <div className="wishlist-item">
          <img src= {img} alt="Product 2" className="wishlist-item-image" />
          <div className="wishlist-item-details">
            <h2 className="wishlist-item-name">Product 4</h2>
            <p className="wishlist-item-price">$29.99</p>
            <button className="search-button">Remove</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Wishlist;
