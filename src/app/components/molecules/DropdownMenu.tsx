"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const DropdownMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
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
  );
};

export default DropdownMenu;