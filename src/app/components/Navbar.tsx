"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-green-100 w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          Design<span className="text-orange-600">AGENCY</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-1xl font-bold text-black">
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-green-500 transition duration-300 ease-in-out"
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            >
              Services <ChevronDown size={16} />
            </button>
            {showDropdown && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg border rounded w-40 z-10">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Web Design</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Branding</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Marketing</Link>
                </li>
              </ul>
            )}
          </div>
          <Link href="#" className="hover:text-green-500 transition">About Us</Link>
          <Link href="#" className="hover:text-green-500 transition">Contact Us</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#"
            className="font-bold border border-green-500 text-green-700 px-4 py-1.5 rounded hover:bg-green-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="#"
            className="font-bold bg-green-500 text-white px-4 py-1.5 rounded hover:bg-green-600 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-700 hover:text-green-500 p-2 rounded"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
