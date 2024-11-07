import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard'; // Import the AdminDashboard component
import { FaLock } from 'react-icons/fa'; // Import the lock icon from react-icons

const AdminPage = () => {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD; // Correct password from .env

  console.log("Loaded Password from .env:", correctPassword);  // Log to verify correctPassword

  const handleAdminClick = () => {
    setShowPasswordInput(true); // Show the password input field when Admin button is clicked
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const inputPassword = password.trim(); // Trim spaces from input password

    console.log("Input Password:", inputPassword);  // Log the input password
    console.log("Correct Password:", correctPassword);  // Log the correct password from .env

    if (inputPassword === correctPassword) {
      setIsPasswordCorrect(true);  // If correct password, show admin content
    } else {
      alert('Incorrect password'); // Incorrect password alert
    }
  };

  return (
    <div className="p-4 sm:p-6 m-4 rounded shadow-md bg-[#d8cfc4]">
      <div className="flex justify-center mt-6">
        {/* Full-width button on larger screens, smaller button on small screens */}
        <button
          className="w-full sm:w-auto px-4 py-4 sm:px-6 sm:py-6 bg-[#6b4f3c] text-white font-semibold rounded shadow hover:bg-[#8c6b54] flex justify-center items-center"
          onClick={handleAdminClick}
        >
          <FaLock size={24} /> {/* Render the lock icon here */}
        </button>
      </div>

      {/* Password Input Section */}
      {showPasswordInput && !isPasswordCorrect && (
        <form onSubmit={handlePasswordSubmit} className="mt-4">
          <label className="block text-gray-700 mb-2">Enter Password:</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded shadow"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Handle password input
          />
          <button
            type="submit"
            className="mt-4 w-full bg-[#6b4f3c] text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      )}

      {/* Admin Dashboard Content */}
      {isPasswordCorrect && <AdminDashboard />}  {/* Display AdminDashboard when password is correct */}
    </div>
  );
};

export default AdminPage;
