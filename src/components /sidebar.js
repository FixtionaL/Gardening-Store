import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownToggle = (index) => {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach((dropdown, i) => {
      if (i === index) {
        dropdown.classList.toggle('open');
      } else {
        dropdown.classList.remove('open');
      }
    });
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
      <i class="bi bi-arrow-left-right"></i>
      </button>
      <ul className="sidebar-menu">
        <li>
          <div className="sidebar-item" onClick={() => handleDropdownToggle(0)}>
            <span>Grocery</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/grocery/vegetables">Vegetables</Link>
              </li>
              <li>
                <Link to="/grocery/fruits">Fruits</Link>
              </li>
              <li>
                <Link to="/grocery/bakery">Bakery</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="sidebar-item" onClick={() => handleDropdownToggle(1)}>
            <span>Garden</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/decor/planters">Planters</Link>
              </li>
              <li>
                <Link to="/decor/fountains">Fountains</Link>
              </li>
              <li>
                <Link to="/decor/statues">Statues</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="sidebar-item" onClick={() => handleDropdownToggle(2)}>
            <span>Tools</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/tools/gardening">Gardening Tools</Link>
              </li>
              <li>
                <Link to="/tools/power">Power Tools</Link>
              </li>
              <li>
                <Link to="/tools/hand">Hand Tools</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/seller">Be a Seller</Link>
        </li>
        <li>
          <Link to="/sell">Sell</Link>
        </li>
        <li>
          <Link to="/store">Stores</Link>
        </li>
        <li>
          <Link to="/review">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
