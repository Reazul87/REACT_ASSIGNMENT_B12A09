import { motion } from "framer-motion";
import React from "react";

const MeetExperts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="font-bold text-2xl text-center md:text-4xl text-emerald-700 "
      >
        Meet Our Green Experts
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, scale: 1.05 }}
          className="card-body shadow border border-gray-50"
        >
          <img
            src="https://cdn.bdnews24.com/bdnews24/media/bdnews24-english/import/media/2021/11/20/atiq-rahman-201121-01.jpg"
            alt="Dr. Atiq Rahman"
            className="h-50 w-80 object-cover rounded-4xl"
          />
          <div className="space-y-2.5">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9, x: 25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, scale: 1, x: 0, delay: 0.2 }}
              className="font-bold text-xl"
            >
              Dr. Atiq Rahman
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.9, x: 25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, scale: 1, x: 0 }}
              className="text-black/70"
            >
              Climate Change, Sustainable Development, Environmental Management
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, scale: 1.05 }}
          className="card-body shadow border border-gray-50"
        >
          <img
            src="https://pulitzercenter.org/sites/default/files/styles/768x600/public/2022-05/Syeda_Rizwana_Hasan.jpg.webp?itok=YQJkVuV9"
            alt="Barrister Rizwana Hasan"
            className="h-50 w-80 object-cover rounded-4xl"
          />
          <div className="space-y-2.5">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9, x: 25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, scale: 1, x: 0, delay: 0.2 }}
              className="font-bold text-xl"
            >
              Barrister Rizwana Hasan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.9, x: 25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, scale: 1, x: 0 }}
              className="text-black/70"
            >
              Environmental Law, Environmental Justice, Advocacy
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, scale: 1.05 }}
          className="card-body shadow border border-gray-50"
        >
          <img
            src="https://ibtbd.net/wp-content/uploads/2017/08/Qazi-Kholiquzzaman-Ahmad_9146.jpg"
            alt="Dr. Qazi Kholiquzzaman Ahmad"
            className="h-50 w-80 object-cover rounded-4xl"
          />
          <div className="space-y-2.5">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9, x: 25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, scale: 1, x: 0, delay: 0.2 }}
              className="font-bold text-xl"
            >
              Dr. Qazi Kholiquzzaman Ahmad
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.9, x: 25 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, scale: 1, x: 0 }}
              className="text-black/70"
            >
              Climate Change, Economics, Sustainable Development
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MeetExperts;
