import React, { useContext, useEffect, useState } from "react";
import PlantsCard from "./PlantsCard";
import { AuthContext } from "../Context/AuthContext";
import Loading from "./Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const PlantOfTheWeek = () => {
  const { setLoading } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      });
  }, []);

  const randomPlant = plants.sort((a, b) => b.rating - a.rating).slice(0, 4);

  if (!plants) return <Loading></Loading>;

  return (
    <motion.section
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
        className="text-2xl text-center md:text-4xl font-bold text-emerald-700 mb-4"
      >
        Plant of the Week
      </motion.h2>
      <motion.div
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
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
          {randomPlant.map((plant, i) => (
            <SwiperSlide key={plant.plantId}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <PlantsCard plant={plant}></PlantsCard>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default PlantOfTheWeek;
