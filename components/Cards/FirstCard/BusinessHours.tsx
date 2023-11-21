"use client";
import React from "react";
import { useUserContext } from "@/context/userContexts";

type Props = {};

const BusinessHours = (props: Props) => {
  const { user } = useUserContext();
  return (
    <div className="bg-[#F9D254] text-[#242424] justify-between  lg:flex-row overflow-x-hidden h-[500px]">
      <h2 className="text-center w-[100vw]  pt-4 text-3xl tracking-wide font-medium">
        Business Hours
      </h2>

      <ul className="flex flex-col w-[100vw] justify-center items-center  gap-2 text-2xl font-medium pb-3 pt-6 tracking-wide text-left h-[450px] ">
        <div className="w-[310px] lg:w-[400px]">
          <li className="relative py-2">
            Monday:{" "}
            <span className="absolute right-0 font-bold">
              {user?.data?.businessHours?.monday
                ? user.data.businessHours.monday
                : ""}
            </span>
          </li>
          <li className="relative py-2">
            Tuesday:{" "}
            <span className="absolute right-0 font-bold">
              {user?.data?.businessHours?.tuesday
                ? user.data.businessHours.tuesday
                : ""}
            </span>
          </li>
          <li className="relative py-2">
            Wednesday:{" "}
            <span className="absolute right-0 font-bold">
              {user?.data?.businessHours?.wednesday
                ? user.data.businessHours.wednesday
                : ""}
            </span>
          </li>
          <li className="relative py-2">
            Thursday:{" "}
            <span className="absolute right-0 font-bold">
              {user?.data?.businessHours?.thursday
                ? user.data.businessHours.thursday
                : ""}
            </span>
          </li>
          <li className="relative py-2">
            Friday:{" "}
            <span className="absolute right-0 font-bold">
              {user?.data?.businessHours?.friday
                ? user.data.businessHours.friday
                : ""}
            </span>
          </li>
          <li className="relative py-2">
            Saturday:{" "}
            <span className="absolute right-0 font-bold">
              {user?.data?.businessHours?.saturday
                ? user.data.businessHours.saturday
                : ""}
            </span>
          </li>
          <li className="relative py-2">
            Sunday:{" "}
            <span className="absolute right-0 font-bold">
              {user?.data?.businessHours?.sunday
                ? user.data.businessHours.sunday
                : ""}
            </span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default BusinessHours;
