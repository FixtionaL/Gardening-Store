import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import SearchBar from './searchbar';
import MainNav from './mainNav';
import Sidebar from './sidebar';
import img from './black-white-floral-border-with-black-background_901003-5726.avif';

const MainPage = () => {
  return (
      <div className='bimg'>
        <MainNav/>
        <div>
         <Sidebar/>
        </div>
        <div>
        {/* <img src={img} alt="mainBG" className="BG" /> */}
        </div>
    </div>
  );
};

export default MainPage;
