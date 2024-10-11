import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      clearCart(); 
      navigate('/');
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-green-500 text-3xl mb-4 bg-gray shadow-lg px-20 py-28">Your order has been placed successfully!</div>
         
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-12">
      <h1 className="text-3xl font-bold text-center mb-6">Cart</h1>
      <div className="cart-items mb-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-2xl h-[200px] mt-24">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-4">
                <span>{item.name}</span>
                <button onClick={() => removeFromCart(item)} className="text-red-500">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

        {cartItems.length > 0 && !submitted && (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <label className="block mb-2">
            First Name
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </label>
          <label className="block mb-2">
            Last Name
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </label>
          <label className="block mb-2">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </label>
          <label className="block mb-4">
            Phone Number
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </label>
          <button type="submit" className="px-4 py-2 bg-gradient-to-r from-[#c72092] to-blue-300 text-white rounded-md">
            Proceed
          </button>
        </form>
      )}
    </div>
  );
};

export default Cart;
