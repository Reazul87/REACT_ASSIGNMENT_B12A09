import { motion } from "framer-motion";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const PlantsCard = ({ plant }) => {
  const { plantName, plantId, image, rating, price } = plant;
  motion;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="card bg-base-300 shadow-sm"
    >
      <figure>
        <img
          src={image}
          alt={plantName}
          className="h-[22.5rem] w-full object-cover p-5"
        />
      </figure>
      <div className="px-5 flex flex-col  gap-1.5 pb-5">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="font-medium md:text-lg text-sm"
        >
          {plantName}
        </motion.h2>
        <div className="flex justify-between font-medium">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {price} $
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1.5"
          >
            <FaStar color="orange" size={20} /> {rating}
          </motion.p>
        </div>
        <Link
          to={`/plants-details/${plantId}`}
          className="btn btn-primary mt-1.5"
        >
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            View Details
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default PlantsCard;
