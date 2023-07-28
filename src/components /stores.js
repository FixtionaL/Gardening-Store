import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainNav from './mainNav';
import Sidebar from './sidebar';
import img from './black-white-floral-border-with-black-background_901003-5726.avif';

const Stores = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from the backend when the component mounts
  const token = localStorage.getItem('token');
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/products/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (productId) => {
    // Implement your logic to add the product with the given productId to the cart here
    // For example, you can make an API call to add the product to the cart in the backend
    axios.post('http://localhost:8181/api/cart', { productId })
      .then(res => {
        console.log(`Product with ID ${productId} added to cart.`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <MainNav />
        <div>
          <Sidebar />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="wishlist-container">
        <h1 className="wishlist-title">Products</h1>
        <div className="wishlist-items">
          {products.map((product) => (
            <div key={product.product_id} className="wishlist-item">
              <img src={img} alt={product.name} className="wishlist-item-image" />
              <div className="wishlist-item-details">
                <h2 className="wishlist-item-name">{product.name}</h2>
                <p className="wishlist-item-price">${product.price.toFixed(2)}</p>
                <button className="search-button" onClick={() => addToCart(product.product_id)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;
