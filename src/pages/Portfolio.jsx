import { useState } from "react";
import profileImage from "../assets/images/profileImage.png";
import Loading from "../components/Loading";
import ProjectList from "../components/ProjectList";

function Portfolio() {
  const projects = [
    {
      icon: "fas fa-calculator",
      color: "text-green-500",
      title: "Calculadora",
      description:
        "Um site que replica o sistema de uma calculadora de celular criado durante uma aula no Senac após solicitação do professor.",
      tools: ["html", "css", "js", "reactjs", "tailwind"],
      link: "https://calculator-lucasdev.vercel.app",
    },
    {
      icon: "fas fa-boxes-stacked",
      color: "text-blue-500",
      title: "Orgrise",
      description:
        "Um site focado na organicação e gerenciamento de estoque criado durante um trabalho em grupo no Senac após solicitação do professor.",
      tools: ["html", "css", "js", "reactjs", "tailwind"],
      link: "https://orgrise.vercel.app",
    },
  ];
  const [loading, setLoading] = useState(false);

  return (
    <section
      className={`flex flex-col items-center w-full h-full
      text-white relative `}
    >
      <Loading loading={loading}></Loading>
      <header
        className={` flex flex-col items-center w-full py-8 h-max bgImage1 bg-cover bg-center relative saturate-150 contrast-115 `}
      >
        <div
          className={
            ` w-50 h-50 rounded-full saturate-70 contrast-85 relative z-1 ` +
            " gradientBorder before:p-1.5 before:-hue-rotate-50 before:brightness-100 "
          }
        >
          <img src={profileImage} alt="" />
        </div>

        <div
          className={
            ` w-full h-full absolute left-0 top-0 bg-linear-0 from-black to-70% ` +
            " gradientBorder before:pb-1.5 "
          }
        ></div>

        <span className={` text-4xl font-bold z-1 `}>Lucas Ferreira Silva</span>
      </header>

      <main
        className={` flex flex-col items-center gap-10 py-6 flex-2/4 w-full relative `}
      >
        <div
          className={` w-5/1 pt-[500%] gradientBg fixed top-1/2 left-1/2 -translate-1/2 -z-100 `}
        ></div>

        <div className={` flex flex-col items-center gap-5 `}>
          <h1 className={` text-5xl font-bold `}>QUEM SOU EU?</h1>

          <div
            className={
              ` flex flex-col items-center max-w-175 h-full p-5 mx-5 rounded-2xl bg-linear-45 from-gray-800/75 to-gray-950/75 relative ` +
              " gradientBorder before:p-2 before:hue-rotate-55 "
            }
          >
            <p className={` w-full text-2xl text-justify `}>
              Sou estudante do curso Técnico em Informática para Internet no
              Senac e apaixonado por tecnologia e programação. Busco
              constantemente expandir meus conhecimentos de forma autodidata por
              meio de documentações, projetos práticos e conteúdos educacionais
              no YouTube. Gosto de desenvolver diferentes tipos de projetos,
              incluindo sites, programas e jogos, aplicando criatividade e
              lógica para transformar ideias em soluções funcionais.
            </p>

            <i
              className={` fas fa-gamepad absolute top-0 left-0 -translate-1/2 text-2xl text-blue-500 brightness-90 `}
            ></i>
            <i
              className={` fas fa-laptop-code absolute top-full left-full -translate-1/2 text-2xl text-emerald-500 `}
            ></i>
          </div>
        </div>
        <ProjectList projects={projects} setLoading={setLoading}></ProjectList>
      </main>

      <footer
        className={
          ` flex flex-col items-center justify-evenly gap-5 py-4 bg-linear-180 from-black to-transparent from-20% w-full relative ` +
          " gradientBorder before:pt-1.5 "
        }
      >
        <h1 className={` text-3xl font-bold `}>Redes Sociais</h1>

        <nav className={` flex gap-4 text-4xl `}>
          <button
            className={
              ` flex items-center justify-center aspect-square rounded-full p-1.5 scale-90 hover:scale-100 duration-500 ` +
              " gradientBorder before:p-1 before:grayscale-100 before:brightness-1000 "
            }
            onClick={() => {
              setLoading(true);
              window.location.href = "https://github.com/lucasdevsilva26";
            }}
          >
            <i className={`fab fa-github`}></i>
          </button>

          <button
            className={
              ` flex items-center justify-center aspect-square rounded-full p-1.5 instagram scale-90 hover:scale-100 duration-500 ` +
              " gradientBorder before:p-1 before:hue-rotate-25 before:brightness-125 "
            }
            onClick={() => {
              setLoading(true);
              window.location.href = "https://www.instagram.com/lucassilvaz18/";
            }}
          >
            <i className={` fab fa-instagram `}></i>
          </button>

          <button
            className={
              ` flex items-center justify-center aspect-square rounded-full p-1.5 scale-90 hover:scale-100 duration-500 ` +
              " gradientBorder before:p-1 before:hue-rotate-80 before:brightness-125 "
            }
            onClick={() => {
              setLoading(true);
              window.location.href =
                "https://www.youtube.com/@LucasFerreiraSilva-h3t";
            }}
          >
            <i
              className={` fab fa-youtube text-red-600 brightness-90 -hue-rotate-1 `}
            ></i>
          </button>
        </nav>
      </footer>
    </section>
  );
}
export default Portfolio;
