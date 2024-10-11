import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,faHeadset,faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    
    <div class="services pb-36" id="services">
  <h1
        className="text-5xl text-black  text-center font-bold pt-14 mb-24 mt-16"
      >
        Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#5a1e63] to-[#b636c9]">Services</span>
      </h1>
  <div className="grid grid-cols-1 sm:grid-cols-3 px-14">
  <div className="flex flex-col items-center justify-center px-12">
  <FontAwesomeIcon icon={faTruckFast} className="text-7xl text-yellow-500 mb-3"/>
  <h6 className="text-2xl font-semibold mb-2">Fast Delivery</h6>
  <p>We can deliver fast with our branded collection</p>    
  </div>
  <div className="flex flex-col items-center justify-center px-12">
  <FontAwesomeIcon icon={faRotateLeft} className="text-7xl text-yellow-500 mb-3"/>
  <h6 className="text-2xl font-semibold mb-2">20 days free replacement</h6>
  <p>We can replace our product between 20 days for yoy</p>    
  </div>
  <div className="flex flex-col items-center justify-center px-12">
  <FontAwesomeIcon icon={faHeadset} className="text-7xl text-yellow-500 mb-3"/>
  <h6 className="text-2xl font-semibold mb-2">24x7 Support</h6>
  <p>Here is 24x7 Support for you. You can contact us anytime</p>    
  </div>
  </div>
</div>
  );
};

export default Services;
