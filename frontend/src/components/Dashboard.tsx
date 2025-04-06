import React, { useState } from 'react';
import { Wind, Thermometer, Volume2, Zap } from 'lucide-react';
import { countryData } from '../data';
import type { Country, MetricCardProps } from '../types';

function MetricCard({ icon: Icon, title, value, trend, color }: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-semibold mt-1 dark:text-white">{value}</p>
          <p className={`text-sm mt-1 ${color}`}>{trend}</p>
        </div>
        <Icon className={`${color} opacity-80`} size={24} />
      </div>
    </div>
  );
}

function Map({ country }: { country: Country }) {
  const [activeFilter, setActiveFilter] = useState('Green Spaces');
  const filters = ['Green Spaces', 'Pollution', 'Sensors'];

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200 dark:border-gray-700 h-[400px] shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium dark:text-white">{country.name.common} Overview Map</h3>
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                activeFilter === filter
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-[calc(100%-2rem)] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Interactive Map View - Centered on {country.capital}</p>
      </div>
    </div>
  );
}

export function Dashboard({ selectedCountry }: { selectedCountry: Country }) {
  const data = countryData[selectedCountry.cca2] || countryData.IN;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          icon={Wind}
          title="Air Quality Index"
          value={`${data.airQuality.value} AQI`}
          trend={`${data.airQuality.trend > 0 ? 'Better' : 'Worse'} • ${Math.abs(data.airQuality.trend)}% than yesterday`}
          color={data.airQuality.trend > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}
        />
        <MetricCard
          icon={Thermometer}
          title="Temperature"
          value={`${data.temperature.value}°C`}
          trend={data.temperature.trend}
          color="text-blue-600 dark:text-blue-400"
        />
        <MetricCard
          icon={Volume2}
          title="Noise Level"
          value={`${data.noiseLevel.value} dB`}
          trend={data.noiseLevel.trend}
          color="text-amber-600 dark:text-amber-400"
        />
        <MetricCard
          icon={Zap}
          title="Energy Usage"
          value={`${data.energyUsage.value} kWh`}
          trend={`${Math.abs(data.energyUsage.trend)}% ${data.energyUsage.trend < 0 ? 'below' : 'above'} target`}
          color={data.energyUsage.trend < 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}
        />
      </div>

      <Map country={selectedCountry} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium mb-4 dark:text-white">AI Recommendations</h3>
          <div className="space-y-3">
            {data.recommendations.map((rec, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-colors">
                <div className="status-indicator bg-emerald-400" />
                <p className="text-sm text-gray-700 dark:text-gray-300">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="font-medium mb-4 dark:text-white">Disaster Resilience Status</h3>
          <div className="space-y-3">
            {data.disasterStatus.map((status, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors">
                <div className={`status-indicator ${
                  status.severity === 'success' ? 'bg-emerald-400' :
                  status.severity === 'warning' ? 'bg-amber-400' :
                  'bg-red-400'
                }`} />
                <p className="text-sm text-gray-700 dark:text-gray-300">{status.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}