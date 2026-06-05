import profileImage from "../assets/images/profileImage.jpeg";
import ToolIcon from "../components/ToolIcon";

import bgImage from "../assets/images/bgImage.jpg";

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
      text-white `}
    >
      <div
        id="background"
        className={` w-3/1 h-3/1 fixed top-1/2 left-1/2 -translate-1/2 z-0 animate-[spin_25s_linear_infinite]`}
      ></div>

      <div
        id="bgImage"
        className={` flex flex-col items-center justify-center z-1 w-full h-75 border-b-2 border-b-indigo-600`}
      >
        <div
          className={` flex flex-col items-center justify-center bg-linear-to-t from-black to-transparent w-full h-full `}
        >
          <img
            src={profileImage}
            alt=""
            className={` aspect-square h-50 rounded-full border-3 border-indigo-500`}
          />

          <span className={` text-4xl font-bold `}>Lucas Ferreira Silva</span>
        </div>
      </div>

        <h1 className={` z-1 text-3xl font-bold `}>Meus Projetos</h1>

      <div className={` flex flex-col items-center z-1 gap-6 w-full px-4 lg:flex-row `}>
        {projects.map((project) => {
          return (
            <article
              className={` flex w-full h-full py-5 rounded-2xl relative scale-95 hover:scale-100 hover:brightness-110 duration-500 overflow-hidden `}
              onClick={() => (window.location.href = "https://" + project.link)}
            >
              <div
                id="border"
                className={` w-4/1 h-4/1 absolute top-1/2 left-1/2 -translate-1/2 z-0 animate-[spin_4s_linear_infinite_reverse]`}
              ></div>

              <div
                className={` w-full h-full scale-x-99 scale-y-97 bg-linear-9 from-gray-700 to-gray-900  absolute top-1/2 left-1/2 -translate-1/2 z-1 rounded-2xl`}
              ></div>

              <div
                className={` flex flex-col items-center w-1/4 z-2 mt-5 `}
              >
                <i className={` ${project.icon} text-8xl z-1 `}></i>
              </div>

              <div
                className={` flex flex-col w-3/4 h-full py-8 text-justify z-2 `}
              >
                <h1 className={` text-4xl font-bold `}>{project.title}</h1>
                <p className={` pl-3 pt-2 w-9/10 text-wrap `}>{project.description}</p>

                <div
                  className={` flex flex-wrap items-center justify-left w-9/10 mt-3
                 bg-gray-900 rounded-xl `}
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

        <h1 className={` text-3xl font-bold z-1`}>Redes Sociais</h1>

      <div></div>
    </section>
  );
}
export default Portfolio;
