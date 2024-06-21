import React, { useState } from 'react';
import '../App.css'; 


const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header className="header-gradient min-h-20 text-white font-poppins">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 flex-wrap">
       
        <button 
          className="sm:hidden text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          Menu
        </button>
        <nav className={`space-x-6 ${isNavVisible ? 'block' : 'hidden'} sm:block`}>
          <a href="#" className=" text-link hover:underline">Início</a>
          <a href="#" className=" text-link hover:underline">Como funciona</a>
          <a href="#" className="text-link hover:underline">Artigos</a>
          <a href="#" className="text-link hover:underline">Quem Somos</a>
        </nav>
        <img src='./img/person.png'/>
        <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">Entrar</button>
      </div>
    </header>
  );
};

export default Header;