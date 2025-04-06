import React, { useState, useEffect, useRef } from 'react';
import { Globe, Search, ChevronDown } from 'lucide-react';
import countries from 'world-countries';
import type { Country } from '../types';

interface CountrySelectorProps {
  selectedCountry: Country;
  onSelect: (country: Country) => void;
}

export function CountrySelector({ selectedCountry, onSelect }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const popularCountries = ['IN', 'SG', 'US', 'GB', 'AU']
    .map(code => countries.find(c => c.cca2 === code))
    .filter(Boolean) as Country[];

  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCountrySelect = (country: Country) => {
    onSelect(country);
    setIsOpen(false);
    setSearchQuery('');
  };

  const CountryOption = ({ country }: { country: Country }) => (
    <button
      key={country.cca2}
      onClick={() => handleCountrySelect(country)}
      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
    >
      <span className="text-sm text-gray-800 dark:text-gray-200">
        {country.name.common}
      </span>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {country.cca2}
      </span>
    </button>
  );

  return (
    <div className="relative" style={{ zIndex: 50 }}>        
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 shadow-sm nature:bg-green-50 nature:border-green-200 nature:hover:bg-green-100"
      >
        <Globe size={20} className="text-gray-600 dark:text-gray-400 nature:text-green-700" />
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 nature:text-green-800">{selectedCountry.name.common}</span>
        <ChevronDown 
          size={16} 
          className={`text-gray-600 dark:text-gray-400 nature:text-green-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
    
      {isOpen && (
        <div 
          ref={dropdownRef}
          className="absolute w-64 bg-white dark:bg-gray-800 nature:bg-green-50 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 nature:border-green-200 py-2 mt-1"
          style={{
            maxHeight: '400px',
            overflowY: 'auto',
            zIndex: 100
          }}
        >
          <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700 nature:border-green-100">
            <div className="relative">
              <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 nature:text-green-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search countries..."
                className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-200 dark:border-gray-600 nature:border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 nature:bg-green-50 nature:text-green-800 nature:placeholder-green-600"
              />
            </div>
          </div>

          {searchQuery === '' && (
            <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700 nature:border-green-100">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 nature:text-green-700 mb-1">Popular</p>
              {popularCountries.map(country => (
                <button
                  key={country.cca2}
                  onClick={() => {
                    onSelect(country);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-2 py-1.5 text-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/20 nature:hover:bg-green-100 rounded-md transition-colors flex items-center gap-2 text-gray-700 dark:text-gray-200 nature:text-green-800"
                >
                  <span>{country.flag}</span>
                  <span>{country.name.common}</span>
                </button>
              ))}
            </div>
          )}

          <div className="max-h-64 overflow-y-auto">
            {filteredCountries.map(country => (
              <button
                key={country.cca2}
                onClick={() => {
                  onSelect(country);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-1.5 text-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/20 nature:hover:bg-green-100 transition-colors flex items-center gap-2 text-gray-700 dark:text-gray-200 nature:text-green-800"
              >
                <span>{country.flag}</span>
                <span>{country.name.common}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}