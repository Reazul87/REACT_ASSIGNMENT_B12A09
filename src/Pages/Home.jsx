import React from "react";
import PlantCare from "../Components/PlantCare";
import MyContainer from "../Components/MyContainer";
import { Link } from "react-router";
import MeetExperts from "../Components/MeetExperts";
import RatedPlants from "../Components/RatedPlants";
import PlantOfTheWeek from "../Components/PlantOfTheWeek";
import EcoDecorIdeas from "../Components/EcoDecorIdeas";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-[#DEDED1]">
      <div
        className="hero min-h-screen bg"
        style={{
          backgroundImage: "url(hero.jpg)",
        }}
      >
        <title>Home</title>
        <div className="hero-overlay"></div>
        <div className="hero-content text-pink-300">
          <div className="">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0.8, opacity: 0, x: 50 }}
              transition={{ duration: 0.4, scale: 1.05 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              className="mb-5 text-2xl md:text-5xl font-bold"
            >
              Bring Nature Indoors
            </motion.h1>
            <motion.p
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0.8, opacity: 0, x: 50 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 0.4, scale: 1.05, delay: 0.1 }}
              className="mb-5 font-medium"
            >
              Enhance your living space with plants
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, x: 50 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={"/plants"}
                className="btn btn-sm md:btn-md btn-secondary"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <MyContainer className="px-5 md:px-20">
        <RatedPlants></RatedPlants>
        <PlantOfTheWeek></PlantOfTheWeek>
        <PlantCare></PlantCare>
        <MeetExperts></MeetExperts>
        <EcoDecorIdeas></EcoDecorIdeas>
      </MyContainer>
    </div>
  );
};

export default Home;
