// src/components/Home.js

import React from 'react';
import Home1 from "../assests/Website/Home1.jpeg";
import Home2 from "../assests/Website/Home2.jpeg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-evenly h-screen bg-gray-300">
      <div>
        <img src={Home1} alt="Check your connection" className='w-80 h-80' />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Welcome to the Blogging Page</h1>
         {/* Buttons for Login and Signup */}
      <div className="flex justify-around items-center mt-4">
        <Link to="/login" className="bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 ease-in-out">
          Login
        </Link>
        <Link to="/signup" className="bg-green-500 text-white p-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-200 ease-in-out mt-2">
          Signup
        </Link>
      </div>
      </div>
      <div>
        <img src={Home2} alt="Check Your Connection" className='w-80 h-80' />
      </div>
     
    </div>
  );
};

export default Home;
