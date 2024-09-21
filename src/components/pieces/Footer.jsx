import { footerLinks } from "@/constants/footer";
import Logo from "./Logo";

const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <footer className="bg-[#6C4E31] px-[10%] py-10">
      <div className="flex justify-between md:flex-nowrap flex-wrap">
        <div className="">
          <div className="flex items-center gap-10 w-fit flex-wrap">
            <Logo />
            <h1 className="text-center mb-10 mx-auto">
              <span className="md:text-5xl text-3xl font-bold  block mr-4 tracking-wider text-[#ff8502] kanit-semibold-italic">
                {"SUNSHINE"}
              </span>
              <span className="md:text-5xl text-3xl font-bold block text-white kanit-semibold-italic">
                {"COROPACK"}
              </span>
            </h1>
          </div>
          <h2 className="flex items-center text-white w-fit text-3xl md:ml-10 text-center">
            <hr className="w-10" />
            QUALITY MATTERS
            <hr className="w-10" />
          </h2>
        </div>
        <div className="flex flex-col text-white gap-5 font-medium md:mr-10 mx-auto mt-10">
          {footerLinks.map((link) => {
            const { id, title, href } = link;
            return (
              <a
                href={href}
                key={id}
                className="uppercase block underline hover:text-[#ff8502] transition-all duration-300"
              >
                {title}
              </a>
            );
          })}
        </div>
      </div>
      <hr className="mt-10" />
      <div className="">
        <h3 className="uppercase font-medium md:text-xl text-sm text-center mt-10">
          <span className="text-orange-500 tracking-wide mr-5">
            Sunshine Coropack
          </span>
          <span className="text-white">All rights reserved</span>
        </h3>
        <h3 className="uppercase font-medium md:text-xl text-sm text-center mt-4 text-white">
          Copyright &copy; {year}
        </h3>
        <h3 className="uppercase font-medium md:text-xl text-sm text-center mt-4">
          <span className="text-white tracking-wide mr-5">
            DESIGNED & DEVELOPED BY
          </span>
          <span className="text-orange-500">WINCID TECHNOLOGIES</span>
        </h3>
      </div>
    </footer>
  );
}
export default Footer