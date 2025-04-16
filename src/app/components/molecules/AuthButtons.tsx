import React from "react";
import Link from "next/link";

const AuthButtons = () => {
  return (
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
  );
};
export default AuthButtons;