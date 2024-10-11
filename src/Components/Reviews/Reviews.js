import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../images/b1.jpg";
import img2 from "../../images/b2.jpg";
import img3 from "../../images/b3.jpg";
import img4 from "../../images/b4.jpeg";
import img5 from "../../images/b5.jpeg";
import "./Reviews.css";

const reviewsData = [
  {
    name: "Umar",
    img: img1,
    rating: 6,
    review: "Great shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots.",
  },
  {
    name: "Brian",
    img: img2,
    rating: 6,
    review: "Great shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots.",
  },
  {
    name: "Alexa",
    img: img4,
    rating: 6,
    review: "Great shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots.",
  },
  {
    name: "Ibrahim",
    img: img3,
    rating: 6,
    review: "Great shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots.",
  },
  {
    name: "Fatima",
    img: img5,
    rating: 6,
    review: "Great shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots.",
  },
  {
    name: "Denny",
    img: img1,
    rating: 6,
    review: "Great shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots.",
  },
  {
    name: "Umar",
    img: img1,
    rating: 6,
    review: "Great shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots.",
  },
  {
    name: "Brian",
    img: img2,
    rating: 6,
    review: "Great shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots.",
  },
  {
    name: "Alexa",
    img: img4,
    rating: 6,
    review: "Great shoes also became fashion items. Some shoes are worn as safety equipment, such as steel-toe boots.",
  },
];

const Reviews = () => {
  return (
    <div className="mt-12" id="reviews">
      <h1 className="text-5xl text-black  text-center font-bold pt-14">
        Customer's{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#5a1e63] to-[#b636c9]">
          Review
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 item-center justify-center px-[57px] mt-24">
        {reviewsData.map((review, index) => (
          <div
            key={index}
            className="mainBox flex flex-col bg-gray-200 w-auto px-6 py-3 rounded-md shadow-xl shadow-gray-600"
          >
            <div className="flex">
              <div className="pImg w-[50px] h-[50px] rounded-full truncate">
                <img
                  src={review.img}
                  className="object-cover object-center transition duration-3s"
                  alt={`${review.name}'s review`}
                />
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-bold">{review.name}</h2>
                <span className="text-yellow-600">
                  {[...Array(review.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
