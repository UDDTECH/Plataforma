import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { Button } from "../Button/Button";
import { CiUser, CiLogin } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import logo from "../../images/logo 2.png";
import "../../css/globals.css";

// Definição dos links do cabeçalho
const headerLinks = [
  { Label: "Inicio", href: "/" },
  { Label: "Como Funciona", href: "/" },
  { Label: "Artigos", href: "/" },
  { Label: "Quem Somos", href: "/" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false); // Estado para controle do menu móvel
  const pathname = window.location.pathname;
  const isHome = pathname === "/";
  const isInstituicao = pathname === "/testes";

  // Hook para gerenciar redimensionamento da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowNav(false); // Fecha o menu móvel em telas maiores
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          {/* Logotipo */}
          <div className="navbar__logo">
            <a href="/" className="navbar__logo-link">
              <img src={logo} alt="Logo" width={150} height={68} />
            </a>
          </div>
          {/* Botão para alternar o menu móvel */}
          <Button
            size="sm"
            variant={"none"}
            onClick={() => setShowNav(!showNav)}
            className={`navbar__toggle-button md:navbar__toggle-button--hidden ${
              showNav ? "navbar__toggle-button--active" : ""
            }`}
          >
            <BsThreeDots className="navbar__toggle-icon" />
          </Button>
          {/* Links de navegação principais */}
          <nav className="navbar__items">
            <ul className="navbar__list">
              {headerLinks.map((item, index) => (
                <li key={index} className="navbar__item">
                  <a href={item.href} className="navbar__link">
                    {item.Label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Botão de Login */}
            <Button size="default" variant="none" className="navbar__button">
              <CiLogin className="navbar__icon" />
              <p className="flex md:hidden lg:flex">Login</p>
            </Button>
            {/* Botão de Cadastro, visível apenas em certas páginas */}
            {isInstituicao && (
              <Button
                size="default"
                variant="none"
                className="navbar__button--cadastro"
              >
                <CiUser className="navbar__icon" />
                <p className="flex md:hidden lg:flex">Cadastrar</p>
              </Button>
            )}
          </nav>
        </div>
        {/* Componente para alternar tema, não visível na página inicial */}
        {!isHome && (
          <div className="navbar__theme-switcher">
            <ThemeSwitcher />
          </div>
        )}
      </div>
      {/* Menu móvel, visível apenas quando showNav é true */}
      {showNav && (
        <nav className="navbar__hidden">
          <div className="navbar__hidden-container">
            <Button size="default" variant="none" className="navbar__button">
              <CiLogin className="navbar__icon" />
              Login
            </Button>
            {isInstituicao && (
              <Button
                size="default"
                variant="none"
                className="navbar__button--cadastro"
              >
                <CiUser className="navbar__icon" />
                Cadastrar
              </Button>
            )}
            <hr className="navbar__divider" />
            <ul className="navbar__hidden-list">
              {headerLinks.map((item, index) => (
                <li key={index} className="navbar__hidden-item">
                  <a href={item.href} className="navbar__hidden-link">
                    {item.Label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
