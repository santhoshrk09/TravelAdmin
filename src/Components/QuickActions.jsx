import React from 'react';


export default function QuickActions({ quickActions = [] }) {
return (
<div className="bg-white rounded-lg p-6 border border-gray-200">
<h2 className="text-lg font-semibold text-gray-900 mb-2">Quick Actions</h2>
<p className="text-sm text-gray-600 mb-6">Common tasks and shortcuts</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
{quickActions.map((action) => (
<button key={action.id} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors group">
<action.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 mb-2" />
<span className="text-sm font-medium text-gray-900">{action.title}</span>
</button>
))}
</div>
</div>
);
}