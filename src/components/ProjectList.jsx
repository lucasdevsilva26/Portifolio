import ToolIcon from "./ToolIcon";

function ProjectList({ projects, setLoading }) {
  return (
    <>
      <h1 className={` z-1 text-3xl font-bold `}>Meus Projetos</h1>

      <div
        className={` flex flex-col lg:flex-row items-center gap-6 w-full px-6 z-1 `}
      >
        {projects.map((project) => {
          return (
            <article
              key={crypto.randomUUID()}
              className={
                ` flex flex-col w-110 h-87 p-2 rounded-2xl relative scale-95 hover:scale-100 hover:brightness-110 duration-500 overflow-hidden ` +
                " cardAnimatedBorder border-4 border-transparent "
              }
            >
              <div
                className={` flex gap-2 h-full p-2 bg-gray-700 rounded-xl scale-98 hover:scale-100 hover:brightness-125 duration-500 cursor-pointer `}
                onClick={() => {
                  setLoading(true);
                  window.location.href = project.link;
                }}
              >
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

                <i
                  className={` fas fa-arrow-trend-up absolute top-0 right-0 -translate-x-full translate-y-full text-2xl z-2`}
                ></i>
              </div>

              <nav
                className={` flex flex-wrap items-center justify-left
                 bg-gray-900 rounded-xl `}
              >
                <ToolIcon icon={0} setLoading={setLoading}></ToolIcon>
                <ToolIcon icon={1} setLoading={setLoading}></ToolIcon>
                <ToolIcon icon={2} setLoading={setLoading}></ToolIcon>
                <ToolIcon icon={3} setLoading={setLoading}></ToolIcon>
                <ToolIcon icon={4} setLoading={setLoading}></ToolIcon>
              </nav>
            </article>
          );
        })}
      </div>
    </>
  );
}
export default ProjectList;
