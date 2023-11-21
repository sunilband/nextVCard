import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import Link from "next/link";
import { useUserContext } from "@/context/userContexts";

type Props = {};

const Intro = (props: Props) => {
  const { user } = useUserContext();
  return (
    <div className="thirdFont font-bold text-[#FBFEF9] bg-[#191923] py-4 relative">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="uppercase lg:text-[200px] md:text-[150px] text-[100px] tracking-widest text-center">
          {user?.data?.name}
        </h2>
        <div className="relative lg:w-[600px] lg:h-[600px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px]  w-[300px] h-[300px] group mb-10">
          <div className="lg:w-[600px] lg:h-[600px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] absolute border-[30px] rounded-xl z-10 scale-105 group-hover:-translate-y-6 group-hover:translate-x-6  transition-all ease-out duration-200" />
          <Image
            src={user?.data?.profile ? user?.data?.profile : ""}
            alt="dummyImage"
            fill
            className="rounded-xl absolute z-50 group-hover:scale-105 transition-all ease-out duration-200"
          />
        </div>
      </div>

      {/* title */}
      <div className="text-center font-bold uppercase text-3xl thirdFont2 z-50">
        <h2 className="z-50 px-4">
          {user?.data?.designation} at <span>{user?.data?.company}</span>
        </h2>
      </div>

      {/* about */}
      <div className="flex flex-col justify-center items-center">
        <div className="mt-20 w-[80%]">
          <h2 className="text-[42px] uppercase text-center sm:text-left text-[#0E79B2]">
            About me
          </h2>
          <p className="thirdFont2 text-[25px] text-center sm:text-left">
            {user?.data?.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 mt-20">
        <div className="w-[80%] flex sm:flex-row flex-col items-center  thirdFont2">
          <h2 className="text-[25px] sm:w-[20%]">Phone</h2>
          <p className="tracking-widest text-[#F39237] text-[20px]">
            {user?.data?.phone}
          </p>
        </div>
        <div className="border w-[80%]" />
        <div className="w-[80%] flex sm:flex-row flex-col  items-center thirdFont2">
          <h2 className="text-[25px] sm:w-[20%]">Email</h2>
          <p className="tracking-widest text-[#F39237] text-[20px]">
            {user?.data?.email}
          </p>
        </div>
        <div className="border w-[80%]" />
        <div className="w-[80%] flex sm:flex-row flex-col items-center thirdFont2">
          <h2 className="text-[25px] sm:w-[20%]">Socials</h2>
          <div className="flex flex-wrap tracking-widest text-[#F39237] justify-center text-[20px]">
            <Link
              href={
                user?.data?.socials?.twitter ? user?.data?.socials?.twitter : ""
              }
            >
              <pre>Twitter </pre>
            </Link>
            ,
            <Link
              href={
                user?.data?.socials?.facebook
                  ? user?.data?.socials?.facebook
                  : ""
              }
            >
              <pre>Facebook </pre>
            </Link>
            ,
            <Link
              href={
                user?.data?.socials?.instagram
                  ? user?.data?.socials?.instagram
                  : ""
              }
            >
              <pre>Instagram </pre>
            </Link>
            ,
            <Link
              href={
                user?.data?.socials?.linkedin
                  ? user?.data?.socials?.linkedin
                  : ""
              }
            >
              <pre>LinkedIn </pre>
            </Link>
            ,
            <Link
              href={
                user?.data?.socials?.youtube ? user?.data?.socials?.youtube : ""
              }
            >
              <pre>Youtube </pre>
            </Link>
            ,
            <Link
              href={
                user?.data?.socials?.behance ? user?.data?.socials?.behance : ""
              }
            >
              <pre>Behance </pre>
            </Link>
            ,
            <Link
              href={
                user?.data?.socials?.whatsapp
                  ? user?.data?.socials?.whatsapp
                  : ""
              }
            >
              <pre>Whatsapp </pre>
            </Link>
            ,
            <Link
              href={
                user?.data?.socials?.github ? user?.data?.socials?.github : ""
              }
            >
              <pre>Github </pre>
            </Link>
          </div>
        </div>
        <div className="border w-[80%]" />
      </div>
    </div>
  );
};

export default Intro;
