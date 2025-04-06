import React, { useState } from 'react';
import { Bell, Sun, Moon, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CountrySelector } from './CountrySelector';
import type { Country } from '../types';

interface HeaderProps {
  selectedCountry: Country;
  onSelectCountry: (country: Country) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Header({ selectedCountry, onSelectCountry, isDark, onThemeToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 left-64 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 h-16 flex items-center justify-between px-6" style={{ zIndex: 45 }}>
      <div className="flex items-center gap-4">
        <CountrySelector selectedCountry={selectedCountry} onSelect={onSelectCountry} />
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={onThemeToggle}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Moon size={20} className="text-gray-600 dark:text-gray-300" />
          ) : (
            <Sun size={20} className="text-gray-600 dark:text-gray-300" />
          )}
        </button>
        <button 
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full relative"
          aria-label="Notifications"
        >
          <Bell size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
        </button>
        <Link 
          to="/profile" 
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-1 rounded-lg transition-colors"
        >
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full ring-2 ring-emerald-500/20"
          />
          <ChevronDown size={16} className="text-gray-600 dark:text-gray-300" />
        </Link>
      </div>
    </header>
  );
}