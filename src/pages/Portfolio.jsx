import { useEffect, useState } from "react";
import profileImage from "../assets/images/profileImage.jpeg";
import ToolIcon from "../components/ToolIcon";

function Portfolio() {
  const projects = [
    {
      icon: "fas fa-calculator",
      title: "Calculadora",
      description:
        "Um site que replica o sistema de uma calculadora de celular criado durante uma aula no Senac após solicitação do professor.",
      tools: ["html", "css", "js", "reactjs", "tailwind"],
      link: "",
    },
    {
      icon: "fas fa-boxes-stacked",
      title: "Orgrise",
      description:
        "Um site focado na organicação e gerenciamento de estoque criado durante um trabalho em grupo no Senac após solicitação do professor.",
      tools: ["html", "css", "js", "reactjs", "tailwind"],
      link: "orgrise.vercel.app",
    },
  ];

  return (
    <section
      className={`flex flex-col items-center gap-10 w-full h-full
        py-10 text-white `}
    >
      <div
      id="background"
        className={` w-3/1 h-3/1 fixed top-1/2 left-1/2 -translate-1/2 z-0 animate-[spin_10s_linear_infinite]`}
      ></div>

      <div className={` flex flex-col items-center z-1 `}>
        <img
          src={profileImage}
          alt=""
          className={` aspect-square h-50 rounded-full border-2 shadow-white `}
        />

        <h1 className={` text-4xl font-bold `}>Lucas Ferreira Silva</h1>
        <p className={` text-2xl `}>Desenvolvedor</p>
      </div>

      <div className={` flex flex-col z-1 gap-6 `}>
        {projects.map((project) => {
          return (
            <article
              className={` flex w-200 h-max py-5 rounded-2xl relative scale-95 hover:scale-100 hover:brightness-110 duration-500 overflow-hidden `}
              onClick={() => (window.location.href = "https://" + project.link)}
            >
              <div
              id="border"
                className={` w-4/1 h-4/1 absolute top-1/2 left-1/2 -translate-1/2 z-0 animate-[spin_4s_linear_infinite_reverse]`}
              ></div>

              <div
                className={` w-full h-full scale-x-99 scale-y-97 bg-linear-130 from-gray-700 to-gray-800  absolute top-1/2 left-1/2 -translate-1/2 z-1 rounded-2xl`}
              ></div>

              <div
                className={` flex flex-col items-center justify-center w-1/4 z-2 `}
              >
                <i className={` ${project.icon} text-8xl z-1 `}></i>
              </div>

              <div
                className={` flex flex-col w-1/1 h-full py-8 text-justify z-2 `}
              >
                <h1 className={` text-4xl font-bold `}>{project.title}</h1>
                <p className={` pl-3 pt-2 w-8/10 `}>{project.description}</p>

                <div
                  className={` flex items-center w-max h-10 mt-3
                 bg-gray-200 rounded-full `}
                >
                  <ToolIcon icon={0}></ToolIcon>
                  <ToolIcon icon={1}></ToolIcon>
                  <ToolIcon icon={2}></ToolIcon>
                  <ToolIcon icon={3}></ToolIcon>
                  <ToolIcon icon={4}></ToolIcon>
                </div>
              </div>

              <i
                className={` fas fa-arrow-trend-up absolute right-0 -translate-x-1/1 translate-y-1/1 text-2xl z-2`}
              ></i>
            </article>
          );
        })}
      </div>

      <div></div>
    </section>
  );
}
export default Portfolio;
