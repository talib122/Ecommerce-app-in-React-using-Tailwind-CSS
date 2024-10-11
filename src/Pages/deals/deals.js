import React, { useState, useEffect } from 'react';
import img from '../../images/dealimg.webp';
import { Link } from 'react-router-dom';
import img1 from '../../images/shoe1.jpeg';
import img2 from '../../images/shoe2.jpeg';
import img4 from '../../images/shoe4.jpeg';
import v1 from '../../videos/v1.mp4';

const Deals = () => {
  // Countdown logic
  const calculateTimeLeft = () => {
    let difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Slider logic
  const [slider, setSlider] = useState(0);
  const imgData = [img1, img2, img4];

  const handleNext = () => {
    setSlider((prevSlider) => (prevSlider < imgData.length - 1 ? prevSlider + 1 : 0));
  };

  const handlePrev = () => {
    setSlider((prevSlider) => (prevSlider > 0 ? prevSlider - 1 : imgData.length - 1));
  };

  // Render the component
  return (
    <div className="deals-page mb-24">
      <h1 className="mt-[90px] text-3xl md:text-5xl text-center mb-12">Our Best Deals</h1>
      <video src={v1} controls className="mt-8 px-4 md:px-24 w-[450px] md:w-[1500px] mx-auto" loop autoPlay muted />
      <div className="items-center deals-container flex flex-col md:flex-row mt-10 md:mt-16 px-8">
        <div
          className="text-center mx-auto w-[415px] md:w-[690px]  p-6"
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <h2 className="mt-16 mb-8 text-white text-2xl md:text-3xl">
            Exclusive Hot Deal Ends Soon!
          </h2>
          <p className="text-orange-600 text-xl md:text-2xl mb-6 font-bold">
            Deal for you is ending soon!
          </p>

          <div className="countdown flex justify-center space-x-4 mb-6">
            <div className="time-box">
              <span className="block bg-white px-4 py-2 rounded-lg text-lg md:text-xl font-bold">{timeLeft.days || '0'} Days</span>
            </div>
            <div className="time-box">
              <span className="block text-lg bg-white px-4 py-2 rounded-lg md:text-xl font-bold">{timeLeft.hours || '0'} Hours</span>
            </div>
            <div className="time-box">
              <span className="block text-lg bg-white px-4 py-2 rounded-lg md:text-xl font-bold">{timeLeft.minutes || '0'} Mins</span>
            </div>
            <div className="time-box">
              <span className="block text-lg bg-white px-4 py-2 rounded-lg md:text-xl font-bold">{timeLeft.seconds || '0'} Secs</span>
            </div>
          </div>

          <Link to="/shop">
            <button className="shop-now mb-8 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="deal-product mt-10 md:mt-14 md:ml-12 w-[415px] md:w-[450px] mx-auto">
          <div className="product-image mx-auto">
            <img src={imgData[slider]} className="w-full max-w-md h-[200px] md:h-[300px] object-cover" alt="Product Slider" />
          </div>

          <div className="product-info text-center mt-4">
            <span className="price text-2xl md:text-3xl text-orange-600">PKR 150.00</span>
            <span className="old-price text-lg md:text-xl">PKR 210.00</span>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Beautiful sale for beautiful persons</p>
          </div>

          <div className="arrows flex justify-center space-x-6 mt-4">
            <span className="prev cursor-pointer text-orange-600 font-bold" onClick={handlePrev}>
              PREV
            </span>
            <span className="next cursor-pointer text-orange-600 font-bold" onClick={handleNext}>
              NEXT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
