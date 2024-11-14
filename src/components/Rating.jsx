import React from "react";
import { FaRegStar, FaRegStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { ReactStars } from 'react-rating-stars-component';

const RatingComponent = ({ ratig }) => {
  return (
    <div>

<Rating
      initialRating={ratig}
      emptySymbol={<FaRegStarHalf />}
      fullSymbol={<FaRegStar />}
      readonly
      >
</Rating>
    </div>
  );
};

export default RatingComponent;