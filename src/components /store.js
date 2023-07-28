import React from "react";
import MainNav from './mainNav';
import Sidebar from './sidebar';
import img from './black-white-floral-border-with-black-background_901003-5726.avif';
import { useNavigate } from 'react-router-dom';


const Store = () => {
    const navigate = useNavigate();
    
    const handleShopButtonClick = () => {
      navigate('/stores');
    };
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
      <h1 className="wishlist-title">Stores</h1>
      <div className="wishlist-items">
        <div className="wishlist-item">
          <img src= {img} alt="Product 1" className="wishlist-item-image" />
          <div className="wishlist-item-details">
            <h2 className="store-name">Store 1</h2>
            <button className="search-button" onClick={handleShopButtonClick}>Shop</button>
          </div>
        </div>
        <div className="wishlist-item">
          <img src= {img} alt="Product 2" className="wishlist-item-image" />
          <div className="wishlist-item-details">
            <h2 className="store-name">Store 2</h2>
            <button className="search-button" onClick={handleShopButtonClick}>Shop</button>
          </div>
        </div>
        <div className="wishlist-item">
          <img src= {img} alt="Product 2" className="wishlist-item-image" />
          <div className="wishlist-item-details">
            <h2 className="store-name">Store  3</h2>
            <button className="search-button" onClick={handleShopButtonClick}>Shop</button>
          </div>
        </div>
        <div className="wishlist-item">
          <img src= {img} alt="Product 2" className="wishlist-item-image" />
          <div className="wishlist-item-details">
            <h2 className="store-name">Store 4</h2>
            <button className="search-button" onClick={handleShopButtonClick}>Shop</button>
          </div>
        </div>
      </div>
    </div>
        </div>  
    );
};

export default Store;