import HeadingTwo from "@/components/typography/HeadingTwo";
import Image from "next/image";
const About = () => {
  return (
    <section className="py-20">
      <HeadingTwo title={"WHO ARE WE"} black="true"/>
      <div className="flex justify-between max-w-[1200px] mx-auto mt-20 flex-wrap md:flex-nowrap">
        <div className="max-w-[500px]">
          <Image
            src="/images/home/about.png"
            alt="factory-img"
            height={768}
            width={1366}
            className="max-w-[90%] h-auto mx-auto block shadow-[0_12px_20px_-6px_rgba(0,0,0,0.1)] shadow-black rounded-tl-xl rounded-br-xl"
          />
        </div>
        <div className="max-w-[600px] flex items-center">
          <p className="text-justify text-lg max-w-[90%] mx-auto mt-20 md:mt-0">
            {`Empowering businesses with top-tier packaging solutions, we are your
            go-to partner for all things corrugated. Since 2012, we've been at
            the forefront of delivering innovative, durable, and eco friendly
            boxes that safeguard products while enhancing brand value. With over
            a decade of expertise, we've built a legacy of quality and
            reliability, serving diverse industries with precision and care.
            Trust us to protect what matters most.`}
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
