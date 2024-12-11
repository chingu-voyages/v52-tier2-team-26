// import { useRef, useState } from "react";
import reviews from "../data/reviews";

const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <div className="reviews-container">
        {reviews.map((item) => (
          <div key={item.id} className="reviews-info">
            <div className="reviews-img-div">
              <img className="reviews-img" src={item.imgURL} alt="Avatar of reviewer"/>
            </div>
            <div className="reviews-content-div">
              <p className="reviews-desc">"{item.desc}"</p>
              <p className="reviews-name">{item.name}</p>
              <p className="reviews-job">{item.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
