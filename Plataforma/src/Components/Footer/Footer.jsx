import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "../../css/globals.css";
import "../../css/homepage.css";

const Footer = () => {
  const pathname = window.location.pathname;
  const isHome = pathname === "/";
  const isHidden = pathname === "/login" || pathname === "/signup" || pathname === "/LogIn" || pathname === "/SignUp";

  return (
    <>
      {isHome && (
        <img
          src={require("../../images/Vector.png")} // Certifique-se de ajustar o caminho corretamente
          alt="test"
          width="1000"
          className="w-full max-h-[100px]"
        />
      )}
      <footer
        className={`${
          isHidden ? "hidden" : `${!isHome ? "footer" : "footer-landing"}`
        }`}
      >
        <div className={`${!isHome ? "footer-grid" : "footer-grid-landing"}`}>
          {/* UDDTEC */}
          <div className="footer-card col-span-4">
            <h3
              className={`${!isHome ? "footer-title" : "footer-title-landing"}`}
            >
              UDDTECH
            </h3>
            <p
              className={`${
                !isHome
                  ? "footer-description"
                  : "footer-description-landing hover:no-underline"
              }`}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              dolor sint autem cum assumenda consequatur
            </p>
            <div className="footer-links">
              <a href="/testes">
                <FaFacebook
                  className={`${
                    !isHome ? "footer-link" : "footer-link-landing"
                  }`}
                />
              </a>
              <a href="/">
                <FaTwitter
                  className={`${
                    !isHome ? "footer-link" : "footer-link-landing"
                  }`}
                />
              </a>
              <a href="/testes">
                <FaInstagram
                  className={`${
                    !isHome ? "footer-link" : "footer-link-landing"
                  }`}
                />
              </a>
              <a href="/">
                <FaLinkedin
                  className={`${
                    !isHome ? "footer-link" : "footer-link-landing"
                  }`}
                />
              </a>
              <a href="/testes">
                <FaYoutube
                  className={`${
                    !isHome ? "footer-link" : "footer-link-landing"
                  }`}
                />
              </a>
            </div>
          </div>
          {/* Products */}
          <div className="footer-card col-span-2 ">
            <h3
              className={`${!isHome ? "footer-title" : "footer-title-landing"}`}
            >
              Products
            </h3>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Features
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Materials
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Reviews
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Updates
            </a>
          </div>
          {/* Company */}
          <div className="footer-card col-span-2">
            <h3
              className={`${!isHome ? "footer-title" : "footer-title-landing"}`}
            >
              Company
            </h3>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Sobre
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Contato
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Carreira
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Cultura
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Blog
            </a>
          </div>
          {/* Suporte */}
          <div className="footer-card col-span-2">
            <h3
              className={`${!isHome ? "footer-title" : "footer-title-landing"}`}
            >
              Suporte
            </h3>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Getting Started
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Ajuda
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Server Status
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Report Bugs
            </a>
            <a
              href="/"
              className={`${
                !isHome ? "footer-description" : "footer-description-landing"
              }`}
            >
              Suporte
            </a>
          </div>
          {/* Contatos */}
          <div className="footer-card col-span-2">
            <h3
              className={`${!isHome ? "footer-title" : "footer-title-landing"}`}
            >
              Contatos
            </h3>
            <p
              className={`${
                !isHome
                  ? "footer-description"
                  : "footer-description-landing hover:no-underline break-words"
              }`}
            >
              Contact@company.com
            </p>
            <p
              className={`${
                !isHome
                  ? "footer-description"
                  : "footer-description-landing hover:no-underline"
              }`}
            >
              (000) 687-5892
            </p>
            <p
              className={`${
                !isHome
                  ? "footer-description"
                  : "footer-description-landing hover:no-underline"
              }`}
            >
              794 Mcallister St San Francisco, 94102.
            </p>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p
            className={`${
              !isHome ? "footer-copyright" : "footer-copyright-landing"
            }`}
          >
            Copyright ©{new Date().getFullYear()} UDDTECH Community
          </p>
          <span
            className={`${!isHome ? "footer-rights" : "footer-rights-landing"}`}
          >
            <p>All Rights Reserved </p>
            <a
              href="/testes"
              className={`${
                !isHome ? "footer-underline" : "footer-underline-landing"
              }`}
            >
              Terms and Conditions 
            </a>
            <a
              href="/testes"
              className={`${
                !isHome ? "footer-underline" : "footer-underline-landing"
              }`}
            >
              Privacy Policy
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
