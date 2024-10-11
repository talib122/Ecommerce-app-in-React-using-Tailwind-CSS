import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bgimg from '../../images/bgimg2.jpeg';
import ResetPassword from './ResetPassword';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [resetEmail, setResetEmail] = useState(''); // For forgot password
  const [resetMessage, setResetMessage] = useState(''); // For showing reset messages
  const [showForgotPassword, setShowForgotPassword] = useState(false); // Toggle forgot password view
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Fetch username & password from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Check if the email and password match
    if (email === storedEmail && password === storedPassword) {
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };
 const handleForgotPassword=()=>{
  navigate('/reset-password');
 }
  return (
    <div
      className="flex items-center justify-center p-32 h-screen"
      style={{
        backgroundImage: `url(${bgimg})`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-[32px] flex items-center flex-col sm:px-[70px] py-16 bg-gray-300 bg-opacity-80 shadow-lg shadow-blue-400">
        <h1 className="text-3xl sm:text-4xl mb-4 font-semibold mb-14">Login</h1>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[300px] mb-2 p-2 border sm:w-[400px] border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[300px] mb-2 p-2 border sm:w-[400px] border-gray-300 rounded"
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <h4 className="text-[14px]">
              Not a member?{' '}
              <Link to="/Register" className="text-green-600 text-[19px]">
                Register
              </Link>
            </h4>
            <div className="flex items-center justify-center">
              <button
                onClick={handleLogin}
                className="bg-[#c72092] text-white w-[100px] sm:w-[150px] hover:bg-pink-900 px-4 py-2 rounded mt-4"
              >
                Login
              </button>
            </div>
            <p className="text-blue-600 mt-4 cursor-pointer" onClick={handleForgotPassword}>
              Forgot Password?
            </p>
      </div>
    </div>
  );
};

export default Login;
