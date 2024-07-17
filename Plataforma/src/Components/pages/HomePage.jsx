
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
        <div className="grid grid-cols-1 md:grid-cols-6 items-center gap-1 p-1 min-h-[80vh] w-11/12">
          {/* Primeiro cartão */}
          <Card.Root className="col-span-1 md:col-span-3 lg:col-span-4 text-justify bg-inherit  space-y-5">
            <Card.Title className="flex-1 font-poppins font-medium text-[40px] md:text-[50px] lg:text-[65px] xl:text-[50px] text-cyan-200 tracking-[38%] leading-[60px]">
              CONHEÇA <span className="text-cyan-200 mx-2">A</span>{" "}
              <span className="text-teal-800">NOSSA COMUNIDADE</span>
            </Card.Title>
            <Card.Description className="flex-1 items-center gap-x-1 text-[21px] lg:text-[25px]">
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
            <Card.Description className="flex-1 items-center gap-x-1 text-[21px] lg:text-[21px]">
              Nossa Missão é Promover a troca de apoio mútuo e o crescimento
              Profissional em meio à modalidade de{" "}
              <span className="font-semibold text-teal-800 lg:text-[21px]">
                ensino a distância.
              </span>
            </Card.Description>
          </Card.Root>

          {/* Segundo cartão contendo imagens */}
          <Card.Root className="col-span-1 md:col-span-3 lg:col-span-2 grid grid-rows-2 text-justify bg-inherit p-5 space-y-5">
            <img
              src={img3}
              alt="img 3"
              className="w-fit md:w-[250px] lg:w-[275px] xl:w-[369px] 2xl:w-[400px] ml-auto rounded-md border p-2 border-cyan-400/40"
            />
            <img
              src={img2}
              alt="img 2"
              className="w-fit md:w-[250px] lg:w-[275px] xl:w-[369px] 2xl:w-[400px] mr-auto rounded-md border p-2 border-cyan-400/40"
            />
          </Card.Root>
        </div>

        {/* Linha horizontal para separar seções */}
        <hr className="border border-teal-900/80 my-10 w-11/12 " />

        {/* Container principal para logos e informações */}
        <div className="flex flex-col text-center items-center my-10 gap-3 p-1 py-5 gap-y-5 w-full">
          {/* Grid para organizar os elementos */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-y-20  p-1 w-10/12 ">
            {/* Primeiro cartão com logos */}
            <Card.Root className=" items-center justify-center flex flex-col mx-auto">
              <img
                src={Rect}
                alt="Logo"
                width={150}
                className="absolute opacity-70"
              />
              <img src={Logo} alt="Logo" width={200} className="z-10" />
            </Card.Root>

            {/* Segundo cartão com Discord */}
            <Card.Root className="items-center justify-center flex flex-col gap-y-2 mx-auto">
              <img src={Disc} alt="Disc" width={200} />
              <Button
                size={"lg"}
                variant={"link"}
                className=" bg-[#0C1821] rounded-md hover:bg-[#344955] font-medium w-[150px] md:w-[200px] text-white"
              >
                <a href={"/"}>Entre no Discord</a>
              </Button>
            </Card.Root>

            {/* Terceiro cartão com informações adicionais */}
            <Card.Root className="text-[20px] md:text-sm flex flex-col text-justify mx-auto gap-y-1">
              <Card.Description className="font-montserrat text-[20px] font-normal leading-[24.38px] text-left">
                <span className="text-blue-400 font-bold">+150</span> Exercícios;
              </Card.Description>
              <Card.Description className="font-montserrat text-[20px] font-normal leading-[24.38px] text-left">
                <span className="text-blue-400 font-bold">+500</span> Vídeos aulas na
                plataforma;
              </Card.Description>
              <Card.Description className="font-montserrat text-[20px] font-normal leading-[24.38px] text-left">
                Quiz para poder treinar seus conhecimentos;
              </Card.Description>
              <Card.Description className="font-montserrat text-[20px] font-normal leading-[24.38px] text-left">
                Materiais de apoio para se aprofundar e muito mais.
              </Card.Description>
            </Card.Root>
          </div>
        </div>
        <hr className="border border-teal-900/80 my-10 w-11/12 " />

        {/*Quem Somos */}
        <div className="flex flex-col text-center items-center my-10 gap-3 p-1 py-5 w-full">
          <h3 className="text-white text-[30px] md:text-[45px] lg:text-[55px] xl:text-[70px]">
            Quem somos?
          </h3>
          <p className="gap-x-1 gap-y-5 text-base lg:text-[18px] w-full md:w-3/4 font-normal">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-x-10 w-full md:w-3/5 mt-5 items-center justify-center">
            <Card.Root className="flex flex-col items-center justify-center from-inherit/80 to-inherit p-5 gap-y-5 w-full mx-auto">
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
            <Card.Root className="flex flex-col items-center justify-center from-inherit/80 to-inherit p-5 gap-y-5 w-full mx-auto">
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
            <Card.Root className="flex flex-col items-center justify-center from-inherit/80 to-inherit p-5 gap-y-5 w-full mx-auto">
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
        <div className="flex flex-col text-center font-bold items-center gap-3 p-1 py-10 gap-y-5 bg-white w-full">
          <h3 className="text-custom-color-titulo text-[20px] md:text-[30px] lg:text-[40px] ">
            Como funciona?
          </h3>
          <p className="text-custom-color-subtitulo gap-x-1 text-sm lg:text-[20px] w-3/4 md:w-1/2 font-medium">
            A Plataforma UDDTECH é uma plataforma completa para você começar ou
            se aprofundar na área de Desenvolvimento Web.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:w-8/12 my-5 items-center justify-center py-10 text-justify rounded-md">
            <Card.Root className="custom-card flex flex-col items-center p-5 gap-y-5 w-full max-w-[300px] min-h-[300px] border-x border-b border-teal-500/80 shadow-lg shadow-black mx-auto">
              <RiYoutubeFill className="w-[80px] h-[60px] md:w-[120px] md:h-[100px]" />
              <Card.Title className="custom-card-titulo font-bold text-white">
                Conteudo Gravado
              </Card.Title>
              <Card.Footer className="custom-card-conteudo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis alias similique quo ad dolore illum non saepe odit
                voluptates officiis doloribus molestias perferendis quos, amet
                officia harum repudiandae dolorem earum.
              </Card.Footer>
              <Button
                variant={"link"}
                className="w-[180px] h-[75px] rounded-[20px_20px_60px_60px] text-black bg-white text-[2.5rem] font-medium sm:text-[2rem] md:text-[2.5rem]"
              >
                <a href={"/teste"}>Acessar</a>
              </Button>
            </Card.Root>
            <Card.Root className="custom-card flex flex-col items-center p-5 gap-y-5 w-full max-w-[300px] min-h-[300px] border-x border-b border-teal-500/80 shadow-lg shadow-black mx-auto">
              <BsLightning className="w-[80px] h-[60px] md:w-[120px] md:h-[100px]" />
              <Card.Title className="custom-card-titulo font-bold  text-white">
                Exercícios
              </Card.Title>
              <Card.Footer className="custom-card-conteudo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis alias similique quo ad dolore illum non saepe odit
                voluptates officiis doloribus molestias perferendis quos, amet
                officia harum repudiandae dolorem earum.
              </Card.Footer>
              <Button
                variant={"link"}
                className="w-[180px] h-[75px] rounded-[20px_20px_60px_60px] text-black bg-white text-[2.5rem] font-medium sm:text-[2rem] md:text-[2.5rem]"
              >
                <a href={"/teste"}>Iniciar</a>
              </Button>
            </Card.Root>
            <Card.Root className="custom-card flex flex-col items-center p-5 gap-y-5 w-full max-w-[300px] min-h-[300px] border-x border-b border-teal-500/80 shadow-lg shadow-black mx-auto">
              <RiUserLine className="w-[80px] h-[60px] md:w-[120px] md:h-[100px]" />
              <Card.Title className="custom-card-titulo font-bold  text-white">
                Networking
              </Card.Title>
              <Card.Footer className="custom-card-conteudo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis alias similique quo ad dolore illum non saepe odit
                voluptates officiis doloribus molestias perferendis quos, amet
                officia harum repudiandae dolorem earum.
              </Card.Footer>
              <Button
                variant={"link"}
                className="w-[180px] h-[75px] rounded-[20px_20px_60px_60px] text-black bg-white text-[2.5rem] font-medium sm:text-[2rem] md:text-[2.5rem]"
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
        <div className="flex flex-col text-center items-center my-10 gap-3 p-1 py-5 gap-y-10 w-full">
          <h3 className="text-teal-600 text-[30px] md:text-[45px] lg:text-[55px] xl:text-[70px]">
            Artigos Publicados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5 w-11/12 items-center justify-center">
            <Card.Root className=" relative flex flex-col bg-slate-900 gap-y-3 w-full max-w-[300px] min-w-[200px] md:min-w-min mx-auto shadow-sm shadow-white">
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
                className="absolute bottom-1/3 right-0 mx-5 my-2 border border-cyan-500 p-1 rounded-full"
              />
              <Card.Description className="text-start ml-4 items-center justify-center">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="text-start ml-4 font-semibold text-white text-[16px]">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className=" relative flex flex-col bg-slate-900 gap-y-3 w-full max-w-[300px] min-w-[200px] md:min-w-min mx-auto shadow-sm shadow-white">
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
                className="absolute bottom-1/3 right-0 mx-5 my-2 border border-cyan-500 p-1 rounded-full"
              />
              <Card.Description className="text-start ml-4 items-center justify-center">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="text-start ml-4 font-semibold text-white text-[16px]">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className=" relative flex flex-col bg-slate-900 gap-y-3 w-full max-w-[300px] min-w-[200px] md:min-w-min mx-auto shadow-sm shadow-white">
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
                className="absolute bottom-1/3 right-0 mx-5 my-2 border border-cyan-500 p-1 rounded-full"
              />
              <Card.Description className="text-start ml-4 items-center justify-center">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="text-start ml-4 font-semibold text-white text-[16px]">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className=" relative flex flex-col bg-slate-900 gap-y-3 w-full max-w-[300px] min-w-[200px] md:min-w-min mx-auto shadow-sm shadow-white">
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
                className="absolute bottom-1/3 right-0 mx-5 my-2 border border-cyan-500 p-1 rounded-full"
              />
              <Card.Description className="text-start ml-4 items-center justify-center">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="text-start ml-4 font-semibold text-white text-[16px]">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className=" relative flex flex-col bg-slate-900 gap-y-3 w-full max-w-[300px] min-w-[200px] md:min-w-min mx-auto shadow-sm shadow-white">
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
                className="absolute bottom-1/3 right-0 mx-5 my-2 border border-cyan-500 p-1 rounded-full"
              />
              <Card.Description className="text-start ml-4 items-center justify-center">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="text-start ml-4 font-semibold text-white text-[16px]">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className=" relative flex flex-col bg-slate-900 gap-y-3 w-full max-w-[300px] min-w-[200px] md:min-w-min mx-auto shadow-sm shadow-white">
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
                className="absolute bottom-1/3 right-0 mx-5 my-2 border border-cyan-500 p-1 rounded-full"
              />
              <Card.Description className="text-start ml-4 items-center justify-center">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="text-start ml-4 font-semibold text-white text-[16px]">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className=" relative flex flex-col bg-slate-900 gap-y-3 w-full max-w-[300px] min-w-[200px] md:min-w-min mx-auto shadow-sm shadow-white">
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
                className="absolute bottom-1/3 right-0 mx-5 my-2 border border-cyan-500 p-1 rounded-full"
              />
              <Card.Description className="text-start ml-4 items-center justify-center">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="text-start ml-4 font-semibold text-white text-[16px]">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
            <Card.Root className=" relative flex flex-col bg-slate-900 gap-y-3 w-full max-w-[300px] min-w-[200px] md:min-w-min mx-auto shadow-sm shadow-white">
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
                className="absolute bottom-1/3 right-0 mx-5 my-2 border border-cyan-500 p-1 rounded-full"
              />
              <Card.Description className="text-start ml-4 items-center justify-center">
                Daniel Oliveira
                <span className="bg-green-500 rounded-full px-[3px] text-transparent ml-1 text-[7px]">
                  -
                </span>
              </Card.Description>
              <Card.Description className="text-start ml-4 font-semibold text-white text-[16px]">
                Como começar a estudar JavaScript?
              </Card.Description>
              <Card.Footer className="text-center justify-center">
                53k Views - 2 week ago
              </Card.Footer>
            </Card.Root>
          </div>
          <Button
            variant={"link"}
            className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white border-2 border-green-500 shadow-inner shadow-green-300 px-8 md:px-12 hover:shadow-green-200 hover:border-green-400 hover:from-green-400 min-w-[150px] text-lg"
          >
            <a href={"/testes"}>Ver Mais</a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
