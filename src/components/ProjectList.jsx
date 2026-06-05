import ToolIcon from "./ToolIcon";

function ProjectList({ projects }) {
  return (
    <>
      <h1 className={` z-1 text-3xl font-bold `}>Meus Projetos</h1>

      <div
        className={` flex flex-col lg:flex-row items-center gap-6 w-full px-6 z-1 `}
      >
        {projects.map((project) => {
          return (
            <article
              className={` flex w-full h-84 py-5 rounded-2xl relative scale-95 hover:scale-100 hover:brightness-110 duration-500 overflow-hidden cursor-pointer `}
              onClick={() => (window.location.href = "https://" + project.link)}
            >
              <div
                id="border"
                className={` w-4/1 h-4/1 absolute top-1/2 left-1/2 -translate-1/2 z-0 animate-[spin_4s_linear_infinite_reverse]`}
              ></div>

              <section
                className={` flex flex-col w-full scale-98 bg-linear-9 from-gray-700 to-gray-900  absolute top-1/2 left-1/2 -translate-1/2 p-4 z-1 rounded-2xl overflow-hidden`}
              >
                <div className={` flex h-max pb-5`}>
                  <div
                    className={` flex-1 flex flex-col items-center justify-center z-2 `}
                  >
                    <i
                      className={` flex ${project.icon} py-6 bg-gray-600 text-8xl rounded-2xl z-1 `}
                    ></i>
                  </div>

                  <div className={` flex-2 flex flex-col text-justify z-2 `}>
                    <h1 className={` text-4xl font-bold `}>{project.title}</h1>
                    <p className={` pl-3 pt-2 w-9/10 text-wrap `}>
                      {project.description}
                    </p>
                  </div>
                </div>

                <nav
                  className={` flex flex-wrap items-center justify-left
                 bg-gray-900 rounded-xl `}
                >
                  <ToolIcon icon={0}></ToolIcon>
                  <ToolIcon icon={1}></ToolIcon>
                  <ToolIcon icon={2}></ToolIcon>
                  <ToolIcon icon={3}></ToolIcon>
                  <ToolIcon icon={4}></ToolIcon>
                </nav>

                <i
                  className={` fas fa-arrow-trend-up absolute right-0 -translate-x-1/2 translate-y-1/2 text-2xl z-2`}
                ></i>
              </section>
            </article>
          );
        })}
      </div>
    </>
  );
}
export default ProjectList;
