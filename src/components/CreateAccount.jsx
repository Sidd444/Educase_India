import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [fullName, setFullName] = useState('Marry Doe');
  const [phoneNumber, setPhoneNumber] = useState('0000000000');
  const [emailAddress, setEmailAddress] = useState('marrydoe@gmail.com');
  const [password, setPassword] = useState('Marry Doe');
  const [companyName, setCompanyName] = useState('Marry Doe');
  const [isAgency, setIsAgency] = useState('Yes');
  const navigate = useNavigate();


  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h1 className="text-3xl font-bold mb-4">Create your PopX account</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-purple-600 text-sm font-semibold mb-2">
            Full Name*
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-purple-600 text-sm font-semibold mb-2">
            Phone number*
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="emailAddress" className="block text-purple-600 text-sm font-semibold mb-2">
            Email address*
          </label>
          <input
            type="email"
            id="emailAddress"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-purple-600 text-sm font-semibold mb-2">
            Password*
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="companyName" className="block text-purple-600 text-sm font-semibold mb-2">
            Company name
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-purple-600 text-sm font-semibold mb-2">
            Are you an Agency?*
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-purple-600"
                name="isAgency"
                value="Yes"
                checked={isAgency === 'Yes'}
                onChange={(e) => setIsAgency(e.target.value)}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-purple-600"
                name="isAgency"
                value="No"
                checked={isAgency === 'No'}
                onChange={(e) => setIsAgency(e.target.value)}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;