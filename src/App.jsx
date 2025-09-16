import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import StatsGrid from './Components/StatsGrid';
import InventoryOverview from './Components/InventoryOverview';
import RecentLeads from './Components/RecentLeads';
import QuickActions from './Components/QuickActions';


import { stats, inventoryItems, recentLeads, quickActions, sidebarItems } from './Data/dashboardata';


export default function App() {
const [searchQuery, setSearchQuery] = useState('');
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);


return (
<div className="min-h-screen bg-gray-50 flex">
<Sidebar sidebarCollapsed={sidebarCollapsed} sidebarItems={sidebarItems} />


<div className="flex-1 flex flex-col min-h-screen">
<Topbar
searchQuery={searchQuery}
setSearchQuery={setSearchQuery}
sidebarCollapsed={sidebarCollapsed}
setSidebarCollapsed={setSidebarCollapsed}
notifications={3}
/>


<div className="flex-1 p-6">
<div className="flex justify-between items-center mb-6">
<div>
<h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
<p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your travel business today.</p>
</div>
<div className="flex space-x-3">
<button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Download Report</button>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Add New Lead</button>
</div>
</div>


<StatsGrid stats={stats} />


<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
<InventoryOverview inventoryItems={inventoryItems} />
<RecentLeads recentLeads={recentLeads} />
</div>


<QuickActions quickActions={quickActions} />
</div>
</div>
</div>
);
}
