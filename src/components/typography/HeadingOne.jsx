import Logo from "../pieces/Logo"



const Hero = () => {
  return (
    <section
      className="relative hero-section w-full"
    >

    
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex h-screen items-center justify-center md:px-8"
      >

        <div className="max-w-xl text-center flex mt-10 justify-center items-center flex-col">
          <Logo />
          <h1 className="text-3xl uppercase kanit-bold-italic animation-right font-extrabold text-[#fff] sm:text-6xl">
            {"Sunshine"}
          </h1>
          <h1 className="text-3xl uppercase kanit-bold-italic animation-left font-extrabold text-[#fff] sm:text-6xl">
            {"coropack"}
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

          <div className="mt-8 flex justify-center gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded-full bg-[#f58720] px-12 py-3 text-sm font-medium text-white shadow sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero