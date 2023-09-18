import React from "react";

type Props = {};

const BusinessHours = (props: Props) => {
  return (
    <div className="bg-[#F9D254] text-[#242424] justify-between  lg:flex-row overflow-x-hidden h-[500px]">
      <h2 className="text-center w-[100vw]  pt-4 text-3xl tracking-wide font-medium">
        Business Hours
      </h2>

      <ul className="flex flex-col w-[100vw] justify-center items-center  gap-2 text-2xl font-medium pb-3 pt-6 tracking-wide text-left h-[450px] ">
        <div className="w-[310px] lg:w-[400px]">
          <li className="relative py-2">
            Monday:{" "}
            <span className="absolute right-0 font-bold">08:10-20:00</span>
          </li>
          <li className="relative py-2">
            Tuesday:{" "}
            <span className="absolute right-0 font-bold">08:10-20:00</span>
          </li>
          <li className="relative py-2">
            Wednesday:{" "}
            <span className="absolute right-0 font-bold">08:10-20:00</span>
          </li>
          <li className="relative py-2">
            Thursday:{" "}
            <span className="absolute right-0 font-bold">08:10-20:00</span>
          </li>
          <li className="relative py-2">
            Friday:{" "}
            <span className="absolute right-0 font-bold">08:10-20:00</span>
          </li>
          <li className="relative py-2">
            Saturday:{" "}
            <span className="absolute right-0 font-bold">08:10-20:00</span>
          </li>
          <li className="relative py-2">
            Sunday: <span className="absolute right-0 font-bold">Closed</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default BusinessHours;
