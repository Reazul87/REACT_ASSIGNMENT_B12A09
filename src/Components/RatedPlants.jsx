import React, { useContext } from "react";
import PlantsCard from "./PlantsCard";
import { AuthContext } from "../Context/AuthContext";
import Loading from "./Loading";
import { useLoaderData } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const RatedPlants = () => {
  const { loading } = useContext(AuthContext);
  const plants = useLoaderData();
  const topPlant = [...plants].sort((a, b) => b.rating - a.rating).slice(0, 6);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <motion.section
      className="my-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, scale: 1.05 }}
        whileHover={{ scale: 1.05 }}
        className="text-2xl md:text-4xl font-bold text-center text-emerald-700 mb-5"
      >
        Top Rated Indoor Plants
      </motion.h2>
      <motion.div
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pb-2"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {topPlant.map((plant) => (
            <SwiperSlide key={plant.plantId}>
              <PlantsCard plant={plant}></PlantsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default RatedPlants;
