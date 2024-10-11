import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import BlogDetail from './Pages/Blog/BlogDetail';
import Shop from './Components/Shop/Shop';
import { CartProvider } from './Components/Cards/CartContext';
import CartItems from './Components/Cards/CartItems';
import FAQ from './FAQ/FAQ';
import ContactForm from './Components/Form/ContactForm';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ResetPassword from './Pages/Login/ResetPassword';
import Deals from './Pages/deals/deals';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Default route to Register */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route 
            path="*" 
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/Blog/:id" element={<BlogDetail />} />
                  <Route path="/cart" element={<CartItems />} />
                  <Route path="/deals" element={<Deals/>}/>
                  <Route path="/FAQs" element={<FAQ />} />
                  <Route path="/Form" element={<ContactForm />} />
                </Routes>
                <Footer />
              </>
            } 
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
