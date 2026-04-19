import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to PopX</h1>
      <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/create-account">
        <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold mb-4 hover:bg-purple-700 transition duration-300">
          Create Account
        </button>
      </Link>
      <Link to="/login">
        <button className="w-full bg-purple-200 text-purple-800 py-3 px-4 rounded-lg font-semibold hover:bg-purple-300 transition duration-300">
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
}

export default Welcome;