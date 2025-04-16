"use client";
import React from "react";
import { Menu, X } from "lucide-react";

const MobileMenuToggle = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="text-green-700 hover:text-green-500 p-2 rounded md:hidden"
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
};

export default MobileMenuToggle;