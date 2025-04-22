import React from 'react';
import logo from './assets/Logo.svg';
import OS from './assets/OSLogo.svg';
import SBD from './assets/SBDlogo.svg';
import DMJ from './assets/DMJlogo.svg';
import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (!darkMode) {
      document.body.style.backgroundColor = '#1a202c'; // Warna gelap
      document.body.style.color = '#ffffff'; // Teks putih
    } else {
      document.body.style.backgroundColor = '#ffffff'; // Warna terang
      document.body.style.color = '#000000'; // Teks hitam
    }
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav
        className={`flex justify-between items-center p-4 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-800'
        }`}
      >
        {/* Logo dan Networking Lab */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className={`${darkMode ? 'text-gray-300' : 'text-white'} text-lg`}>
            Networking Lab
          </h1>
        </div>

        {/* Menu Navigasi */}
        <div className="flex items-center space-x-4">
          <a
            href="/os"
            className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-gray-400`}
          >
            OS
          </a>
          <a
            href="/sbd"
            className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-gray-400`}
          >
            SBD
          </a>
          <a
            href="/dmj"
            className={`${darkMode ? 'text-gray-300' : 'text-white'} hover:text-gray-400`}
          >
            DMJ
          </a>
        </div>

        {/* Tombol Mode Gelap/Terang */}
        <button
          onClick={toggleDarkMode}
          className={`${
            darkMode ? 'bg-gray-600' : 'bg-gray-700'
          } text-white hover:bg-gray-500 px-3 py-1 rounded`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <div className="container mx-auto mt-4">
        <h2
          className={`text-3xl font-extrabold ${
            darkMode ? 'text-gray-300' : 'text-gray-800'
          }`}
        >
          Selamat datang di Networking Laboratorium
        </h2>
        <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-black'} font-semibold`}>
          Berikut dibawah ini adalah mata kuliah yang diajar kami semester ini.
        </p>
      </div>

      <div className="flex flex-row justify-between mx-10 mt-4 border-2 border-gray-300 rounded-lg p-4">
        <div className="container ">
          <h2
            className={`text-3xl font-extrabold ${
              darkMode ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
           SBD
          </h2>
          <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-black'} font-semibold`}>
            Berikut dibawah ini adalah mata kuliah yang diajar kami semester ini.
          </p>
        </div>
        <img src={SBD} alt="Logo" className="h-20" />

      </div>

      <div className="flex flex-row justify-between mx-10 mt-4 border-2 border-gray-300 rounded-lg p-4">
        <img src={DMJ} alt="Logo" className="h-20" />
        <div className="container ">
          <h2
            className={`text-3xl font-extrabold ${
              darkMode ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            DMJ
          </h2>
          <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-black'} font-semibold`}>
            Berikut dibawah ini adalah mata kuliah yang diajar kami semester ini.
          </p>
        </div>

      </div>    

      <div className="flex flex-row justify-between mx-10 mt-4 border-2 border-gray-300 rounded-lg p-4">
        <div className="container ">
          <h2
            className={`text-3xl font-extrabold ${
              darkMode ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            OS
          </h2>
          <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-black'} font-semibold`}>
            Berikut dibawah ini adalah mata kuliah yang diajar kami semester ini.
          </p>
        </div>
        <img src={OS} alt="Logo" className="h-20" />

      </div>          
    </>
  );
}