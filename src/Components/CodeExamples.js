import React from 'react';

function CodeExamples() {
  return (
    <div className="bg-gray-900 text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-blue-300">Code Examples</h2>
      
      <h3 className="text-xl md:text-2xl lg:text-3xl text-blue-300 font-bold mb-4">Python</h3>
      <pre className="bg-gray-800 text-gray-300 p-4 rounded-md overflow-x-auto text-sm md:text-base lg:text-lg">
        <code>
          {`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`}
        </code>
      </pre>

      <h3 className="text-xl md:text-2xl lg:text-3xl text-blue-300 font-bold mb-4">Javascript</h3>
      <pre className="bg-gray-800 text-gray-300 p-4 rounded-md overflow-x-auto text-sm md:text-base lg:text-lg">
        <code>
          {`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log("Book generation started. Job ID:", response.data.job_id);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });`}
        </code>
      </pre>
    </div>
  );
}

export default CodeExamples;
