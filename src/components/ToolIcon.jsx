function ToolIcon({ icon }) {
  const icons = [
    {
      name: "HTML",
      container: ` w-max m-2 p-2 rounded-4xl text-orange-500 font-bold `,
      icon: ` fab fa-html5 `,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
      name: "CSS",
      container: "w-max m-2 p-2 rounded-4xl text-purple-400 font-bold ",
      icon: "fab fa-css",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      container: "w-max m-2 p-2 rounded-4xl text-amber-400 font-bold",
      icon: "fab fa-js",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      name: "ReactJS",
      container: "w-max m-2 p-2 rounded-4xl text-sky-500 font-bold",
      icon: "fab fa-react",
      link: "https://pt-br.react.dev/",
    },
    {
      name: "Tailwind",
      container: "w-max m-2 p-2 rounded-4xl text-blue-500 font-bold",
      icon: "fab fa-tailwind-css",
      link: "https://tailwindcss.com/",
    },
  ];

  return (
    <button
      className={
        icons[icon].container +
        ` bg-white `
      }
    >
      <i className={icons[icon].icon}></i>
      {icons[icon].name}
    </button>
  );
}
export default ToolIcon;
