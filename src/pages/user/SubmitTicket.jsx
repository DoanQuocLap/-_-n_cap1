import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitTicket() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Submit New Ticket</h1>

      <form className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 max-w-2xl">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Device</label>
          <input type="text" placeholder="e.g., Printer HP 2035" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Subject</label>
          <input type="text" placeholder="Short summary of the issue" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea rows="4" placeholder="Describe the problem in detail" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Priority</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button type="submit" className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          <FaPaperPlane /> Submit Ticket
        </button>
      </form>
    </div>
  );
}
