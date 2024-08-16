import React from 'react';

export default function Pricing() {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-blue-300">API Pricing</h2>
      <p className="mb-4 text-lg">
        Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-gray-700 text-left rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-3">API</th>
              <th className="px-4 py-3">Model</th>
              <th className="px-4 py-3">Price per 1K Tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-600">
              <td className="px-4 py-3">OpenAI</td>
              <td className="px-4 py-3">GPT-3.5</td>
              <td className="px-4 py-3">$0.002</td>
            </tr>
            <tr className="border-t border-gray-600">
              <td className="px-4 py-3">OpenAI</td>
              <td className="px-4 py-3">GPT-4</td>
              <td className="px-4 py-3">$0.03</td>
            </tr>
            <tr className="border-t border-gray-600">
              <td className="px-4 py-3">Together AI</td>
              <td className="px-4 py-3">Llama-2-70b</td>
              <td className="px-4 py-3">$0.0008</td>
            </tr>
            <tr className="border-t border-gray-600">
              <td className="px-4 py-3">Together AI</td>
              <td className="px-4 py-3">Llama-2-13b</td>
              <td className="px-4 py-3">$0.0006</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-3 text-blue-300">Token Estimation</h3>
        <p className="text-lg leading-relaxed">
          On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
        </p>

        {/* Added more space before the Billing section */}
        <h3 className="text-2xl font-bold mt-10 mb-3 text-blue-300">Billing</h3>
        <p className="text-lg leading-relaxed">
          You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
}
