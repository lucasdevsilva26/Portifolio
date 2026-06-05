function Loading({ loading }) {
  return (
    <section
      className={` items-center justify-center w-full h-full fixed bg-black/75 z-100 ${loading ? "flex" : "hidden"} `}
    >
      <i
        className={` fas fa-spinner text-6xl animate-spin [animation-duration:1s] `}
      ></i>
    </section>
  );
}
export default Loading;
