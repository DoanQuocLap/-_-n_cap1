import React from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function TicketDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex items-center gap-3 mb-6">
        <a href="/tickets" className="text-blue-600 hover:underline flex items-center gap-2">
          <FaArrowLeft /> Back to My Tickets
        </a>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Ticket #{id}</h1>
        <p><strong>Subject:</strong> Air Conditioner not cooling</p>
        <p><strong>Device:</strong> AC Unit LG-A23</p>
        <p><strong>Priority:</strong> High</p>
        <p><strong>Status:</strong> In Progress</p>
        <p><strong>Assigned Technician:</strong> Nguyen Van B</p>
        <p><strong>Last Updated:</strong> 2025-11-08</p>

        <div className="mt-6">
          <h2 className="font-semibold text-gray-700 mb-2">Description</h2>
          <p className="text-gray-600">The air conditioner is blowing warm air instead of cooling. Possible issue with the compressor or refrigerant levels.</p>
        </div>

        <div className="mt-8">
          <h2 className="font-semibold text-gray-700 mb-2">Update History</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📅 2025-11-08 — Technician accepted the task.</li>
            <li>🛠️ 2025-11-09 — Replaced compressor, testing in progress.</li>
            <li>✅ 2025-11-10 — Ticket completed successfully.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
