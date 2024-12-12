import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bgimg from '../../images/bgimg1.jpeg'

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null); 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword,setShowPassword]=useState(false);
  const navigate = useNavigate();
  const toBase64=(file)=>
    new Promise((resolve,reject)=>{
      const reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>resolve(reader.result);
      reader.onerror=(error)=>reject(error);
    })
  const handleRegister = async (e) => {
    e.preventDefault(); 
    const formData = new FormData();

    // Fields validation
    if (!name || !username || !password || !email) {
      setError('Please enter all fields');
      return;
    }

    // Email validation
    if (!email.includes('@gmail.com') && !email.includes('@yahoo.com')) {
      setError('Invalid email format');
      return;
    }

    // Image validation
    if (!image) {
      setError('Please upload your picture');
      return;
    }


    try {
      const base64Image=await toBase64(image);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('image', base64Image);
  
        setSuccess('Registration successful!');
        navigate('/login');
    } catch (err) {
      console.error('Error:', err);
      setError('Error registering user. Please try again.');
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${bgimg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-[32px] flex items-center flex-col sm:px-[70px] py-16 bg-gray-300 bg-opacity-80 shadow-lg shadow-blue-400">
        <h1 className="text-3xl sm:text-4xl mb-4 font-semibold">Register</h1>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[280px] sm:w-[400px] mb-2 p-2 lg:w-[400px] border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
            className="w-[280px] sm:w-[400px] mb-2 p-2 lg:w-[400px] border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[280px] sm:w-[400px] mb-2 p-2 lg:w-[400px] border border-gray-300 rounded"
        />
        <div className='relative flex items-center justify-center'><input
          type={showPassword?'text':'password'}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        className="w-[280px] sm:w-[400px] mb-2 p-2 lg:w-[400px] border border-gray-300 rounded"
        />
        <button className='absolute right-2' onClick={()=>setShowPassword((prev)=>!prev)}>
        {showPassword?"Hide":"Show"}
        </button>
        </div>

        {/* File input for image */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])} // Set the selected file to state
          className="mb-2 p-2 border w-[280px] md:w-[300px] sm:w-[400px] border-gray-300 rounded"
        />

        {error && <p className="text-red-500">{error}</p>}
        <h4 className="text-[14px]">
          Already a member?{' '}
          <Link to="/login" className="text-green-600 text-[19px]">
            Login
          </Link>
        </h4>
        <div className="flex items-center justify-center">
          <button
            onClick={handleRegister}
            className="bg-[#c72092] text-white w-[100px] sm:w-[150px] hover:bg-pink-900 px-4 py-2 rounded mt-4"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
