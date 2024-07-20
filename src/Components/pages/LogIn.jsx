import React from "react";
import Logo from "../../images/logo 2.png";
import Rect from "../../images/Rectangle 4.png";
import "../../css/globals.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGithub, FaCaretRight } from "react-icons/fa";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
const LogIn = () => {
  return (
    <main className="main-grid">
      <a href="/" className="logo">
        <img src={Rect} alt="Logo" width={550} className="logo-img" />
        <img src={Logo} alt="Logo" width={350} className="logo-img-logo" />
      </a>
      <section className="section">
        <h2 className="title">Acesse sua Conta</h2>
        <Button variant={"none"} className="github-button">
          <FaGithub className="size-8" />
          <p>Entre com o github</p>
        </Button>
        <span className="divider-span">OU</span>
        <form className="space-y-5">
          <div className="form-div">
            <MdOutlineAlternateEmail className="form-icon" />
            <Input placeholder="Email" className="form-input" />
          </div>
          <div className="form-div">
            <RiLockPasswordFill className="form-icon" />
            <Input placeholder="Senha" className="form-input" />
          </div>
          <Button variant={"none"} className="login-button-password">
            Esqueci minha senha!
          </Button>
          <Button variant={"none"} className="button-submit">
            Entrar
          </Button>
        </form>
        <a href="/SignUp">
          <Button variant={"none"} className="button-change-page">
            <p className="button-change-page-text">
              Não tem uma conta?
              <p className="text-white">se inscreva gratuitamente</p>
            </p>
            <FaCaretRight className="button-change-page-icon" />
          </Button>
        </a>
      </section>
    </main>
  );
};

export default LogIn;
