import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import bgimg from '../../images/bgimg3.jpeg'
const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setMessage('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    localStorage.setItem('password',password);
    setMessage('password successfully changed');
   setTimeout(()=>{
    navigate('/login');
   },2000)
  };

  return (
    <div className="flex items-center justify-center p-32 h-screen"style={{
      backgroundImage: `url(${bgimg})`, // Replace with your image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className='px-[32px] flex items-center flex-col sm:px-[70px] py-16 bg-gray-300 bg-opacity-80 shadow-lg shadow-blue-400'>
        <h1 className="text-3xl sm:text-4xl mb-4 font-semibold ">Reset Password</h1>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[280px]  mb-2 p-2 border sm:w-[400px] border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-[280px]  mb-2 p-2 border sm:w-[400px] border-gray-300 rounded"
          required
        />
        {message && <p className="text-green-800">{message}</p>}
        <div className='flex items-center justify-center'>
          <button
            onClick={handleResetPassword}
            className="text-[10px] sm:text-[15px] bg-[#c72092] text-white w-[100px] sm:w-[150px] hover:bg-pink-900 px-4 py-2 rounded mt-4"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
