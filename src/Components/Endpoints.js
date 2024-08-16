import React from 'react';

function Endpoints() {
  return (
    <div className="bg-gray-900 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Endpoints</h2>

      <div className="bg-gray-800 text-gray-300 p-4 md:p-6 lg:p-8 rounded-md">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Generate Book</h3>
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm md:text-base">POST</span>
          <span className="mt-2 md:mt-0 md:ml-3 text-sm md:text-base">/api/generate-book</span>
        </div>

        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Request Body</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gray-700">
                <th className="text-left py-2 px-3 md:px-4">Parameter</th>
                <th className="text-left py-2 px-3 md:px-4">Type</th>
                <th className="text-left py-2 px-3 md:px-4">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-700 hover:text-white">
                <td className="py-2 px-3 md:px-4">api</td>
                <td className="py-2 px-3 md:px-4">string</td>
                <td className="py-2 px-3 md:px-4">The API provider to use. Options: "openai" or "together"</td>
              </tr>
              <tr className="hover:bg-gray-700 hover:text-white">
                <td className="py-2 px-3 md:px-4">model</td>
                <td className="py-2 px-3 md:px-4">string</td>
                <td className="py-2 px-3 md:px-4">The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
              </tr>
              <tr className="hover:bg-gray-700 hover:text-white">
                <td className="py-2 px-3 md:px-4">topic</td>
                <td className="py-2 px-3 md:px-4">string</td>
                <td className="py-2 px-3 md:px-4">The main topic or theme of the book</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Endpoints;
