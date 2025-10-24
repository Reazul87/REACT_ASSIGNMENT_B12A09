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
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-2xl md:text-5xl font-bold"
            >
              Bring Nature Indoors
            </motion.h1>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-5 font-medium"
            >
              Enhance your living space with plants
            </motion.p>
            <Link to={"/plants"} className="btn btn-sm md:btn-md btn-secondary">
              Shop Now
            </Link>
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
