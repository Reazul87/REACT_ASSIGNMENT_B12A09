import React from "react";
import { Link } from "react-router";
import MyContainer from "./MyContainer";

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral p-8">
      <MyContainer>
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="flex flex-col">
            <p className="text-gray-400 font-bold text-lg mb-2">Company</p>
            <Link className="text-sm text-white/75">About us</Link>
            <Link className="text-sm text-white/75">Contact</Link>
            <Link className="text-sm text-white/75">Jobs</Link>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-400 font-bold text-lg mb-2">Legal</p>
            <Link className="text-sm text-white/75">Terms of use</Link>
            <Link className="text-sm text-white/75">Privacy policy</Link>
            <Link className="text-sm text-white/75">Cookie policy</Link>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-400 font-bold text-lg mb-2">Social</p>
            <Link className="text-sm text-white/75">Pinterest</Link>
            <Link className="text-sm text-white/75">Facebook</Link>
            <Link className="text-sm text-white/75">Instagram</Link>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-400 font-bold text-lg mb-2">Apps</p>
            <Link className="text-sm text-white/75">Mac</Link>
            <Link className="text-sm text-white/75">iPhone</Link>
            <Link className="text-sm text-white/75">Windows</Link>
          </div>
        </nav>
        <aside className="mt-5 px-4">
          <p className="text-center text-sm font-medium text-white/80">
            Copyright - © {new Date().getFullYear()} GreenNest. All rights
            reserved
          </p>
        </aside>
      </MyContainer>
    </div>
  );
};

export default Footer;

{
  /* Footer:

Quick Links: About, Contact, Privacy Policy

সোশ্যাল আইকন: Instagram, Facebook, Pinterest

“© 2025 GreenNest. All rights reserved.”

Navbar ও Footer সব রাউটে দৃশ্যমান থাকবে। রাউট পরিবর্তনে কোনো ক্র্যাশ বা রিলোড হবে না। */
}
