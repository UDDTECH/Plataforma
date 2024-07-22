
import React from "react";
import "../../css/globals.css";
import "../../css/homepage.css";
import { Button } from "../Button/Button";
import Card from "../Card/index";
import img3 from "../../images/image 3.png";
import img2 from "../../images/image 2.png";
import img5 from "../../images/image 5.png";
import Logo from "../../images/logo 2.png";
import Rect from "../../images/Rectangle 4.png";
import Disc from "../../images/logo-discord-1024 1.png";
import Perfil from "../../images/Ellipse 11.png";
import Wave from "../../images/Vector (2).png";
import { BsLightning } from "react-icons/bs";
import { RiYoutubeFill, RiUserLine } from "react-icons/ri";

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-header/70 via-header/40 to-header/10">
        {/*Ajustar resolução de img*/}
        {/*Introdução */}

        {/* Container principal usando grid layout */}
        <div className="container__primaria">
          {/* Primeiro cartão */}
          <Card.Root className="container__primaria--Card col-span-1 md:col-span-3 lg:col-span-4 text-justify bg-inherit  space-y-5">
            <Card.Title className="container__primaria--Card__titulo">
              CONHEÇA <span className="text-cyan-200">A</span>{" "}
              <span className="text-teal-800">NOSSA COMUNIDADE</span>
            </Card.Title>
            <Card.Description className="container__primaria--Card__description--primeiro">
              Bem-vindo à
              <span className="font-semibold text-teal-800 lg:text-[21px]">
                {" "}
                UDDTECH COMMUNITY.
              </span>{" "}
              Somos um grupo apaixonado por tecnologia, conectando estudantes e
              entusiastas da área de Tecnologia da Informação em um
              <span className="font-semibold text-teal-800 lg:text-[21px]">
                {" "}
                ambiente virtual.
              </span>
            </Card.Description>
            <Card.Description className="container__primaria--Card__description--segundo">
              Nossa Missão é Promover a troca de apoio mútuo e o crescimento
              Profissional em meio à modalidade de{" "}
              <span className="font-semibold text-teal-800 lg:text-[21px]">
                ensino a distância.
              </span>
            </Card.Description>
          </Card.Root>

          {/* Segundo cartão contendo imagens */}
          <Card.Root className="container__primaria--img__container">
            <img
              src={img3}
              alt="img 3"
              className="container__primaria--img__container--img"
            />
            <img
              src={img2}
              alt="img 2"
              className="container__primaria--img__container--img"
            />
          </Card.Root>
        </div>

        {/* Linha horizontal para separar seções */}
        <hr className="border border-teal-900/80 my-10 w-11/12 " />

        {/* Container principal para logos e informações */}
        <div className="container__informacoes">
          {/* Grid para organizar os elementos */}
          <div className="container__informacoes--cards">
            {/* Primeiro cartão com logos */}
            <Card.Root className="container__informacoes--cards--img">
              <img
                src={Rect}
                alt="Logo"
                width={150}
                className="absolute opacity-70"
              />
              <img src={Logo} alt="Logo" width={200} className="z-10" />
            </Card.Root>

            {/* Segundo cartão com Discord */}
            <Card.Root className="container__informacoes--cards--img__disc">
              <img src={Disc} alt="Disc" width={200} />
              <Button
                size={"lg"}
                variant={"link"}
                className="bg-[#0C1821] rounded-md hover:bg-[#344955] font-medium w-[150px] md:w-[200px] text-white mt-3"
              >
                <a href={"/"}>Entre no Discord</a>
              </Button>
            </Card.Root>

            {/* Terceiro cartão com informações adicionais */}
            <Card.Root className="container__informacoes--informacoes__adcionais">
              <Card.Description className="informacoes__adcionais--description">
                <span className="text-blue-400 font-bold">+150</span> Exercícios;
              </Card.Description>
              <Card.Description className="informacoes__adcionais--description">
                <span className="text-blue-400 font-bold">+500</span> Vídeos aulas na
                plataforma;
              </Card.Description>
              <Card.Description className="informacoes__adcionais--description">
                Quiz para poder treinar seus conhecimentos;
              </Card.Description>
              <Card.Description className="informacoes__adcionais--description">
                Materiais de apoio para se aprofundar e muito mais.
              </Card.Description>
            </Card.Root>
          </div>
        </div>
        <hr className="border border-teal-900/80 my-10 w-11/12 " />

        {/*Quem Somos */}
        <div className="container__quemsomos flex flex-col text-center items-center my-10 gap-3 p-1 py-5 w-full">
          <h3 className="container__quemsomos--titulo">
            Quem somos?
          </h3>
          <p className="container__quemsomos--paragrafo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            delectus, reiciendis sint consectetur laborum eos rerum, et totam
            quas nobis cupiditate vel recusandae, vero aspernatur ab at maxime
            velit! Error? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eaque accusantium reiciendis rem cum, ex consequuntur
            voluptate? Culpa quibusdam repellendus magnam? Unde neque
            praesentium error molestias minus aperiam dignissimos expedita eius.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            magni, porro illo omnis esse, suscipit aspernatur aliquam ea labore
            repellat deleniti! At molestias laboriosam, impedit ad harum eveniet
            magnam quo!
          </p>
          <div className="container__quemsomos--perfil">
            <Card.Root className="container__quemsomos--perfil--card ">
              <img
                src={Perfil}
                alt="Daniel"
                width={100}
                className="border-2 rounded-full border-blue-500 p-1 w-[243px]"
              />
              <Card.Description className="text-white text-[17px] lg:text-[24px] font-bold">
                Daniel Oliveira
              </Card.Description>
              <Card.Footer className="text-white text-[17px] lg:text-[18px] font-medium">
                Software Engineer
              </Card.Footer>
            </Card.Root>
            <Card.Root className="container__quemsomos--perfil--card ">
              <img
                src={Perfil}
                alt="Daniel"
                width={100}
                className="border-2 rounded-full border-blue-500 p-1 w-[243px]"
              />
              <Card.Description className="text-white text-[17px] lg:text-[24px] font-bold">
                Daniel Oliveira
              </Card.Description>
              <Card.Footer className="text-white text-[17px] lg:text-[18px] font-medium">
                Software Engineer
              </Card.Footer>
            </Card.Root>
            <Card.Root className="container__quemsomos--perfil--card ">
              <img
                src={Perfil}
                alt="Daniel"
                width={100}
                className="border-2 rounded-full border-blue-500 p-1 w-[243px]"
              />
              <Card.Description className="text-white text-[17px] lg:text-[24px] font-bold">
                Daniel Oliveira
              </Card.Description>
              <Card.Footer className="text-white text-[17px] lg:text-[18px] font-medium">
                Software Engineer
              </Card.Footer>
            </Card.Root>
          </div>
        </div>

        {/*img */}
        <img
          src={Wave}
          alt="Wave"
          width={"1000"}
          priority
          className="w-full max-h-[100px] bg-white mt-5 mb-0"
        />
        {/*img */}
        {/* Como Funciona*/}
        <div className="comofunciona__container">
          <h3 className="comofunciona__container--titulo">
            Como funciona?
          </h3>
          <p className="comofunciona__container--paragrafo">
            A Plataforma UDDTECH é uma plataforma completa para você começar ou
            se aprofundar na área de Desenvolvimento Web.
          </p>
          <div className="comofunciona__container--card__container">
            <Card.Root className="card__container--card">
              <RiYoutubeFill className="w-[80px] h-[60px] md:w-[120px] md:h-[100px] text-white" />
              <Card.Title className="card__container--card--titulo">
                Conteudo Gravado
              </Card.Title>
              <Card.Footer className="card__container--card--paragrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis alias similique quo ad dolore illum non saepe odit
                voluptates officiis doloribus molestias perferendis quos, amet
                officia harum repudiandae dolorem earum.
              </Card.Footer>
              <Button
                variant={"link"}
                className="card__container--card--button"
              >
                <a href={"/teste"}>Acessar</a>
              </Button>
            </Card.Root>
            <Card.Root className="card__container--card">
              <BsLightning className="w-[80px] h-[60px] md:w-[120px] md:h-[100px] text-white" />
              <Card.Title className="card__container--card--titulo">
                Exercícios
              </Card.Title>
              <Card.Footer className="card__container--card--paragrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis alias similique quo ad dolore illum non saepe odit
                voluptates officiis doloribus molestias perferendis quos, amet
                officia harum repudiandae dolorem earum.
              </Card.Footer>
              <Button
                variant={"link"}
                className="card__container--card--button"
              >
                <a href={"/teste"}>Iniciar</a>
              </Button>
            </Card.Root>
            <Card.Root className="card__container--card">
              <RiUserLine className="w-[80px] h-[60px] md:w-[120px] md:h-[100px] text-white" />
              <Card.Title className="card__container--card--titulo">
                Networking
              </Card.Title>
              <Card.Footer className="card__container--card--paragrafo card__container--card--paragrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis alias similique quo ad dolore illum non saepe odit
                voluptates officiis doloribus molestias perferendis quos, amet
                officia harum repudiandae dolorem earum.
              </Card.Footer>
              <Button
                variant={"link"}
                className="card__container--card--button"
              >
                <a href={"/teste"}>Acessar</a>
              </Button>
            </Card.Root>
          </div>
        </div>
        {/*img */}
        <img
          src={Wave}
          alt="Wave"
          width={"1000"}
          priority
          className="w-full max-h-[100px] bg-white mb-5 mt-0 -scale-100"
        />
        {/*img */}
        {/*Artigos Publicados */}
        <div className="container__artigos">
          <h3 className="container__artigos--titulo">
            Artigos Publicados
          </h3>
          <div className="container__artigos--card__container">
            <Card.Root className="card__container--card_artigos">
              <span className="absolute m-2 z-10 right-0 text-end bg-slate-200/30 p-1 rounded-2xl">
                7 min
              </span>
              <img
                src={img5}
                alt="artigo"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <img
                src={Perfil}
                alt="Daniel"
                width={70}
                height={70}
                className="card__container--card_artigos--perfil"
              />
              <Card.Description className="card__container--card_artigos--description--perfil">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="card__container--card_artigos--content">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className="card__container--card_artigos">
              <span className="absolute m-2 z-10 right-0 text-end bg-slate-200/30 p-1 rounded-2xl">
                7 min
              </span>
              <img
                src={img5}
                alt="artigo"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <img
                src={Perfil}
                alt="Daniel"
                width={70}
                height={70}
                className="card__container--card_artigos--perfil"
              />
              <Card.Description className="card__container--card_artigos--description--perfil">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="card__container--card_artigos--content">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className="card__container--card_artigos">
              <span className="absolute m-2 z-10 right-0 text-end bg-slate-200/30 p-1 rounded-2xl">
                7 min
              </span>
              <img
                src={img5}
                alt="artigo"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <img
                src={Perfil}
                alt="Daniel"
                width={70}
                height={70}
                className="card__container--card_artigos--perfil"
              />
              <Card.Description className="card__container--card_artigos--description--perfil">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="card__container--card_artigos--content">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className="card__container--card_artigos">
              <span className="absolute m-2 z-10 right-0 text-end bg-slate-200/30 p-1 rounded-2xl">
                7 min
              </span>
              <img
                src={img5}
                alt="artigo"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <img
                src={Perfil}
                alt="Daniel"
                width={70}
                height={70}
                className="card__container--card_artigos--perfil"
              />
              <Card.Description className="card__container--card_artigos--description--perfil">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="card__container--card_artigos--content">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className="card__container--card_artigos">
              <span className="absolute m-2 z-10 right-0 text-end bg-slate-200/30 p-1 rounded-2xl">
                7 min
              </span>
              <img
                src={img5}
                alt="artigo"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <img
                src={Perfil}
                alt="Daniel"
                width={70}
                height={70}
                className="card__container--card_artigos--perfil"
              />
              <Card.Description className="card__container--card_artigos--description--perfil">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="card__container--card_artigos--content">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className="card__container--card_artigos">
              <span className="absolute m-2 z-10 right-0 text-end bg-slate-200/30 p-1 rounded-2xl">
                7 min
              </span>
              <img
                src={img5}
                alt="artigo"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <img
                src={Perfil}
                alt="Daniel"
                width={70}
                height={70}
                className="card__container--card_artigos--perfil"
              />
              <Card.Description className="card__container--card_artigos--description--perfil">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="card__container--card_artigos--content">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className="card__container--card_artigos">
              <span className="absolute m-2 z-10 right-0 text-end bg-slate-200/30 p-1 rounded-2xl">
                7 min
              </span>
              <img
                src={img5}
                alt="artigo"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <img
                src={Perfil}
                alt="Daniel"
                width={70}
                height={70}
                className="card__container--card_artigos--perfil"
              />
              <Card.Description className="card__container--card_artigos--description--perfil">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="card__container--card_artigos--content">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className="card__container--card_artigos">
              <span className="absolute m-2 z-10 right-0 text-end bg-slate-200/30 p-1 rounded-2xl">
                7 min
              </span>
              <img
                src={img5}
                alt="artigo"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <img
                src={Perfil}
                alt="Daniel"
                width={70}
                height={70}
                className="card__container--card_artigos--perfil"
              />
              <Card.Description className="card__container--card_artigos--description--perfil">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="card__container--card_artigos--content">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;