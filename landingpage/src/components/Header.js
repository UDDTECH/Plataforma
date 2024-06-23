import React, { useState } from "react";
import "../App.css";
import logo from "../img/logo.png";
import person from "../img/person.png";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header className="header-gradient min-h-20 text-white font-poppins">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 flex-wrap">
        <img src={logo} className="logo" alt="logo" />
        <button
          className="sm:hidden text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          Menu
        </button>
        <nav
          className={`space-x-6 ${isNavVisible ? "block" : "hidden"} sm:block`}
        >
          <a href="#">
            Início
          </a>
          <a href="#" >
            Como funciona
          </a>
          <a href="#">
            Artigos
          </a>
          <a href="#">
            Quem Somos
          </a>
        </nav>

        <button className="button-entrar bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center justify-center">
          <img src={person} className="person mr-2" />
          ENTRAR
        </button>
      </div>
    </header>
  );
};

export default Header;
