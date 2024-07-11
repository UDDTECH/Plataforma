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
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 py-5 lg:gap-x-3">
      <a
        href="/"
        className=" col-span-1 lg:col-span-2 m-auto justify-center items-center flex"
      >
        <img
          src={Rect}
          alt="Logo"
          width={550}
          className="opacity-20 hover:opacity-40 w-[300px] md:w-[550px]"
        />
        <img
          src={Logo}
          alt="Logo"
          width={350}
          className="opacity-80 absolute -z-10 w-[250px] md:w-[280px] lg:w-[350px]"
        />
      </a>
      <section className=" border-t-2 md:border-l-2 md:border-t-0 border-header justify-center items-center flex flex-col space-y-6 p-2">
        <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500/90 via-blue-500/60 to-slate-200/50 my-10 text-justify">
          Criar Conta
        </h2>
        <Button
          variant={"none"}
          className="flex items-center space-x-1 text-sm hover:opacity-70"
        >
          <FaGithub className="size-8" />
          <p>Entre com o github</p>
        </Button>
        <span className="text-sm">OU</span>
        <form className="space-y-5">
          <div className="flex space-x-2 items-center justify-center">
            <FaUser className="size-10 text-gray-300 " />
            <Input
              placeholder="Nome Completo"
              className="bg-transparent border-background/80"
            />
          </div>
          <div className="flex space-x-2 items-center justify-center">
            <MdOutlineAlternateEmail className="size-10 text-gray-300 " />
            <Input
              placeholder="Email"
              className="bg-transparent border-background/80"
            />
          </div>
          <div className="flex space-x-2 items-center justify-center">
            <RiLockPasswordFill className="size-10 text-gray-300 " />
            <Input
              placeholder="Senha"
              className="bg-transparent border-background/80"
            />
          </div>
          <div className="flex space-x-2 items-center justify-center">
            <RiLockPasswordFill className="size-10 text-gray-300 " />
            <Input
              placeholder="Confirmar Senha"
              className="bg-transparent border-background/80"
            />
          </div>
          <div className="flex items-center space-x-2 w-[300px]">
            <Input
              type="checkbox"
              className="bg-transparent border-background/80 w-fit"
            />
            <p className="flex-1 text-justify">
              Ao se cadastrar, voce aceita nossos{" "}
              <a href={"/"} className="text-blue-500 hover:underline">
                termos de uso
              </a>{" "}
              e a nossa{" "}
              <a href={"/"} className="text-blue-500 hover:underline">
                politica de privacidade
              </a>
            </p>
          </div>
          <Button className="flex w-[250px] mx-auto bg-blue-500 font-semibold">
            Entrar
          </Button>
        </form>
        <a href="/LogIn">
          <Button
            variant={"none"}
            className="flex hover:opacity-70 text-justify"
          >
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-slate-200 ">
              Possui uma conta?
              <p className="text-white">Acesse ela agora mesmo</p>
            </p>
            <FaCaretRight className="size-8" />
          </Button>
        </a>
      </section>
    </main>
  );
};

export default SignUp;
