import React from "react";
import styles from "./FifthCard.module.css";
import { useUserContext } from "@/context/userContexts";
type Props = {};

const BusinessHours = (props: Props) => {
  const { user } = useUserContext();
  return (
    <div className="h-[800px] bg-[#F0F2F5] flex flex-col gap-2 justify-center items-center">
      <div className="w-[80%] flex flex-col gap-4">
        <h2 className="fifthFont text-[60px] text-black my-10">
          Business Hours
        </h2>

        <div
          className={`${styles.hoursCard} flex justify-center fifthFont2 text-xl`}
        >
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1">
            <p>Monday</p>
            <p className="font-bold">{user?.data?.businessHours?.monday}</p>
          </div>
        </div>

        <div
          className={`${styles.hoursCard} flex justify-center fifthFont2 text-xl`}
        >
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1">
            <p>Tuesday</p>
            <p className="font-bold">{user?.data?.businessHours?.tuesday}</p>
          </div>
        </div>

        <div
          className={`${styles.hoursCard} flex justify-center fifthFont2 text-xl`}
        >
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1">
            <p>Wednesday</p>
            <p className="font-bold">{user?.data?.businessHours?.wednesday}</p>
          </div>
        </div>

        <div
          className={`${styles.hoursCard} flex justify-center fifthFont2 text-xl`}
        >
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1">
            <p>Thursday</p>
            <p className="font-bold">{user?.data?.businessHours?.thursday}</p>
          </div>
        </div>

        <div
          className={`${styles.hoursCard} flex justify-center fifthFont2 text-xl`}
        >
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1">
            <p>Friday</p>
            <p className="font-bold">{user?.data?.businessHours?.friday}</p>
          </div>
        </div>

        <div
          className={`${styles.hoursCard} flex justify-center fifthFont2 text-xl`}
        >
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1">
            <p>Saturday</p>
            <p className="font-bold">{user?.data?.businessHours?.saturday}</p>
          </div>
        </div>

        <div
          className={`${styles.hoursCard} flex justify-center fifthFont2 text-xl`}
        >
          <div className="flex justify-between border sm:w-[80%] w-[100%] sm:px-14 px-1">
            <p>Sunday</p>
            <p className="font-bold">{user?.data?.businessHours?.sunday}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
