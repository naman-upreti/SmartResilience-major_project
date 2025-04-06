import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import countries from 'world-countries';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Dashboard } from './components/Dashboard';
import type { Country } from './types';

function App() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries.find(c => c.cca2 === 'IN') as Country
  );

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      const initialValue = saved ? JSON.parse(saved) : false;
      return initialValue;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <div className={`min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${isDark ? 'dark' : ''}`}>
        <Sidebar />
        <Header 
          selectedCountry={selectedCountry} 
          onSelectCountry={setSelectedCountry}
          isDark={isDark}
          onThemeToggle={() => setIsDark(!isDark)}
        />
        
        <main className="pl-64 pt-16 p-6" style={{ zIndex: 30 }}>
          <Routes>
            <Route path="/" element={<Dashboard selectedCountry={selectedCountry} />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;