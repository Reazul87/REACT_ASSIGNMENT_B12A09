import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  // REGISTER
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // LOGIN
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // LOGOUT
  const logout = () => {
    return signOut(auth);
  };
  //GOOGLE
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // FORGET PASSWORD
  const changePassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // UPDATE PROFILE
  const profileUpdate = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  // REMEMBER USER
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const shared = {
    user,
    error,
    login,
    show,
    logout,
    setUser,
    loading,
    setError,
    setShow,
    setLoading,
    registerUser,
    googleLogin,
    profileUpdate,
    changePassword,
  };
  return <AuthContext.Provider value={shared}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
