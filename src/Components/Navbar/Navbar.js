import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faXmark, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../Cards/CartContext';
import ClickAwayListener from '@mui/material/ClickAwayListener';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [IsProfileOpen, seProfileOpen]=useState(false);
  const [user, setUser]=useState({name:'',email:'',image:''});
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location=useLocation();
  const isActive=(path)=>location.pathname===path;
  const handleProfileOpen=()=>{
    seProfileOpen((profile)=>!profile)
  };
  const handleHamburger = () => {
    setMenuOpen((Mopen) => !Mopen);
  };

  // Logout function
  const handleLogout = () => {
    navigate('/login'); // Redirect to login page or any other route
  };
  useEffect(()=>{
   const currentUser=localStorage.getItem('username');
   const email=localStorage.getItem('email');
   const image=localStorage.getItem('image');
   if(currentUser && email){
    setUser({name:currentUser , email,image});
   }
   else{
    setUser({name:"Guest",email:"",image:"guest"})
   }
  },[])

  return (
    <div className="flex items-center justify-between shadow-xl fixed w-full px-8 md:px-14 top-0 bg-white z-50">
     <div className="text-[35px] text-bold text-[#c72092]">
        WOW<span className="text-blue-700 underline">shoes</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex gap-[20px] lg:gap-[42px]">
          <li><Link to="/home" className={`hover:text-[#c72092] border-b-2 ${isActive('/home')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`}>Home</Link></li>
          <li><Link to="/shop" className={`hover:text-[#c72092] border-b-2 ${isActive('/shop')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`}>Shop</Link></li>
          <li><Link to="/deals" className={`hover:text-[#c72092] border-b-2 ${isActive('/deals')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`}>Deals</Link></li>
          <li><Link to="/form" className={`hover:text-[#c72092] border-b-2 ${isActive('/form')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`}>Form</Link></li>
          <li><Link to="/blog" className={`hover:text-[#c72092] border-b-2 ${isActive('/blog')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`}>Blog</Link></li>
          <li><Link to="/faqs" className={`hover:text-[#c72092] border-b-2 ${isActive('/faqs')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`}>Faqs</Link></li>
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
        <ClickAwayListener onClickAway={() => seProfileOpen(false)}>
              <div className='relative h-10 w-20 bg-slate-300  rounded-2xl flex items-center' onClick={handleProfileOpen}>
                <img src={user.image} className='h-8 w-8 rounded-full ml-3 bg-black' />
                <FontAwesomeIcon icon={faAngleDown} className='ml-2 text-[12px]'/>
                       
              {IsProfileOpen&&(
                <div className='absolute bg-white mt-[210.5px] -ml-24  shadow-xl flex flex-col items-center justify-center rounded-md px-10 py-5 '>
                  <ul>
                    <li>user : {user.name}</li>
                    <li className='text-nowrap'>Email : {user.email}</li>
                  </ul>
                  <span className='flex justify-center items-center mx-auto pt-3 pb-4'><button
                className="bg-[#c72092] rounded-md text-white px-4 py-2 "
                onClick={handleLogout} 
              >
                Logout
              </button></span>
                </div>
              )
              }
              </div></ClickAwayListener>
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
        <div className="flex md:hidden items-center justify-center absolute mt-[290px] bg-gray-200 w-full left-0">
          <ul className="flex-col ">
          <li className='mb-2 mt-2'><Link to="/home" className={`hover:text-[#c72092] border-b-2 ${isActive('/home')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`} onClick={handleHamburger}>Home</Link></li>
          <li className='mb-2'><Link to="/shop" className={`hover:text-[#c72092] border-b-2 ${isActive('/shop')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`} onClick={handleHamburger}>Shop</Link></li>
          <li className='mb-2'><Link to="/deals" className={`hover:text-[#c72092] border-b-2 ${isActive('/deals')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`} onClick={handleHamburger}>Deals</Link></li>
          <li className='mb-2'><Link to="/form" className={`hover:text-[#c72092] border-b-2 ${isActive('/form')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`} onClick={handleHamburger}>Form</Link></li>
          <li className='mb-2'><Link to="/blog" className={`hover:text-[#c72092] border-b-2 ${isActive('/blog')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`} onClick={handleHamburger}>Blog</Link></li>
          <li className='mb-2'><Link to="/faqs" className={`hover:text-[#c72092] border-b-2 ${isActive('/faqs')||isActive('/')?"border-purple-500 text-purple-500":"border-transparent"}`} onClick={handleHamburger}>Faqs</Link></li>
            <li>
              <button
                className="bg-[#c72092] rounded-md text-white px-4 py-2 "
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
