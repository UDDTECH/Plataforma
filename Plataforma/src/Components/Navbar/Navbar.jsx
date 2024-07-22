import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { Button } from "../Button/Button";
import { CiUser, CiLogin } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import logo from "../../images/logo 2.png";
import "../../css/globals.css";

const A = [
  { Label: "Inicio", href: "/" },
  { Label: "Como Funciona", href: "/LogIn" },
  { Label: "Artigos", href: "/" },
  { Label: "Quem Somos", href: "/" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const pathname = window.location.pathname;
  const isHome = pathname === "/";
  const isInstituicao = pathname !== "/";
  const isHidden =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/LogIn" ||
    pathname === "/SignUp";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isHidden ? "hidden" : `${isHome ? "navbar-landing" : "navbar"}`
        }`}
      >
        <div className="navbar__container">
          <div className="navbar__logo">
            <a href="/" className="navbar__logo-link">
              <img src={logo} alt="Logo" width={150} height={68} />
            </a>
          </div>
          {/* Button Navbar_Hidden */}
          <Button
            size="sm"
            variant={"none"}
            onClick={() => setShowNav(!showNav)}
            className={`navbar__toggle-button md:navbar__toggle-button--hidden `}
          >
            <BsThreeDots className="navbar__toggle-icon" />
          </Button>
          <nav className="navbar__items">
            <ul className="navbar__list">
              {A.map((item, index) => (
                <li key={index} className="navbar__item">
                  <a href={item.href} className="navbar__link">
                    {item.Label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={"/LogIn"}>
              <Button size="default" variant="none" className="navbar__button">
                <CiLogin className="navbar__icon" />
                <p className="flex md:hidden lg:flex"> Login</p>
              </Button>
            </a>
            {isInstituicao && (
              <a href={"/SignUp"}>
                <Button
                  size="default"
                  variant="none"
                  className="navbar__button--cadastro"
                >
                  <CiUser className="navbar__icon" />
                  <p className="flex md:hidden lg:flex">Cadastrar</p>
                </Button>{" "}
              </a>
            )}
          </nav>
        </div>
        {!isHome && (
          <div className="navbar__theme-switcher">
            <ThemeSwitcher />
          </div>
        )}
      </div>
      {showNav && (
        <nav className="navbar__hidden">
          <div className="navbar__hidden-container">
            <a href={"/LogIn"}>
              <Button variant="none" className="navbar__button">
                <CiLogin className="navbar__icon" />
                Login
              </Button>
            </a>
            {isInstituicao && (
              <a href={"/SignUp"}>
                <Button
                  size="default"
                  variant="none"
                  className="navbar__button--cadastro"
                >
                  <CiUser className="navbar__icon" />
                  Cadastrar
                </Button>{" "}
              </a>
            )}
            <hr className="navbar__divider" />
            <ul className="navbar__hidden-list">
              {A.map((item, index) => (
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
