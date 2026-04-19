import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isFormFilled = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account-settings');
  };

  return (
    <div className="w-[375px] h-[812px] bg-white flex flex-col p-8">
      <h1 className="text-3xl font-bold mb-4">Signin to your PopX account</h1>
      <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <label htmlFor="email" className="absolute -top-3 left-3 bg-white px-1 text-purple-600 text-xs font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 pt-4 pb-2 border rounded-md focus:outline-none focus:border-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 relative">
          <label htmlFor="password" className="absolute -top-3 left-3 bg-white px-1 text-purple-600 text-xs font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 pt-4 pb-2 border rounded-md focus:outline-none focus:border-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-3 rounded-lg font-semibold ${isFormFilled ? 'bg-[#6C25FF] text-white' : 'bg-[#ECECEC] text-[#909090]'}`}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;