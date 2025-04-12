"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-green-100 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          Design<span className="text-orange-600">AGENCY</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-1xl font-bold text-black ">
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-green-500 transition duration-300 else-in-out"
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
          <Link className="hover:text-green-500 transition duration-300 else-in-out"href="#">About Us</Link>
          <Link className="hover:text-green-500 transition duration-300 else-in-out"href="#">Contact Us</Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#"
            className="font-bold border border-green-500 text-green-700 px-4 py-1.5 rounded hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
          >
            Login
          </Link>
          <Link
            href="#"
            className="font-bold bg-green-500 text-white px-4 py-1.5 rounded hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
