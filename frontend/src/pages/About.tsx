import React from 'react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent">
        About SmartResilience
      </h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Purpose</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          SmartResilience is a comprehensive environmental monitoring and disaster management platform
          designed to help cities and communities build resilience against environmental challenges
          and natural disasters.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Features</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500" />
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">Real-time Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-400">Track environmental metrics including air quality, temperature, noise levels, and energy usage.</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500" />
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">Global Coverage</h3>
              <p className="text-gray-600 dark:text-gray-400">Monitor and compare data across different countries with our advanced country selector.</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500" />
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">AI-Powered Insights</h3>
              <p className="text-gray-600 dark:text-gray-400">Get intelligent recommendations for environmental improvements and disaster preparedness.</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500" />
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">Disaster Alerts</h3>
              <p className="text-gray-600 dark:text-gray-400">Receive real-time notifications about potential environmental hazards and natural disasters.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Technical Features</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 mt-2 rounded-full bg-sky-500" />
            <p className="text-gray-600 dark:text-gray-400">Responsive design with Tailwind CSS</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 mt-2 rounded-full bg-sky-500" />
            <p className="text-gray-600 dark:text-gray-400">Dark mode support with system preference detection</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 mt-2 rounded-full bg-sky-500" />
            <p className="text-gray-600 dark:text-gray-400">Real-time data updates and notifications</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 mt-2 rounded-full bg-sky-500" />
            <p className="text-gray-600 dark:text-gray-400">Advanced search and filtering capabilities</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Get Started</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Begin by selecting your country from the dropdown menu in the header. You'll immediately
          see relevant environmental data and recommendations for your region. Navigate through
          different sections using the sidebar menu to explore all features.
        </p>
      </section>
    </div>
  );
}