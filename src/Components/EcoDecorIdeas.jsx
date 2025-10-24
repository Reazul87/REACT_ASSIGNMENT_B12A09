import { motion } from "framer-motion";
import React from "react";
import { FaLeaf, FaHome, FaSun, FaWater } from "react-icons/fa";

const EcoDecorIdeas = () => {
  const ideas = [
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      title: "Mini Jungle Corner",
      text: "Transform a small corner of your room into a green sanctuary using ferns and ivy plants.",
    },
    {
      icon: <FaHome className="text-emerald-500 text-3xl" />,
      title: "Green Wall Décor",
      text: "Hang small potted plants or vertical gardens to bring life to empty walls.",
    },
    {
      icon: <FaSun className="text-yellow-400 text-3xl" />,
      title: "Sunlight Spaces",
      text: "Use bright, indirect sunlight for indoor plants like snake plants or aloe vera.",
    },
    {
      icon: <FaWater className="text-sky-400 text-3xl" />,
      title: "Water Harmony",
      text: "Add a small tabletop fountain surrounded by plants for natural humidification.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="pt-5 pb-7"
    >
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold text-center text-green-700 mb-5"
      >
        Eco Decor Ideas for Your Home
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ideas.map((idea, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 text-center"
          >
            <div className="flex justify-center mb-4">{idea.icon}</div>
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              {idea.title}
            </h3>
            <p className="text-black/67">{idea.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EcoDecorIdeas;
