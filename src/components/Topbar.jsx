import React from "react";
import { FaBell } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="flex justify-end items-center gap-4 mb-6 pr-6">
      <button className="relative text-gray-600 hover:text-gray-900">
        <FaBell size={20} />
        <span className="absolute -top-1 -right-2 bg-red-500 text-xs text-white rounded-full px-1.5">
          3
        </span>
      </button>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="User Avatar"
        className="w-8 h-8 rounded-full border border-gray-300"
      />
    </div>
  );
};

export default Topbar;
