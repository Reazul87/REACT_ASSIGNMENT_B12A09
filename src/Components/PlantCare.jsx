import { motion } from "framer-motion";
import React from "react";

const PlantCare = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="my-5"
    >
      <motion.h4
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl md:text-4xl font-bold text-emerald-700 "
      >
        Plant Care Tips
      </motion.h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2.5 flex-row items-center card-body p-2.5 border border-gray-50 shadow"
        >
          <img
            src="https://img.icons8.com/3d-fluency/94/garden.png"
            alt="garden"
            className="h-15 w-15"
          />
          <div className="">
            <h2 className="font-bold text-lg">Watering</h2>
            <p className="text-black/70">
              Water plants when the top inch or so of soil is dry
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2.5 flex-row items-center card-body p-2.5 border border-gray-50 shadow"
        >
          <img
            src="https://img.icons8.com/pulsar-gradient/48/sun.png"
            alt="sun"
            className="h-15 w-15"
          />
          <div className="">
            <h2 className="font-bold text-lg">Sunlight</h2>
            <p className="text-black/70">
              Most indoor plants thrive in bright, indirect light
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2.5 flex-row items-center card-body p-2.5 border border-gray-50 shadow"
        >
          <img
            src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-fertilizer-farming-and-agriculture-wanicon-lineal-color-wanicon.png"
            alt="external-fertilizer-farming-and-agriculture-wanicon-lineal-color-wanicon"
            className="h-15 w-15"
          />
          <div className="">
            <h2 className="font-bold text-lg">Fertilizing</h2>
            <p className="text-black/70">
              Feed plants with balanced, water-soluble fertilizer
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PlantCare;
