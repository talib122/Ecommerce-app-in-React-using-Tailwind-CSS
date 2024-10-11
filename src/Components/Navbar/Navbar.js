import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Cards/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleHamburger = () => {
    setMenuOpen((Mopen) => !Mopen);
  };

  // Logout function
  const handleLogout = () => {
    navigate('/login'); // Redirect to login page or any other route
  };

  return (
    <div className="flex items-center justify-between shadow-xl fixed w-full px-14 top-0 bg-white z-50">
      <div className="text-[35px] text-bold text-[#c72092]">
        WOW<span className="text-blue-700 underline">shoes</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex gap-[20px] lg:gap-[42px]">
          <li><Link to="/home" className="hover:text-[#c72092]">Home</Link></li>
          <li><Link to="/shop" className="hover:text-[#c72092]">Shop</Link></li>
          <li><Link to="/deals" className="hover:text-[#c72092]">Deals</Link></li>
          <li><Link to="/form" className="hover:text-[#c72092]">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-[#c72092]">Blog</Link></li>
          <li><Link to="/faqs" className="hover:text-[#c72092]">FAQs</Link></li>
        </ul>
      </div>
      
      {/* Cart Icon */}
      <div className="hidden md:flex">
        <span className="text-2xl mr-6">
          <Link to="/cart" className="relative">
            <FontAwesomeIcon icon={faCartShopping} className="-mr-[8px] hover:text-[#c72092]" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </span>
        <button
                className="bg-[#c72092] rounded-md text-white px-4 py-2"
                onClick={handleLogout} 
              >
                Logout
              </button>
      </div>

      {/* Mobile Menu Icon */}
      <span
        className="md:hidden bg-gray-500 text-white px-4 py-[6px] fa-xl rounded-sm"
        onClick={handleHamburger}
      >
        <FontAwesomeIcon icon={!menuOpen ? faBars : faXmark} />
      </span>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex items-center justify-center absolute mt-[305px] bg-gray-200 w-full left-0">
          <ul className="flex-col">
            <li className="mb-3"><Link to="/home" className="hover:text-[#c72092]">Home</Link></li>
            <li className="mb-3"><Link to="/shop" className="hover:text-[#c72092]">Shop</Link></li>
            <li className="mb-3"><Link to="/deals" className="hover:text-[#c72092]">Deals</Link></li>
            <li className="mb-3"><Link to="/form" className="hover:text-[#c72092]">Contact</Link></li>
            <li className="mb-3"><Link to="/blog" className="hover:text-[#c72092]">Blog</Link></li>
            <li className="mb-3"><Link to="/faqs" className="hover:text-[#c72092]">FAQs</Link></li>
            <li className="pb-4">
              <button
                className="bg-[#c72092] rounded-md text-white px-4 py-2"
                onClick={handleLogout} 
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
