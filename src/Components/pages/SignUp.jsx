import React from "react";
import Logo from "../../images/logo 2.png";
import Rect from "../../images/Rectangle 4.png";
import "../../css/globals.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGithub, FaCaretRight, FaUser } from "react-icons/fa";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
const SignUp = () => {
  return (
    <main className="main-grid">
      <a href="/" className="logo">
        <img src={Rect} alt="Logo" width={550} className="logo-img" />
        <img src={Logo} alt="Logo" width={350} className="logo-img-logo" />
      </a>
      <section className="section">
        <h2 className="title">Criar Conta</h2>
        <Button variant={"none"} className="github-button">
          <FaGithub className="size-8" />
          <p>Entre com o github</p>
        </Button>
        <span className="divider-span">OU</span>
        <form className="space-y-5">
          <div className="form-div">
            <FaUser className="form-icon" />
            <Input placeholder="Nome Completo" className="form-input" />
          </div>
          <div className="form-div">
            <MdOutlineAlternateEmail className="form-icon" />
            <Input placeholder="Email" className="form-input" />
          </div>
          <div className="form-div">
            <RiLockPasswordFill className="form-icon" />
            <Input placeholder="Senha" className="form-input" />
          </div>
          <div className="form-div">
            <RiLockPasswordFill className="form-icon" />
            <Input placeholder="Confirmar Senha" className="form-input" />
          </div>
          <div className="signup-checkbox-div">
            <Input type="checkbox" className="signup-checkbox-input" />
            <p className="signup-checkbox-rights">
              Ao se cadastrar, voce aceita nossos{" "}
              <a href={"/"} className="signup-checkbox-rights-link">
                termos de uso
              </a>{" "}
              e a nossa{" "}
              <a href={"/"} className="signup-checkbox-rights-link">
                politica de privacidade
              </a>
            </p>
          </div>
          <Button className="button-submit">Entrar</Button>
        </form>
        <a href="/LogIn">
          <Button variant={"none"} className="button-change-page">
            <p className="button-change-page-text">
              Possui uma conta?
              <p className="text-white">Acesse ela agora mesmo</p>
            </p>
            <FaCaretRight className="button-change-page-icon" />
          </Button>
        </a>
      </section>
    </main>
  );
};

export default SignUp;
