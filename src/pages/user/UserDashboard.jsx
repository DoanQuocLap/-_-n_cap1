import React from "react";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
        <Link
          to="/tickets"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow"
        >
          View All Tickets
        </Link>
      </div>


      {/* Overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-gray-500 text-sm">Active Tickets</h2>
          <p className="text-3xl font-semibold text-blue-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-gray-500 text-sm">Completed</h2>
          <p className="text-3xl font-semibold text-green-600 mt-2">45</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-gray-500 text-sm">Pending</h2>
          <p className="text-3xl font-semibold text-yellow-500 mt-2">8</p>
        </div>
      </div>

      {/* Recent tickets preview */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Tickets
        </h2>
        <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
            <tr>
              <th className="py-3 px-4 text-left">Ticket ID</th>
              <th className="py-3 px-4 text-left">Subject</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4">#1023</td>
              <td className="py-3 px-4">Air Conditioner Issue</td>
              <td className="py-3 px-4 text-yellow-600">In Progress</td>
              <td className="py-3 px-4">2025-11-06</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4">#1022</td>
              <td className="py-3 px-4">Printer Not Working</td>
              <td className="py-3 px-4 text-green-600">Completed</td>
              <td className="py-3 px-4">2025-11-05</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4">#1021</td>
              <td className="py-3 px-4">Network Connectivity</td>
              <td className="py-3 px-4 text-blue-600">Open</td>
              <td className="py-3 px-4">2025-11-03</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
