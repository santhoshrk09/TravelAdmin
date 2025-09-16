import React from 'react';

export default function RecentLeads({ recentLeads = [] }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-gray-900">Recent Leads</h2>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
      </div>

      <p className="text-sm text-gray-600 mb-6">Latest inquiries and their status</p>
      <div className="space-y-4">
        {recentLeads.map((lead) => (
          <React.Fragment key={lead.id}>
            <div className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-gray-900">{lead.name}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${lead.statusColor}`}>{lead.status}</span>
                  </div>
                  <p className="text-sm text-gray-600">{lead.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{lead.amount}</p>
                <button className="text-blue-600 hover:text-blue-700 text-xs">View Details</button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}