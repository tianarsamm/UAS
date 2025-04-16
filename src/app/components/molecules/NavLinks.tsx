import React from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-8 text-1xl font-bold text-black">
      <DropdownMenu />
      <Link href="#" className="hover:text-green-500 transition">About Us</Link>
      <Link href="#" className="hover:text-green-500 transition">Contact Us</Link>
    </div>
  );
};

export default NavLinks;