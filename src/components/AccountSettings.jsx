import React from 'react';
import { FaCamera } from 'react-icons/fa'; 

function AccountSettings() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      <div className="flex items-center mb-8">
        <div className="relative">
          <img
            src="https://d2gjqh9j26unp0.cloudfront.net/profilepic/d7ebc0c7485e6a4b189b456894d5659e" 
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full border-2 border-white">
            <FaCamera className="text-sm" />
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Marry Doe</h2>
          <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elitr. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
      </p>
      {/* Additional settings content can go here */}
    </div>
  );
}

export default AccountSettings;