// src/Components/Sidebar.jsx
import React from "react";

export default function Sidebar({ sidebarCollapsed = false, sidebarItems = [] }) {
  return (
    <aside
     
      className={`bg-white border-r border-gray-200 transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'} flex-shrink-0 sticky top-0 h-screen`}
      aria-hidden={false}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          {!sidebarCollapsed && (
            <div>
              <div className="font-bold text-gray-900">WanderCraft</div>
              <div className="text-xs text-gray-500">Travel Solutions</div>
            </div>
          )}
        </div>
      </div>

    
      <nav className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-64px)]">
        {sidebarItems.map((section, sectionIdx) => (
          <div key={sectionIdx}>
            {!sidebarCollapsed && (
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {section.category}
              </h3>
            )}
            <div className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    item.active ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {!sidebarCollapsed && <span>{item.name}</span>}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
