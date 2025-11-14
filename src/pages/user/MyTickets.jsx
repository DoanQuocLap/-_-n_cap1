import React from "react";
import { FaHome, FaTicketAlt, FaLaptop, FaPlusCircle, FaCog, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MyTickets() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">My Tickets</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search ticket..."
                className="border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Filter Section */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400">
            <option>Status: All</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400">
            <option>Priority: All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400">
            <option>Device: All</option>
            <option>Printer</option>
            <option>Air Conditioner</option>
            <option>Computer</option>
          </select>
        </div>

        {/* Ticket Table */}
        <section>
          <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
            <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
              <tr>
                <th className="py-3 px-4 text-left">Ticket ID</th>
                <th className="py-3 px-4 text-left">Subject</th>
                <th className="py-3 px-4 text-left">Device</th>
                <th className="py-3 px-4 text-left">Priority</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Last Updated</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4">#1050</td>
                <td className="py-3 px-4">Air Conditioner not cooling</td>
                <td className="py-3 px-4">AC Unit</td>
                <td className="py-3 px-4 text-red-600 font-medium">High</td>
                <td className="py-3 px-4 text-yellow-600">In Progress</td>
                <td className="py-3 px-4">2025-11-08</td>
                <td className="py-3 px-4">
                  <Link to="/tickets/1050" className="text-blue-600 hover:underline text-sm">
                    View
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4">#1049</td>
                <td className="py-3 px-4">Printer offline</td>
                <td className="py-3 px-4">Printer HP 2035</td>
                <td className="py-3 px-4 text-yellow-600 font-medium">Medium</td>
                <td className="py-3 px-4 text-green-600">Completed</td>
                <td className="py-3 px-4">2025-11-07</td>
                <td className="py-3 px-4">
                  <Link to="/tickets/1049" className="text-blue-600 hover:underline text-sm">
                    View
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4">#1048</td>
                <td className="py-3 px-4">Wi-Fi not connecting</td>
                <td className="py-3 px-4">Router TP-Link</td>
                <td className="py-3 px-4 text-green-600 font-medium">Low</td>
                <td className="py-3 px-4 text-blue-600">Open</td>
                <td className="py-3 px-4">2025-11-06</td>
                <td className="py-3 px-4">
                  <Link to="/tickets/1048" className="text-blue-600 hover:underline text-sm">
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
