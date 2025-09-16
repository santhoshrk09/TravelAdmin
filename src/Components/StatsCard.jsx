import React from 'react';


export default function StatsCard({ stat }) {
const Icon = stat.icon;
return (
<div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className={`p-3 rounded-lg ${stat.bgColor}`}>
<Icon className={`w-6 h-6 ${stat.color}`} />
</div>
</div>
<div>
<p className="text-sm text-gray-600 mb-1">{stat.title}</p>
<p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
<p className="text-xs text-green-600">{stat.change}</p>
</div>
</div>
);
}