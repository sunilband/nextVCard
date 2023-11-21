import React from "react";
import Link from "next/link";
import { useUserContext } from "@/context/userContexts";

type Props = {};

const BusinessHours = (props: Props) => {
  const { user } = useUserContext();
  return (
    <div className="thirdFont font-bold text-[#FBFEF9]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[80%]">
          <h2 className="text-[42px] uppercase text-center sm:text-left text-[#0E79B2]">
            Business Hours
          </h2>

          <div className="flex flex-col justify-center items-center gap-3 mt-20">
            <div className="w-[100%] flex sm:flex-row flex-col items-center  thirdFont2">
              <h2 className="text-[25px] sm:w-[20%]">Sunday</h2>
              <p className="tracking-widest text-[#F39237] text-[20px]">
                {user?.data?.businessHours?.sunday}
              </p>
            </div>
            <div className="border w-[100%]" />
            <div className="w-[100%] flex sm:flex-row flex-col  items-center thirdFont2">
              <h2 className="text-[25px] sm:w-[20%]">Monday</h2>
              <p className="tracking-widest text-[#F39237] text-[20px]">
                {user?.data?.businessHours?.monday}
              </p>
            </div>
            <div className="border w-[100%]" />
            <div className="w-[100%] flex sm:flex-row flex-col  items-center thirdFont2">
              <h2 className="text-[25px] sm:w-[20%]">Tuesday</h2>
              <p className="tracking-widest text-[#F39237] text-[20px]">
                {user?.data?.businessHours?.tuesday}
              </p>
            </div>
            <div className="border w-[100%]" />
            <div className="w-[100%] flex sm:flex-row flex-col  items-center thirdFont2">
              <h2 className="text-[25px] sm:w-[20%]">Wednesday</h2>
              <p className="tracking-widest text-[#F39237] text-[20px]">
                {user?.data?.businessHours?.wednesday}
              </p>
            </div>
            <div className="border w-[100%]" />
            <div className="w-[100%] flex sm:flex-row flex-col  items-center thirdFont2">
              <h2 className="text-[25px] sm:w-[20%]">Thursday</h2>
              <p className="tracking-widest text-[#F39237] text-[20px]">
                {user?.data?.businessHours?.thursday}
              </p>
            </div>
            <div className="border w-[100%]" />
            <div className="w-[100%] flex sm:flex-row flex-col  items-center thirdFont2">
              <h2 className="text-[25px] sm:w-[20%]">Friday</h2>
              <p className="tracking-widest text-[#F39237] text-[20px]">
                {user?.data?.businessHours?.friday}
              </p>
            </div>
            <div className="border w-[100%]" />
            <div className="w-[100%] flex sm:flex-row flex-col  items-center thirdFont2">
              <h2 className="text-[25px] sm:w-[20%]">Saturday</h2>
              <p className="tracking-widest text-[#F39237] text-[20px]">
                {user?.data?.businessHours?.saturday}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
