import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="thirdFont font-bold text-[#FBFEF9] bg-[#191923] py-4 relative">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="uppercase lg:text-[200px] md:text-[150px] text-[100px] tracking-widest text-center">
          john Doe
        </h2>
        <div className="relative lg:w-[600px] lg:h-[600px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px]  w-[300px] h-[300px] group mb-10">
          <div className="lg:w-[600px] lg:h-[600px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] absolute border-[30px] rounded-xl z-10 scale-105 group-hover:-translate-y-6 group-hover:translate-x-6  transition-all ease-out duration-200" />
          <Image
            src={dummyImage}
            alt="dummyImage"
            fill
            className="rounded-xl absolute z-50 group-hover:scale-105 transition-all ease-out duration-200"
          />
        </div>
      </div>

      {/* title */}
      <div className="text-center font-bold uppercase text-3xl thirdFont2 z-50">
        <h2 className="z-50 px-4">
          Software developer at <span>Google</span>
        </h2>
      </div>

      {/* about */}
      <div className="flex flex-col justify-center items-center">
        <div className="mt-20 w-[80%]">
          <h2 className="text-[42px] uppercase text-center sm:text-left text-[#0E79B2]">
            About me
          </h2>
          <p className="thirdFont2 text-[25px] text-center sm:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            voluptatibus at non doloribus voluptates aut ipsum aliquam ea
            repudiandae molestias quasi quidem officia sint, sit omnis porro qui
            nesciunt eius ad maiores eaque dignissimos ducimus, et illo? Harum
            sint et molestias, a error officiis? Deleniti fugiat nulla
            repudiandae quisquam aliquam!
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 mt-20">
        <div className="w-[80%] flex sm:flex-row flex-col items-center  thirdFont2">
          <h2 className="text-[25px] sm:w-[20%]">Phone</h2>
          <p className="tracking-widest text-[#F39237] text-[20px]">
            8390685016
          </p>
        </div>
        <div className="border w-[80%]" />
        <div className="w-[80%] flex sm:flex-row flex-col  items-center thirdFont2">
          <h2 className="text-[25px] sm:w-[20%]">Email</h2>
          <p className="tracking-widest text-[#F39237] text-[20px]">
            sunilband@gmail.com
          </p>
        </div>
        <div className="border w-[80%]" />
        <div className="w-[80%] flex sm:flex-row flex-col items-center thirdFont2">
          <h2 className="text-[25px] sm:w-[20%]">Socials</h2>
          <div className="flex flex-wrap tracking-widest text-[#F39237] justify-center text-[20px]">
            <Link href="">Twitter</Link>,<Link href="">Facebook</Link>,
            <Link href="">Instagram</Link>,<Link href="">LinkedIn</Link>,
            <Link href="">Youtube</Link>,<Link href="">Behance</Link>,
            <Link href="">Whatsapp</Link>,<Link href="">Github</Link>
          </div>
        </div>
        <div className="border w-[80%]" />
      </div>
    </div>
  );
};

export default Intro;
