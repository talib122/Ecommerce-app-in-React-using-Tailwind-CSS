import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import img1 from "../../images/shoe1.jpeg";
import img2 from "../../images/shoe2.jpeg";
import img3 from "../../images/shoe3.jpeg";
import img4 from "../../images/shoe4.jpeg";
import img5 from "../../images/shoe5.jpeg";
import img6 from "../../images/shoe6.jpeg";
import img7 from "../../images/shoe7.jpeg";
import './Slider.css';
import { useNavigate } from 'react-router-dom';
const Slider = () => {
  const [slider, setSlider] = useState(0);
  const imgData = [img1, img2, img3, img4, img5, img6, img7];
  const navigate = useNavigate();
  const handleNext = () => {
    if (slider < imgData.length - 1) {
      setSlider(slider + 1);
    } else {
      setSlider(0);
    }
  };
  const handlePrev = () => {
    if (slider > 0) {
      setSlider(slider - 1);
    } else {
      setSlider(imgData.length - 1);
    }
  };
  useEffect(() => {
    const slideClear = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(slideClear);
  }, [slider]);
  const handleShopNowbtn = () => {
    navigate('/shop');
  };
  return (
    <div className="h-[520px] w-full bg-gray-200 mt-[10px]" id='home'>
      <div className="relative flex items-center justify-center">
        <img src={imgData[slider]} className="w-full h-[520px] " />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute left-0 -mt-28 ml-9 ">
          <h1 className="leading-[50px] text-5xl  md:text-7xl text-white text-bold ">
            Branded Shoes
            <br />
            <span className=" -ml-24 text-4xl  md:text-6xl "> are just closer </span>
            <br />
            <span className="-ml-56 sm:-ml-38 text-3xl md:-ml-[320px]  md:text-5xl">to you</span>
          </h1>
          <button className="absolute mt-24 px-3 py-2 bg-gradient-to-r from-indigo-500 to-[#c72092] text-white rounded-md hover:bg-gradient-to-l from-[#c72092] to-blue-700 " onClick={handleShopNowbtn}>
            SHOP NOW
            <FontAwesomeIcon icon={faAnglesRight} className='icon transition-transform duration-300 ease-in-out'/>
          </button>
        </div>
        <div className="flex absolute items-center justify-center bottom-0 gap-4">
          <button
            className="bg-black text-white px-3 py-2 "
            onClick={handlePrev}
          >
            prev
          </button>
          <button
            className="bg-black text-white px-3 py-2 "
            onClick={handleNext}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
