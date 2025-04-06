import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  LineChart, 
  Trees, 
  AlertTriangle, 
  Users, 
  Settings,
  Info
} from 'lucide-react';

const menuItems = [
  { 
    icon: <LayoutDashboard size={20} />, 
    label: 'Dashboard',
    path: '/',
    description: 'Overview of city metrics and insights'
  },
  { 
    icon: <LineChart size={20} />, 
    label: 'Environmental Analytics',
    path: '/analytics',
    description: 'Detailed environmental data analysis'
  },
  { 
    icon: <Trees size={20} />, 
    label: 'Green Space Optimizer',
    path: '/green-space',
    description: 'AI-powered green space management'
  },
  { 
    icon: <AlertTriangle size={20} />, 
    label: 'Disaster Alerts',
    path: '/alerts',
    description: 'Real-time emergency notifications'
  },
  { 
    icon: <Users size={20} />, 
    label: 'Citizen Reports',
    path: '/reports',
    description: 'Community feedback and reports'
  },
  { 
    icon: <Settings size={20} />, 
    label: 'Settings',
    path: '/settings',
    description: 'System preferences and configuration'
  },
  { 
    icon: <Info size={20} />, 
    label: 'About',
    path: '/about',
    description: 'Learn more about SmartResilience'
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg h-screen fixed left-0 border-r border-gray-200 dark:border-gray-700 p-4" style={{ zIndex: 40 }}>
      <div className="flex items-center gap-2 mb-8 px-2 group">
        <Trees className="text-emerald-600 dark:text-emerald-500 group-hover:animate-pulse" size={24} />
        <h1 className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent">
          SmartResilience
        </h1>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`w-full flex flex-col items-start gap-1 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300
              hover:bg-gradient-to-r hover:from-emerald-50 hover:to-sky-50 dark:hover:from-emerald-900/20 dark:hover:to-sky-900/20
              hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200
              ${location.pathname === item.path ? 'bg-gradient-to-r from-emerald-50 to-sky-50 dark:from-emerald-900/20 dark:to-sky-900/20 text-emerald-600 dark:text-emerald-400' : ''}`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 pl-8">{item.description}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}