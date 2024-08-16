import React from 'react';

function Authentication() {
  return (
    <div className="bg-gray-900 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Authentication</h2>
      <p className="text-sm md:text-base lg:text-lg mb-4">To use the API, you need to include your API key in the header of each request:</p>
      <pre className="bg-gray-800 text-gray-300 p-4 rounded-md text-sm md:text-base">
        X-API-Key: YOUR_API_KEY
      </pre>
      <p className="mt-4 text-sm md:text-base lg:text-lg">To generate an API key, use the button below:</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-sm md:text-base">
        Generate API Key
      </button>

      <div className="mt-4">
        <input
          type="text"
          id="apiKeyInput"
          className="bg-gray-800 text-white p-2 rounded w-full text-sm md:text-base"
          placeholder="Enter your API key"
        />
      </div>
    </div>
  );
}

export default Authentication;
