import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTicketAlt, FaTools, FaBell, FaCog, FaLaptop } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen bg-[#0f172a] text-white w-64 fixed flex flex-col">
      {/* Logo */}
      <div className="text-2xl font-bold px-6 py-4 border-b border-gray-700">
        MaintainPro
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4">
        <ul>
          <li className="px-6 py-3 hover:bg-[#1e293b]">
            <Link to="/dashboard" className="flex items-center gap-3">
              <FaHome /> Dashboard
            </Link>
          </li>
          <li className="px-6 py-3 hover:bg-[#1e293b]">
            <Link to="/tickets" className="flex items-center gap-3">
              <FaTicketAlt /> My Tickets
            </Link>
          </li>
          <li className="px-6 py-3 hover:bg-[#1e293b]">
            <Link to="/submit-ticket" className="flex items-center gap-3">
              <FaTools /> Submit Ticket
            </Link>
          </li>
          <li className="px-6 py-3 hover:bg-[#1e293b]">
            <Link to="/devices" className="flex items-center gap-3">
              <FaLaptop /> My Devices
            </Link>
          </li>
          
          <li className="px-6 py-3 hover:bg-[#1e293b]">
            <Link to="/settings" className="flex items-center gap-3">
              <FaCog /> Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="text-center py-4 text-sm text-gray-400">
        © 2025 MaintainPro
      </div>
    </div>
  );
};

export default Sidebar;
