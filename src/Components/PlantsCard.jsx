import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const PlantsCard = ({ plant }) => {
  const { plantName, plantId, image, rating, price } = plant;

  return (
    <div className="card bg-base-300 shadow-sm">
      <figure>
        <img
          src={image}
          alt={plantName}
          className="h-[22.5rem] w-full object-cover p-5"
        />
      </figure>
      <div className="px-5 flex flex-col  gap-1.5 pb-5">
        <h2 className="font-medium md:text-lg text-sm">{plantName}</h2>
        <div className="flex justify-between font-medium">
          <p>{price} $</p>
          <p className="flex items-center gap-1.5">
            <FaStar color="orange" size={20} /> {rating}
          </p>
        </div>
        <Link
          to={`/plants-details/${plantId}`}
          className="btn btn-primary mt-1.5"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlantsCard;
