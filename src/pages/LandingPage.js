import React from 'react';

const LandingPageComponent = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Smart Aquatic Monitoring</h1>
      <p className="mb-6 text-lg">Real-time monitoring for water quality and aquatic systems.</p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">Get Started</button>
    </div>
  );
};

export default LandingPageComponent;
