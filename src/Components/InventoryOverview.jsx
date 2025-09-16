import React from 'react';

export default function InventoryOverview({ inventoryItems = [] }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Inventory Overview</h2>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-6">Your travel inventory at a glance</p>
      <div className="space-y-4">
        {inventoryItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}