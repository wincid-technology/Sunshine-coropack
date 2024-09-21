const HeadingTwo = ({title, black}) => {
  return (
    <h2
      className={`source-sans-700 md:text-5xl text-3xl border-b-4  border-transparent pb-1 w-fit mx-auto bg-clip-text ${
        black ? "text-black hover:border-black" : "text-white hover:border-white"
      }`}
    >
      {title}
    </h2>
  );
}
export default HeadingTwo