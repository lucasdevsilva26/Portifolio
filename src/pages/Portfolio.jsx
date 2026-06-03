import profileImage from "../assets/images/profileImage.jpeg";

function Portfolio() {
  return (
    <section
      className={`flex flex-col items-center gap-10 w-full h-full
        py-10 text-white `}
    >
      <div className={` w-full h-full bg-linear-45 from-blue-950 to-blue-700 brightness-40 saturate-70 fixed top-0 left-0 z-0`}></div>

      <div className={` flex flex-col items-center z-1 `}>
        <img
          src={profileImage}
          alt=""
          className={` aspect-square h-50 rounded-full border-2 shadow-white `}
        />

        <h1 className={` text-4xl font-bold `}>Lucas Ferreira Silva</h1>
        <p className={` text-2xl `}>Desenvolvedor</p>
      </div>

      <div className={` z-1 `}>
        <article
          className={` flex w-200 h-50 bg-gray-600 rounded-2xl relative scale-95 hover:scale-100 hover:brightness-115 duration-500 `}
        >
          <div
            className={` flex flex-col items-center justify-center w-1/4 h-full `}
          >
            <i className={` fas fa-cloud text-8xl `}></i>
          </div>

          <div className={` flex flex-col w-1/1 h-full py-8 text-justify `}>
            <h1 className={` text-4xl font-bold `}>Calculadora</h1>
            <p className={` pl-3 pt-2 w-8/10 `}>
              Um site que replica o sistema de uma calculadora de celular criado
              durante uma aula no Senac após solicitação do professor.
            </p>

            <div className={` flex `}>
              <div
                className={` w-max m-2 p-2 rounded-4xl bg-sky-500 font-bold `}
              >
                <i className={` fab fa-react `}></i> ReactJS
              </div>

              <div
                className={` w-max m-2 p-2 rounded-4xl bg-orange-500 font-bold `}
              >
                <i className={` fab fa-html5 `}></i>HTML
              </div>

              <div
                className={` w-max m-2 p-2 rounded-4xl bg-blue-600 font-bold `}
              >
                <i className={` fab fa-css `}></i> CSS
              </div>
            </div>
          </div>

          <i
            className={` fas fa-arrow-trend-up absolute right-0 -translate-x-1/1 translate-y-1/1 `}
          ></i>
        </article>
      </div>

      <div></div>
    </section>
  );
}
export default Portfolio;
