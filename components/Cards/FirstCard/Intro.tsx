import React from "react";
import dummyImage from "../../../public/images/dummyImage.jpg";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import figmaLogo from "../../../public/svgs/logos/figms.svg";

type Props = {};

const Intro = (props: Props) => {
  return (
    <>
      <div className="bg-[#242424] flex flex-col justify-between lg:flex-row">
        <div className="w-full lg:w-auto  flex justify-center">
          <div className="relative bg-[#242424] flex justify-center w-[100vw] lg:w-[auto]">
            <Image
              src={dummyImage}
              alt="dummyImage"
              className={`w-[300px] h-[300px] rounded-full p-4`}
            />
          </div>
        </div>

        <div className="flex flex-col items-center sm:w-[100%]  lg:w-[75%] justify-center text-[#F9D254]">
          <div className="flex justify-between items-center m-2 gap-2 w-full ">
            <div>
              {/* name */}
              <div className=" w-[100vw] lg:w-[75vw] flex justify-center lg:justify-start">
                <h1 className="text-5xl text-center sm:text-left font-bold mt-4 tracking-widest">
                  John Doe
                </h1>
              </div>

              {/* title */}
              <div className="w-[100vw] lg:w-[75vw] flex justify-center lg:justify-start">
                <h2 className="text-xl font-light text-center sm:text-left mb-2 text-slate-200">
                  IT developer at
                  {/* Organization */}
                  <span>
                    <span className="text-slate-200 text-xl font-medium">
                      {" "}
                      Google
                    </span>
                  </span>
                </h2>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 text-[#F9D254] text-xl font-medium pb-3 pt-6 tracking-wide">
                {/* phone */}
                <h2>+918390685016</h2>
                {/* email */}
                <h2>sunilbandwork@gmail.com</h2>
              </div>

              {/* socials */}
              <div className="w-[100vw] lg:w-[75vw] flex justify-center lg:justify-start  space-x-4   items-center flex-wrap gap-2 ">
                <SocialIcon
                  url="https://twitter.com/jaketrent"
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://facebook.com/jaketrent"
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://instagram.com/jaketrent"
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://linkedin.com/jaketrent"
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://youtube.com/jaketrent"
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://behance.com/jaketrent"
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://whatsapp.com/jaketrent"
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
                <SocialIcon
                  url="https://github.com/sunilband"
                  bgColor="#F9D254"
                  className="hover:scale-105 transition-all ease-in-out duration-100"
                />
              </div>
            </div>
          </div>

          {/* bio */}
          <p className="text-lg font-light tracking-wide px-2 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
            facere magni. Culpa ex, ab vel molestiae officiis mollitia quos
            impedit accusamus aliquam, ipsam cupiditate. Sint voluptates facilis
            fuga eaque!
          </p>
        </div>
      </div>
      <div className="bg-[#242424] w-[100%] h-[2px]"></div>
    </>
  );
};

export default Intro;
