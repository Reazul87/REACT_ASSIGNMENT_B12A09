import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import PlantsCard from "../Components/PlantsCard";
import MyContainer from "../Components/MyContainer";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";

const Plants = () => {
  const { loading } = useContext(AuthContext);
  const plants = useLoaderData();

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-[#F5F5F0]">
      <MyContainer className="px-5 md:px-20">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <title>Plants</title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:py-5 py-5">
            {plants.map((plant, i) => (
              <motion.div
                key={plant.plantId}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
              >
                <PlantsCard plant={plant}></PlantsCard>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </MyContainer>
    </div>
  );
};

export default Plants;
