import HeadingOne from "../typography/HeadingOne";

const Header = () => {
  return (
    <section className="min-h-[100vh] home-hero overflow-hidden flex flex-col items-center justify-center">
      <div className="bg-black/20 px-10 w-full h-screen flex justify-center items-center ">
        <HeadingOne />
      </div>
    </section>
  );
};
export default Header;
