import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
