import React from "react";
import Intro from "./Intro";
import BusinessHours from "./BusinessHours";
import Services from "./Services";
import Testimonials from "./Testimonials";
import SaveShare from "./SaveShare";

type Props = {};

const FourthCard = (props: Props) => {
  return (
    <div className="w-screen min-h-screen max-w-screen overflow-clip bg-[#E3F2FD]">
      <>
        <Intro />
      </>
      <BusinessHours />
      <Services />
      <Testimonials />
      <SaveShare />
    </div>
  );
};

export default FourthCard;
