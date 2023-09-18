import React from "react";
import Intro from "./Intro";
import BusinessHours from "./BusinessHours";
import Services from "./Services";
import Testimonials from "./Testimonials";
import SaveShare from "./SaveShare";
import Border from "./Border";

type Props = {};

const ThirdCard = (props: Props) => {
  return (
    <div className="w-screen min-h-screen max-w-screen bg-[#191923]">
      <Intro />
      <Border />
      <BusinessHours />
      <Border />
      <Services />
      <Border />
      <Testimonials />
      <Border />
      <SaveShare />
    </div>
  );
};

export default ThirdCard;
