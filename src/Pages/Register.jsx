import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import MyContainer from "../Components/MyContainer";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";

const Register = () => {
  const {
    error,
    show,
    logout,
    setUser,
    loading,
    setError,
    setShow,
    setLoading,
    registerUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ email, password });

    if (loading) {
      return <Loading></Loading>;
    }

    const lowerCase = /[a-z]/;
    const upperCase = /[A-Z]/;
    const number = /[0-9]/;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    } else if (!lowerCase.test(password)) {
      setError("Password must have at least one lowercase letter");
      return;
    } else if (!upperCase.test(password)) {
      setError("Password must have at least one uppercase letter");
      return;
    } else if (!number.test(password)) {
      setError("Password must have at least one number");
      return;
    } else setError("");

    registerUser(email, password)
      .then((result) => {
        setLoading(false);
        console.log(result.user);

        // Log Out
        logout().then(() => {
          setLoading(false);
          setUser(null);
          navigate("/login");
        });
        e.target.reset();
        toast.success("Registration Successful");
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.code);
        if (e.code == "auth/email-already-in-use") {
          toast.error("Already have an account , provide new email");
          return;
        }
      });
  };

  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 relative overflow-hidden">
      <title>Register</title>

      <MyContainer className="md:px-20">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-5 lg:p-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, x: 0 }}
            className="max-w-lg text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-md md:text-lg text-white/80 leading-relaxed px-2.5">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, x: 0 }}
            className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-5 md:p-8"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-white">
              Sign Up
            </h2>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your profile name"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Photo
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo url here"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  required
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-9 cursor-pointer z-50"
                >
                  {!show ? (
                    <IoEyeOff color="#000080" />
                  ) : (
                    <FaEye color="#000080" />
                  )}
                </span>
              </div>
              <div className="">
                <p className="text-sm font-medium text-orange-800">{error}</p>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="my-btn"
              >
                Register
              </motion.button>

              <div className="text-center mt-3">
                <p className="text-sm text-white/80">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-pink-300 hover:text-white font-medium underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Register;
