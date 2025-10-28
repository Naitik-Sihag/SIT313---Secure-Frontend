import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-300 border-b border-gray-700 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black">DEV@Deakin</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-300">Home</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-300">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-300">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;

