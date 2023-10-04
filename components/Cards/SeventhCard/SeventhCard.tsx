import React from "react";
import Intro from "./Intro";
import BusinessHours from "./BusinessHours";
import Services from "./Services";
import Testimonials from "./Testimonials";
import SaveShare from "./SaveShare";

type Props = {};

const SeventhCard = (props: Props) => {
  return (
    <div className="w-screen min-h-screen max-w-screen bg-[#D6CCC2]">
      <Intro />
      <BusinessHours />
      <Services />
      <Testimonials />
      <SaveShare />
    </div>
  );
};

export default SeventhCard;
