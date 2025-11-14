import React from "react";

export default function MyDevices() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">My Devices</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Printer HP 2035</h2>
          <p className="text-sm text-gray-500 mt-2">Location: Office A1</p>
          <p className="text-sm text-gray-500">Status: Working</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Air Conditioner LG-A23</h2>
          <p className="text-sm text-gray-500 mt-2">Location: Room B3</p>
          <p className="text-sm text-gray-500">Status: Under Maintenance</p>
        </div>
      </div>
    </div>
  );
}
