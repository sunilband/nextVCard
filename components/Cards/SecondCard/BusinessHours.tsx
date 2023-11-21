import React from "react";
import { useUserContext } from "@/context/userContexts";

type Props = {};

const BusinessHours = (props: Props) => {
  const { user } = useUserContext();
  return (
    <div className="bg-[#0077B6] text-white justify-between  lg:flex-row overflow-x-hidden h-[500px] martian">
      <h2 className="text-center w-[100vw]  pt-4 text-3xl tracking-wide font-medium">
        Business Hours
      </h2>

      <div className="flex justify-center mt-10">
        {/* create table with timings for monday to saturday with border and space between*/}
        <table className="rounded-md lg:w-[500px] md:w-[400px] w-[320px] mx-2 text-center">
          <thead>
            <tr>
              <th className="border p-2 ">Day</th>
              <th className="border px-4">Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Monday</td>
              <td className="border px-4">
                {user?.data?.businessHours?.monday}
              </td>
            </tr>
            <tr>
              <td className="border p-2">Tuesday</td>
              <td className="border px-4">
                {user?.data?.businessHours?.tuesday}
              </td>
            </tr>
            <tr>
              <td className="border p-2">Wednesday</td>
              <td className="border px-4">
                {user?.data?.businessHours?.wednesday}
              </td>
            </tr>
            <tr>
              <td className="border p-2">Thursday</td>
              <td className="border px-4">
                {user?.data?.businessHours?.thursday}
              </td>
            </tr>
            <tr>
              <td className="border p-2">Friday</td>
              <td className="border px-4">
                {user?.data?.businessHours?.friday}
              </td>
            </tr>
            <tr>
              <td className="border p-2">Saturday</td>
              <td className="border px-4">
                {user?.data?.businessHours?.saturday}
              </td>
            </tr>
            <tr>
              <td className="border p-2">Sunday</td>
              <td className="border px-4">
                {user?.data?.businessHours?.sunday}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessHours;
