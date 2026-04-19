import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import AccountSettings from './components/AccountSettings';

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen bg-[#f0f2f5]"> {/* Restored original wrapper styling */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;