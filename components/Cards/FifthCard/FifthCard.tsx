import React from "react";
import Intro from "./Intro";
import BusinessHours from "./BusinessHours";
import Services from "./Services";
import Testimonials from "./Testimonials";
import SaveShare from "./SaveShare";

type Props = {};

const FifthCard = (props: Props) => {
  return (
    <div className="w-screen min-h-screen max-w-screen">
      <Intro />
      <BusinessHours />
      <Services />
      <Testimonials />
      <SaveShare />
    </div>
  );
};

export default FifthCard;
