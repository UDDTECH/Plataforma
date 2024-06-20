import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img src='./logo.png'/>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Início</a>
          <a href="#" className="hover:underline">Como funciona</a>
          <a href="#" className="hover:underline">Artigos</a>
          <a href="#" className="hover:underline">Quem Somos</a>
        </nav>
        <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">Entrar</button>
      </div>
    </header>
  );
};

export default Header;