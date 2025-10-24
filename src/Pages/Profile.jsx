import React, { useContext } from "react";
import MyContainer from "../Components/MyContainer";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { auth } from "../Firebase/firebase.init";

const Profile = () => {
  const { profileUpdate, user, setUser, setError, error } =
    useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    const namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(displayName)) {
      setError("Please enter a valid name");
      return;
    } else setError("");

    profileUpdate(displayName, photoURL)
      .then(() => {
        toast.success("Profile updated!");
        setUser({
          ...auth.currentUser,
        });
      })
      .catch((e) => {
        toast.error(e.code);
        console.log(e.code);
      });
  };

  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-[#FFBBE1] via-[#16476A] to-[#3B9797] relative overflow-hidden">
      <title>Profile</title>
      <MyContainer className="px-2.5 md:px-20">
        <div className="relative z-10 flex flex-col items-center gap-10 p-5 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <div className="space-y-3.5">
              <img
                src={user?.photoURL || "/alt.png"}
                className="md:h-70 w-full shadow border border-slate-50"
              />
              <div className="space-y-2">
                <h1 className="font-bold drop-shadow-lg text-lg md:text-2xl">
                  Name : {user?.displayName || "Unknown User"}
                </h1>
                <p className="text-white/80 leading-relaxed font-medium text-sm md:text-lg">
                  Email : {user?.email}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-5 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-white">
              Update your profile
            </h2>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your profile name"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <p className="text-pink-200 font-medium pt-2 text-sm">
                  {error}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Photo
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo url here"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="ml-0.5">(Optional)</span>
                </label>
                <input
                  defaultValue={user.email}
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <button type="submit" className="my-btn">
                Update
              </button>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Profile;
