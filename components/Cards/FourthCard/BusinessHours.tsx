import React from "react";

type Props = {};

const BusinessHours = (props: Props) => {
  return (
    <div className="text-[#242424] h-[800px]  flex justify-center">
      <div className="flex flex-col w-[80%]  items-center ">
        <h2 className="uppercase fourthFont text-[50px] text-center">
          Business Hours
        </h2>

        <div className="card w-[320px] sm:w[400px] md:w-[600px] rounded-xl flex justify-center py-4 bg-[#cbe7fb] mt-10 text-3xl fourthFont2">
          {/* create table with days and timings with border and padding and space between colums*/}
          <table>
            <tr>
              <th className="p-4">Day</th>
              <th>Hours</th>
            </tr>
            <tr>
              <td className="p-4">Monday</td>
              <td>9:00am - 5:00pm</td>
            </tr>
            <tr>
              <td className="p-4">Tuesday</td>
              <td>9:00am - 5:00pm</td>
            </tr>
            <tr>
              <td className="p-4">Wednesday</td>
              <td>9:00am - 5:00pm</td>
            </tr>
            <tr>
              <td className="p-4">Thursday</td>
              <td>9:00am - 5:00pm</td>
            </tr>
            <tr>
              <td className="p-4">Friday</td>
              <td>9:00am - 5:00pm</td>
            </tr>
            <tr>
              <td className="p-4">Saturday</td>
              <td>9:00am - 5:00pm</td>
            </tr>
            <tr>
              <td className="p-4">Sunday</td>
              <td>Closed</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
