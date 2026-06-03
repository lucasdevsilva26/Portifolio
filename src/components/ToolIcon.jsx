function ToolIcon({ icon }) {
  const icons = [
    {
      name: "HTML",
      container: ` w-max m-2 p-2 rounded-4xl text-orange-500 font-bold `,
      icon: ` fab fa-html5 `,
    },
    {
      name: "CSS",
      container:
        "w-max m-2 p-2 rounded-4xl text-blue-400 font-bold hue-rotate-45 brightness-90",
      icon: "fab fa-css",
    },
    {
      name: "JavaScript",
      container: "w-max m-2 p-2 rounded-4xl text-amber-400 font-bold",
      icon: "fab fa-js",
    },
    {
      name: "ReactJS",
      container: "w-max m-2 p-2 rounded-4xl text-sky-500 font-bold",
      icon: "fab fa-react",
    },
    {
      name: "Tailwind",
      container: "w-max m-2 p-2 rounded-4xl text-blue-500 font-bold",
      icon: "fab fa-tailwind-css",
    },
  ];

  return (
    <div className={icons[icon].container}>
      <i className={icons[icon].icon}></i>
      {icons[icon].name}
    </div>
  );
}
export default ToolIcon;
