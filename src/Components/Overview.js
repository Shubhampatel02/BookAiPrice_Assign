import React from 'react';

const Overview = () => {
  return (
    <div className="bg-gray-800 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-4 md:mb-6 text-blue-300">
        Overview
      </h2>
      <p className="text-base md:text-lg lg:text-xl xl:text-1xl leading-relaxed">
        The Book Generator API allows you to generate books on various topics using different language models. 
        This documentation provides details on how to use the API, including authentication, available endpoints, 
        and code examples.
      </p>
    </div>
  );
};

export default Overview;
