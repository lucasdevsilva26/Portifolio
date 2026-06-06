import ToolIcon from "./ToolIcon";

function ProjectList({ projects, setLoading }) {
  return (
    <>
      <div
        className={
          ` flex flex-col gap-2 w-full py-4 bg-linear-0 from-gray-900/75 to-gray-800/75 text-center text-xl relative ` +
          " gradientBorder before:py-1 "
        }
      >
        <h1 className={` text-4xl font-bold `}>MEUS PROJETOS</h1>
        <span className={` flex items-center justify-center gap-1 px-5 `}>
          <i className={` fas fa-triangle-exclamation text-amber-400 `}></i>
          Clique no projeto para ser redirecionado
          <i className={` fas fa-triangle-exclamation text-amber-400`}></i>
        </span>
      </div>

      <div
        className={` flex flex-col lg:flex-row items-center gap-6 w-full px-2`}
      >
        {projects.map((project) => {
          return (
            <article
              key={crypto.randomUUID()}
              className={
                ` flex flex-col w-full max-w-100 h-100 p-3 rounded-2xl relative scale-95 hover:scale-100 hover:brightness-115 duration-500 overflow-hidden bg-linear-45 from-gray-700 to-gray-900 ` +
                " gradientBorder before:p-1.5 "
              }
              onClick={() => {
                setLoading(true);
                window.location.href = project.link;
              }}
            >
              <div
                className={` flex flex-col gap-2 h-full p-2 bg-gray-700 rounded-xl cursor-pointer `}
              >
                <div
                  className={` flex-1 flex items-center justify-center gap-2 `}
                >
                  <i
                    className={` flex ${project.icon} ${project.color} text-3xl rounded-2xl `}
                  ></i>
                  <h1 className={` text-4xl font-bold `}>{project.title}</h1>
                  <i
                    className={` flex ${project.icon} ${project.color} text-3xl rounded-2xl `}
                  ></i>
                </div>

                <div
                  className={` flex-2 flex text-justify p-2 wrap-break-word bg-gray-800 rounded-xl overflow-hidden `}
                >
                  <p className={` pl-3 pt-2 w-9/10 text-wrap `}>
                    {project.description}
                  </p>
                </div>
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
