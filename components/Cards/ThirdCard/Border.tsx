import React from "react";
import Cloud from "./assets/Cloud.svg";
import Pen from "./assets/Pen.svg";
import Scribble from "./assets/Scribble.svg";
import Image from "next/image";

type Props = {};

const Border = (props: Props) => {
  return (
    <div className="flex justify-center gap-10 mt-20 mb-20 sm:scale-100 scale-90 px-2">
      <Image src={Cloud} alt="Cloud" className="w-28 h-28" />
      <Image src={Pen} alt="Pen" className="w-28 h-28" />
      <Image src={Scribble} alt="Scribble" className="w-32 h-32" />
    </div>
  );
};

export default Border;
