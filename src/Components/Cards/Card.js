import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShare,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../../images/shoes.png";
import img2 from "../../images/shoes1.png";
import img3 from "../../images/shoes2.png";
import img4 from "../../images/shoes3.png";
import img5 from "../../images/shoes4.png";
import img6 from "../../images/shoes5.png";
import "./Card.css";

const products = [
  { id: 1, name: 'Shoes 1', price: 20000, img: img1, rating: 5 },
  { id: 2, name: 'Shoes 2', price: 19500, img: img2, rating: 5 },
  { id: 3, name: 'Shoes 3', price: 18900, img: img3, rating: 4.5 },
  { id: 4, name: 'Shoes 4', price: 17999, img: img4, rating: 4.5 },
  { id: 5, name: 'Shoes 5', price: 17850, img: img5, rating: 5 },
  { id: 6, name: 'Shoes 6', price: 16777, img: img6, rating: 4.5 },
  { id: 1, name: 'Shoes 1', price: 20000, img: img1, rating: 5 },
  { id: 2, name: 'Shoes 2', price: 19500, img: img2, rating: 5 },
  { id: 3, name: 'Shoes 3', price: 18900, img: img3, rating: 4.5 },
];

const Card = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="mt-12 mb-24" id="products">
      <h1 className="text-5xl text-black text-center font-bold pt-14">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#5a1e63] to-[#b636c9]">Products</span>
      </h1>
      <div className="flex item-center justify-center px-14 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 mt-28">
          {products.map((product) => (
            <div key={product.id} className="mainBox w-auto h-auto shadow-xl shadow-blue-400 bg-[#E6E6FA] py-8 px-3">
              <div className="small_card flex flex-col absolute transition duration-150 opacity-0 -ml-4">
                <FontAwesomeIcon icon={faHeart} className="boxIcon mb-2" />
                <FontAwesomeIcon icon={faShare} className="boxIcon" />
              </div>
              <div className="flex item-center justify-center mx-auto w-auto transition duration-150 ml-6">
                <img src={product.img} className="item-center w-[120px]" alt={product.name} />
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
                <p className="mt-3 text-[18px] leading-tight">
                  Shoe is an item of footwear intended to protect and comfort the
                  human foot. Though the human foot can adapt to varied terrains.
                </p>
                <h3 className="text-[20px] font-bold mt-4">PKR {product.price}</h3>
                <div className="text-yellow-600 text-[20px] mt-2 mb-5">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                  {product.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfStroke} />}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="px-3 py-2 bg-gradient-to-r from-[#c72092] to-blue-300"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
