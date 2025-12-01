import React, { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import MyContainer from "../Components/MyContainer";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const LogIn = () => {
  const {
    show,
    setUser,
    setShow,
    login,
    error,
    setError,
    googleLogin,
    changePassword,
    setLoading,
  } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

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

    login(email, password)
      .then((result) => {
        navigate(location.state ? location.state : "/");
        setLoading(false);
        setUser(result.user);
        console.log(result.user);
        toast.success("Login Successful");
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.code);
        console.log(e.code);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        navigate(location.state ? location.state : "/");
        setLoading(false);
        console.log(result.user);
        toast.success("Login Successful");
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.code);
        console.log(e.code);
      });
  };

  const emailRef = useRef(null);

  const handlePassword = () => {
    const email = emailRef.current.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      toast.error("Enter your email to reset password");
      return;
    } else if (!emailPattern.test(email)) {
      toast.error("Enter your valid email to reset password");
      return;
    }

    window.open("https://mail.google.com/", "_blank");

    changePassword(email)
      .then(() => {
        toast.success("Check your email to reset password");
      })
      .catch((e) => {
        console.log(e.code);
        toast.error(e.code);
      });
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600 overflow-hidden">
      <title>Login</title>
      <MyContainer className="md:px-20">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-5 lg:p-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, x: 0 }}
            className="max-w-lg text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-md md:text-lg text-white/80 leading-relaxed">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, y: 0 }}
            className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-5 md:p-8"
          >
            <form onSubmit={handleLogin} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center text-white">
                Login
              </h2>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  ref={emailRef}
                  required
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div className="relative">
                <label className="block text-sm mb-1">Password</label>
                <input
                  required
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute top-9 right-2.5 cursor-pointer z-1"
                >
                  {!show ? (
                    <IoEyeOff color="#000080" />
                  ) : (
                    <FaEye color="#000080" />
                  )}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-orange-800">{error}</p>
              </div>

              <button
                onClick={handlePassword}
                type="button"
                className="cursor-pointer hover:underline text-sm my-2.5"
              >
                Forget Password ?
              </button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="my-btn"
              >
                Login
              </motion.button>

              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-px w-30 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-30 bg-white/30"></div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleGoogle}
                type="button"
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 hover:text-white/75 transition-colors cursor-pointer"
              >
                <img
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </motion.button>

              <p className="text-center text-sm text-white/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  to={"/register"}
                  className="text-pink-300 hover:text-white underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </MyContainer>
    </div>
  );
};

export default LogIn;
