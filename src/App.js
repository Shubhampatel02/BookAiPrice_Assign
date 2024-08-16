import React, { useState } from 'react';
import './App.css';
import Overview from './Components/Overview';
import Authentication from './Components/Authentication';
import Endpoints from './Components/Endpoints';
import Tutorial from './Components/Tutorial';
import CodeExamples from './Components/CodeExamples';
import Pricing from './Components/Pricing';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [navOpen, setNavOpen] = useState(false); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

 
  const handleNavLinkClick = () => {
    if (navOpen) {
      setNavOpen(false);
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      
        <header className={`py-6 fixed top-0 left-0 w-full z-10 ${darkMode ? 'bg-indigo-800' : 'bg-indigo-500'} text-white flex justify-between items-center px-6 md:px-8`}>
          <h1 className="text-2xl md:text-4xl font-bold">Book Generator API</h1>
          <div className="flex space-x-4 items-center">
            <button
              onClick={toggleDarkMode}
              className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-2  ${!darkMode && 'text-black bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
           
            <button onClick={toggleNav} className="md:hidden text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </header>

    
        <div className="flex flex-1 pt-20">
        
          <nav
            className={`fixed top-20 left-0 w-full md:w-1/5 h-full overflow-y-auto transition-transform transform ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'
            } ${navOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block`}
          >
            <ul className="flex flex-col space-y-4 p-9">
              <li>
                <a href="#overview" onClick={handleNavLinkClick} className={`block py-2 px-4 rounded-lg font-bold uppercase ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-400'}`}>Overview</a>
              </li>
              <li>
                <a href="#authentication" onClick={handleNavLinkClick} className={`block py-2 px-4 rounded-lg font-bold uppercase ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-400'}`}>Authentication</a>
              </li>
              <li>
                <a href="#endpoints" onClick={handleNavLinkClick} className={`block py-2 px-4 rounded-lg font-bold uppercase ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-400'}`}>Endpoints</a>
              </li>
              <li>
                <a href="#tutorial" onClick={handleNavLinkClick} className={`block py-2 px-4 rounded-lg font-bold uppercase ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-400'}`}>Tutorial</a>
              </li>
              <li>
                <a href="#code-examples" onClick={handleNavLinkClick} className={`block py-2 px-4 rounded-lg font-bold uppercase ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-400'}`}>Code Examples</a>
              </li>
              <li>
                <a href="#pricing" onClick={handleNavLinkClick} className={`block py-2 px-4 rounded-lg font-bold uppercase ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-400'}`}>Pricing</a>
              </li>
            </ul>
          </nav>

         
          <main className={`ml-0 md:ml-[20%] w-full md:w-[80%] overflow-y-auto p-6 md:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <section id="overview" className={`py-8 md:py-12 px-4 md:px-8 rounded-lg mb-6 md:mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <Overview />
            </section>
            <section id="authentication" className={`py-8 md:py-12 px-4 md:px-8 rounded-lg mb-6 md:mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <Authentication />
            </section>
            <section id="endpoints" className={`py-8 md:py-12 px-4 md:px-8 rounded-lg mb-6 md:mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <Endpoints />
            </section>
            <section id="tutorial" className={`py-8 md:py-12 px-4 md:px-8 rounded-lg mb-6 md:mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <Tutorial />
            </section>
            <section id="code-examples" className={`py-8 md:py-12 px-4 md:px-8 rounded-lg mb-6 md:mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <CodeExamples />
            </section>
            <section id="pricing" className={`py-8 md:py-12 px-4 md:px-8 rounded-lg mb-6 md:mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <Pricing />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
