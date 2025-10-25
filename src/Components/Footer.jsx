import React from "react";
import { Link } from "react-router";
import MyContainer from "./MyContainer";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-[#16476A] text-neutral p-8">
      <MyContainer className="px-5 md:px-20">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          <div className="flex flex-col">
            <p className="text-white/75 font-bold text-lg mb-2">Company</p>
            <Link className="text-sm text-white/75">About us</Link>
            <Link className="text-sm text-white/75">Contact</Link>
            <Link className="text-sm text-white/75">Jobs</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-white/75 font-bold text-lg mb-2">Legal</p>
            <Link className="text-sm text-white/75">Terms of use</Link>
            <Link className="text-sm text-white/75">Privacy policy</Link>
            <Link className="text-sm text-white/75">Cookie policy</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-white/75 font-bold text-lg mb-2">Social</p>
            <Link className="text-sm text-white/75">Pinterest</Link>
            <Link className="text-sm text-white/75">Facebook</Link>
            <Link className="text-sm text-white/75">Instagram</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-white/75 font-bold text-lg mb-2">Apps</p>
            <Link className="text-sm text-white/75">Mac</Link>
            <Link className="text-sm text-white/75">iPhone</Link>
            <Link className="text-sm text-white/75">Windows</Link>
          </div>
        </motion.nav>
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-5 px-3"
        >
          <p className="text-center text-sm font-medium text-white/80">
            Copyright - © {new Date().getFullYear()} GreenNest. All rights
            reserved
          </p>
        </motion.aside>
      </MyContainer>
    </div>
  );
};
export default Footer;
