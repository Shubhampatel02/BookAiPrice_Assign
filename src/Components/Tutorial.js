import React from 'react';

function Tutorial() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Tutorial</h2>

      <ol className="list-decimal pl-6">
        <li className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-yellow-400">Obtain an API Key</h3>
          <p>Generate an API key using the button in the Authentication section above.</p>
        </li>
        <li className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-green-400">Make a Request</h3>
          <p>Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.</p>
        </li>
        <li className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-purple-400">Handle the Response</h3>
          <p>The API will return a response with a job ID. You can use this ID to check the status of your book generation job.</p>
        </li>
        <li>
          <h3 className="text-xl font-bold mb-2 text-orange-400">Retrieve the Generated Book</h3>
          <p>Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).</p>
        </li>
      </ol>
    </div>
  );
}

export default Tutorial;
