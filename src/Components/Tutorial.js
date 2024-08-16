import React from 'react';

export default function Pricing() {
  return (
    <div className="bg-gray-800 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-blue-300">API Pricing</h2>
      <p className="mb-4 text-base md:text-lg lg:text-xl">
        Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-gray-700 text-left rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-2 py-3 text-sm md:text-base lg:text-lg">API</th>
              <th className="px-2 py-3 text-sm md:text-base lg:text-lg">Model</th>
              <th className="px-2 py-3 text-sm md:text-base lg:text-lg">Price per 1K Tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-600">
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">OpenAI</td>
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">GPT-3.5</td>
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">$0.002</td>
            </tr>
            <tr className="border-t border-gray-600">
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">OpenAI</td>
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">GPT-4</td>
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">$0.03</td>
            </tr>
            <tr className="border-t border-gray-600">
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">Together AI</td>
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">Llama-2-70b</td>
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">$0.0008</td>
            </tr>
            <tr className="border-t border-gray-600">
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">Together AI</td>
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">Llama-2-13b</td>
              <td className="px-2 py-3 text-sm md:text-base lg:text-lg">$0.0006</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-blue-300">Token Estimation</h3>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
          On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
        </p>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-3 text-blue-300">Billing</h3>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
          You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
}
