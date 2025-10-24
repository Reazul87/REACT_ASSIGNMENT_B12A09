import React, { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import MyContainer from "../Components/MyContainer";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";

const PlantsDetails = () => {
  const { error, setError, loading } = useContext(AuthContext);
  const plants = useLoaderData();
  const { id } = useParams();

  const plant = plants.find((p) => p.plantId == id);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!plant) {
    return (
      <MyContainer>
        <div className="text-center text-lg text-red-500 font-semibold py-20">
          Plant not found!
        </div>
      </MyContainer>
    );
  }

  const {
    plantId,
    availableStock,
    careLevel,
    category,
    description,
    image,
    plantName,
    price,
    providerName,
    rating,
  } = plant;

  const handleBook = (e) => {
    e.preventDefault();
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const name = e.target.name.value;
    const email = e.target.email.value;

    if (!namePattern.test(name)) {
      setError("Please enter a valid name");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    toast.success("Booking Successful!");
    e.target.reset();
  };

  return (
    <div className="bg-[#B4DEBD]">
      <MyContainer className="px-5 py-8 md:px-20">
        <title>Plant Details</title>
        <div className="w-full p-6 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-100 rounded-2xl shadow-md bg-base-100">
          <motion.figure
            transition={{ duration: 0.6, x: 0 }}
            initial={{ scale: 0.8, opacity: 0, x: -200 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
          >
            <img
              src={image}
              alt={plantName}
              className="w-full h-[65vh] object-cover object-center rounded-xl"
            />
          </motion.figure>

          <motion.div
            transition={{ duration: 0.6, x: 0 }}
            initial={{ scale: 0.8, opacity: 0, x: 200 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="space-y-3 text-base md:text-lg">
              <div className="flex justify-between">
                <p>
                  <span className="font-semibold">Plant :</span> {plantName}
                </p>
                <p>
                  <span className="font-semibold">ID :</span> {plantId}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-semibold">
                  Care :
                  <span className="badge badge-ghost badge-md">
                    {careLevel}
                  </span>
                </p>
                <p className="font-semibold">
                  Category :
                  <span className="badge badge-ghost badge-md">{category}</span>
                </p>
              </div>

              <div className="flex flex-wrap justify-between gap-3">
                <p>
                  <span className="font-semibold">Provider:</span>{" "}
                  {providerName}
                </p>
                <p className="flex items-center gap-1.5">
                  <FaStar className="text-yellow-500" />
                  <span className="font-medium">{rating}</span>
                </p>
              </div>

              <div className="flex justify-between">
                <p>
                  <span className="font-semibold">Price:</span> ${price}
                </p>
                <p>
                  <span className="font-semibold">Stock:</span> {availableStock}
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-lg text-black mb-1">
                Description
              </p>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            <Link
              to="/plants"
              className="btn btn-accent w-fit rounded-lg text-white hover:bg-green-700 transition-all"
            >
              Go Back
            </Link>
          </motion.div>
        </div>

        <motion.div
          transition={{ duration: 0.6, y: 0 }}
          initial={{ scale: 0.8, opacity: 0, y: 200 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          className="flex justify-center mt-10 mb-7"
        >
          <form
            onSubmit={handleBook}
            className="flex flex-col gap-4 w-full max-w-md p-6 rounded-xl bg-base-200 shadow-md border border-gray-100"
          >
            <h2 className="text-center text-xl font-semibold text-green-800 mb-1">
              Book Consultation
            </h2>

            <input
              required
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="btn bg-green-700 text-white hover:bg-green-800 transition-all"
            >
              Book Now
            </button>

            {error && (
              <p className="text-sm text-red-500 font-medium text-center">
                {error}
              </p>
            )}
          </form>
        </motion.div>
      </MyContainer>
    </div>
  );
};

export default PlantsDetails;
