"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../atoms/Logo";
import NavLinks from "../molecules/NavLinks";
import AuthButtons from "../molecules/AuthButtons";
import MobileMenuToggle from "../molecules/MobileMenuToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-100 w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <NavLinks />
        <AuthButtons />
        <MobileMenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-black font-semibold">
          <Link href="#" className="block hover:text-green-500">Services</Link>
          <Link href="#" className="block hover:text-green-500">About Us</Link>
          <Link href="#" className="block hover:text-green-500">Contact Us</Link>
          <Link href="#" className="block border border-green-500 text-green-700 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition">Login</Link>
          <Link href="#" className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
