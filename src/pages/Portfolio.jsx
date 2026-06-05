import profileImage from "../assets/images/profileImage.png";
import ProjectList from "../components/ProjectList";

function Portfolio() {
  const projects = [
    {
      icon: "fas fa-calculator",
      title: "Calculadora",
      description:
        "Um site que replica o sistema de uma calculadora de celular criado durante uma aula no Senac após solicitação do professor.",
      tools: ["html", "css", "js", "reactjs", "tailwind"],
      link: "calculator-lucasdev.vercel.app",
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
      text-white relative `}
    >
      <header className={` flex flex-col items-center w-full `}>
        <div
          id="background"
          className={` w-3/1 h-3/1 fixed top-1/2 left-1/2 -translate-1/2 z-0 animate-[spin_25s_linear_infinite]`}
        ></div>

        <div
          id="bgImage"
          className={` flex flex-col items-center justify-center z-1 w-full border-b-2 border-b-indigo-600`}
        >
          <div
            className={` flex flex-col items-center justify-center bg-linear-to-t from-black to-transparent w-full h-full `}
          >
            <div
              className={` relative w-3/7 aspect-square overflow-hidden rounded-full my-4 `}
            >
              <div
                id="border"
                className={` w-4/1 h-4/1 absolute top-1/2 left-1/2 -translate-1/2 z-0 animate-[spin_4s_linear_infinite_reverse]`}
              ></div>

              <img
                src={profileImage}
                alt=""
                className={` w-96/100 h-96/100 rounded-full absolute top-1/2 left-1/2 -translate-1/2 `}
              />
            </div>

            <span className={` text-4xl font-bold mb-7 `}>
              Lucas Ferreira Silva
            </span>
          </div>
        </div>
      </header>

      <main className={` flex flex-col items-center gap-10 flex-2/4 w-full `}>
        <ProjectList projects={projects}></ProjectList>
      </main>

      <footer
        className={` flex flex-col items-center justify-evenly gap-5 py-4 bg-linear-180 from-black to-transparent w-full border-t-2 border-indigo-600 z-1 `}
      >
        <h1 className={` text-3xl font-bold `}>Redes Sociais</h1>

        <nav className={` flex gap-4 z-1 text-4xl `}>
          <button
            className={` flex items-center justify-center aspect-square rounded-full  border-2 border-indigo-600 p-1 scale-90 hover:scale-100 duration-500 `}
            onClick={() => {
              window.location.href = "https://github.com/lucasdevsilva26";
            }}
          >
            <i className={`fab fa-github`}></i>
          </button>

          <button
            className={` flex items-center justify-center aspect-square rounded-full  border-2 border-pink-600 p-1 instagram scale-90 hover:scale-100 duration-500 `}
            onClick={() => {
              window.location.href = "https://www.instagram.com/lucassilvaz18/";
            }}
          >
            <i className={` fab fa-instagram `}></i>
          </button>

          <button
            className={` flex items-center justify-center aspect-square rounded-full  border-2 border-red-600 p-1 scale-90 hover:scale-100 duration-500 `}
            onClick={() => {
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
