import React from "react";
import "../../css/globals.css";
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
    <main className="home-page">
      {/*Ajustar resolução de img*/}
      {/*Introdução */}
      <section className="intro-section">
        <Card.Root className="intro-card-1">
          <Card.Title className="intro-card-1-title">
            CONHEÇA A<span className="intro-span-title"> NOSSA COMUNIDADE</span>
          </Card.Title>
          <Card.Description className="intro-card-1-description">
            Bem-vindo à
            <span className="intro-span-description"> UDDTECH COMMUNITY.</span>{" "}
            Somos um grupo apaixonado por tecnologia, conectando estudantes e
            entusiadas da área de Tecnologia da Informação em um
            <span className="intro-span-description"> ambiente virtual.</span>
          </Card.Description>
          <Card.Description className="intro-card-1-description">
            Nossa Missão é Promover a troca de apoio mútuo e o crescimento
            Profissional em meio à modalidade de{" "}
            <span className="intro-span-description">ensino a distância.</span>
          </Card.Description>
        </Card.Root>
        <Card.Root className="intro-card-2">
          <img
            src={img3}
            alt="img 3"
            width={300}
            objectFit="contain"
            priority
            className="intro-card-2-img-1"
          />
          <img
            src={img2}
            alt="img 2"
            width={300}
            objectFit="contain"
            priority
            className="intro-card-2-img-2"
          />
        </Card.Root>
      </section>
      <hr className="divider" />
      {/*Logos / Discord */}
      <section className="logos-section">
        <div className="logos-grid">
          <Card.Root className="logos-card-1">
            <img
              src={Rect}
              alt="Logo"
              width={150}
              className="absolute opacity-70"
            />
            <img src={Logo} alt="Logo" width={200} className="z-10" />
          </Card.Root>
          <Card.Root className="logos-card-2">
            <img src={Disc} alt="Disc" width={200} />
            <Button
              size={"lg"}
              variant={"none"}
              className="logos-card-2-button"
            >
              <a href={"/"}>Entre no Discord</a>
            </Button>
          </Card.Root>
          <Card.Root className="logos-card-3">
            <Card.Description>
              <span className="logos-card-3-span">+150</span> Execícios;
            </Card.Description>
            <Card.Description>
              <span className="logos-card-3-span">+500</span> Videos aulas na
              plataforma;
            </Card.Description>
            <Card.Description>
              Quiz para poder treinar seus conhecimentos;
            </Card.Description>
            <Card.Description>
              Materiais de apoio para se aprofundar e muito mais.
            </Card.Description>
          </Card.Root>
        </div>
      </section>
      <hr className="divider" />
      {/*Quem Somos */}
      <section className="quemsomos-section">
        <h3 className="quemsomos-header">Quem somos?</h3>
        <p className="quemsomos-apresentação">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          dignissimos eaque unde! Nisi animi, vel modi, iusto dolor porro
          similique non omnis quo atque doloremque quod commodi. Sit, quidem
          laborum.
        </p>
        <div className="quemsomos-grid">
          <Card.Root className="quemsomos-card">
            <img
              src={Perfil}
              alt="Daniel"
              width={100}
              className="quemsomos-card-img "
            />
            <Card.Description className="quemsomos-card-description">
              Daniel Oliveira
            </Card.Description>
            <Card.Footer>Software Engennier</Card.Footer>
          </Card.Root>
          <Card.Root className="quemsomos-card">
            <img
              src={Perfil}
              alt="Daniel"
              width={100}
              className="quemsomos-card-img "
            />
            <Card.Description className="quemsomos-card-description">
              Daniel Oliveira
            </Card.Description>
            <Card.Footer>Software Engennier</Card.Footer>
          </Card.Root>
          <Card.Root className="quemsomos-card">
            <img
              src={Perfil}
              alt="Daniel"
              width={100}
              className="quemsomos-card-img "
            />
            <Card.Description className="quemsomos-card-description">
              Daniel Oliveira
            </Card.Description>
            <Card.Footer>Software Engennier</Card.Footer>
          </Card.Root>
        </div>
      </section>
      {/*img */}
      <img
        src={Wave}
        alt="Wave"
        width={"1000"}
        priority
        className="wave-image"
      />
      {/*img */}
      {/* Como Funciona*/}
      <section className="como-section">
        <h3 className="como-header">Como funciona?</h3>
        <p className="como-apresentação">
          A Plataforma UDDTECH é uma plataforma completa para você começar ou se
          aprofundar na área de Desenvolvimento Web.
        </p>
        <div className="como-grid">
          <Card.Root className="como-card">
            <RiYoutubeFill className="como-icon" />
            <Card.Title className="como-title">Conteudo Gravado</Card.Title>
            <Card.Footer>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              alias similique quo ad dolore illum non saepe odit voluptates
              officiis doloribus molestias perferendis quos, amet officia harum
              repudiandae dolorem earum.
            </Card.Footer>
            <Button variant={"none"} className="como-button">
              <a href={"/teste"}>Acessar</a>
            </Button>
          </Card.Root>
          <Card.Root className="como-card">
            <BsLightning className="como-icon" />
            <Card.Title className="como-title">Exercícios</Card.Title>
            <Card.Footer>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              alias similique quo ad dolore illum non saepe odit voluptates
              officiis doloribus molestias perferendis quos, amet officia harum
              repudiandae dolorem earum.
            </Card.Footer>
            <Button variant={"none"} className="como-button">
              <a href={"/teste"}>Iniciar</a>
            </Button>
          </Card.Root>
          <Card.Root className="como-card">
            <RiUserLine className="como-icon" />
            <Card.Title className="como-title">Networking</Card.Title>
            <Card.Footer>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              alias similique quo ad dolore illum non saepe odit voluptates
              officiis doloribus molestias perferendis quos, amet officia harum
              repudiandae dolorem earum.
            </Card.Footer>
            <Button variant={"none"} className="como-button">
              <a href={"/teste"}>Acessar</a>
            </Button>
          </Card.Root>
        </div>
      </section>
      {/*img */}
      <img
        src={Wave}
        alt="Wave"
        width={"1000"}
        priority
        className="wave-image-2"
      />
      {/*img */}
      {/*Artigos Publicados */}
      <section className="artigos-section">
        <h3 className="artigos-title">Artigos Publicados</h3>
        <div className="artigos-grid">
          <Card.Root className="artigos-card">
            <span className="artigos-card-span">7 min</span>
            <img
              src={img5}
              alt="artigo"
              width={1000}
              height={1000}
              className="artigos-card-image"
            />
            <img
              src={Perfil}
              alt="Daniel"
              width={70}
              height={70}
              className="artigos-card-perfil"
            />
            <Card.Description className="artigos-card-description-1">
              Daniel Oliveira
              <span className="artigos-card-description-1-span">-</span>
            </Card.Description>
            <Card.Description className="artigos-card-description-2">
              Como começar a estudar JavaScript?
            </Card.Description>
            <Card.Footer className="artigos-card-footer">
              53k Views - 2 week ago
            </Card.Footer>
          </Card.Root>
          <Card.Root className="artigos-card">
            <span className="artigos-card-span">7 min</span>
            <img
              src={img5}
              alt="artigo"
              width={1000}
              height={1000}
              className="artigos-card-image"
            />
            <img
              src={Perfil}
              alt="Daniel"
              width={70}
              height={70}
              className="artigos-card-perfil"
            />
            <Card.Description className="artigos-card-description-1">
              Daniel Oliveira
              <span className="artigos-card-description-1-span">-</span>
            </Card.Description>
            <Card.Description className="artigos-card-description-2">
              Como começar a estudar JavaScript?
            </Card.Description>
            <Card.Footer className="artigos-card-footer">
              53k Views - 2 week ago
            </Card.Footer>
          </Card.Root>
          <Card.Root className="artigos-card">
            <span className="artigos-card-span">7 min</span>
            <img
              src={img5}
              alt="artigo"
              width={1000}
              height={1000}
              className="artigos-card-image"
            />
            <img
              src={Perfil}
              alt="Daniel"
              width={70}
              height={70}
              className="artigos-card-perfil"
            />
            <Card.Description className="artigos-card-description-1">
              Daniel Oliveira
              <span className="artigos-card-description-1-span">-</span>
            </Card.Description>
            <Card.Description className="artigos-card-description-2">
              Como começar a estudar JavaScript?
            </Card.Description>
            <Card.Footer className="artigos-card-footer">
              53k Views - 2 week ago
            </Card.Footer>
          </Card.Root>
          <Card.Root className="artigos-card">
            <span className="artigos-card-span">7 min</span>
            <img
              src={img5}
              alt="artigo"
              width={1000}
              height={1000}
              className="artigos-card-image"
            />
            <img
              src={Perfil}
              alt="Daniel"
              width={70}
              height={70}
              className="artigos-card-perfil"
            />
            <Card.Description className="artigos-card-description-1">
              Daniel Oliveira
              <span className="artigos-card-description-1-span">-</span>
            </Card.Description>
            <Card.Description className="artigos-card-description-2">
              Como começar a estudar JavaScript?
            </Card.Description>
            <Card.Footer className="artigos-card-footer">
              53k Views - 2 week ago
            </Card.Footer>
          </Card.Root>
          <Card.Root className="artigos-card">
            <span className="artigos-card-span">7 min</span>
            <img
              src={img5}
              alt="artigo"
              width={1000}
              height={1000}
              className="artigos-card-image"
            />
            <img
              src={Perfil}
              alt="Daniel"
              width={70}
              height={70}
              className="artigos-card-perfil"
            />
            <Card.Description className="artigos-card-description-1">
              Daniel Oliveira
              <span className="artigos-card-description-1-span">-</span>
            </Card.Description>
            <Card.Description className="artigos-card-description-2">
              Como começar a estudar JavaScript?
            </Card.Description>
            <Card.Footer className="artigos-card-footer">
              53k Views - 2 week ago
            </Card.Footer>
          </Card.Root>
          <Card.Root className="artigos-card">
            <span className="artigos-card-span">7 min</span>
            <img
              src={img5}
              alt="artigo"
              width={1000}
              height={1000}
              className="artigos-card-image"
            />
            <img
              src={Perfil}
              alt="Daniel"
              width={70}
              height={70}
              className="artigos-card-perfil"
            />
            <Card.Description className="artigos-card-description-1">
              Daniel Oliveira
              <span className="artigos-card-description-1-span">-</span>
            </Card.Description>
            <Card.Description className="artigos-card-description-2">
              Como começar a estudar JavaScript?
            </Card.Description>
            <Card.Footer className="artigos-card-footer">
              53k Views - 2 week ago
            </Card.Footer>
          </Card.Root>
          <Card.Root className="artigos-card">
            <span className="artigos-card-span">7 min</span>
            <img
              src={img5}
              alt="artigo"
              width={1000}
              height={1000}
              className="artigos-card-image"
            />
            <img
              src={Perfil}
              alt="Daniel"
              width={70}
              height={70}
              className="artigos-card-perfil"
            />
            <Card.Description className="artigos-card-description-1">
              Daniel Oliveira
              <span className="artigos-card-description-1-span">-</span>
            </Card.Description>
            <Card.Description className="artigos-card-description-2">
              Como começar a estudar JavaScript?
            </Card.Description>
            <Card.Footer className="artigos-card-footer">
              53k Views - 2 week ago
            </Card.Footer>
          </Card.Root>
          <Card.Root className="artigos-card">
            <span className="artigos-card-span">7 min</span>
            <img
              src={img5}
              alt="artigo"
              width={1000}
              height={1000}
              className="artigos-card-image"
            />
            <img
              src={Perfil}
              alt="Daniel"
              width={70}
              height={70}
              className="artigos-card-perfil"
            />
            <Card.Description className="artigos-card-description-1">
              Daniel Oliveira
              <span className="artigos-card-description-1-span">-</span>
            </Card.Description>
            <Card.Description className="artigos-card-description-2">
              Como começar a estudar JavaScript?
            </Card.Description>
            <Card.Footer className="artigos-card-footer">
              53k Views - 2 week ago
            </Card.Footer>
          </Card.Root>
          <Card.Root className="artigos-card">
            <span className="artigos-card-span">7 min</span>
            <img
              src={img5}
              alt="artigo"
              width={1000}
              height={1000}
              className="artigos-card-image"
            />
            <img
              src={Perfil}
              alt="Daniel"
              width={70}
              height={70}
              className="artigos-card-perfil"
            />
            <Card.Description className="artigos-card-description-1">
              Daniel Oliveira
              <span className="artigos-card-description-1-span">-</span>
            </Card.Description>
            <Card.Description className="artigos-card-description-2">
              Como começar a estudar JavaScript?
            </Card.Description>
            <Card.Footer className="artigos-card-footer">
              53k Views - 2 week ago
            </Card.Footer>
          </Card.Root>
        </div>
        <Button
          variant={"none"}
          className="artigos-button"
        >
          <a href={"/testes"}>Ver Mais</a>
        </Button>
      </section>
    </main>
  );
}

export default HomePage;
