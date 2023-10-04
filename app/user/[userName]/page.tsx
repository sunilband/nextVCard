import FirstCard from "@/components/Cards/FirstCard/FirstCard";
import SecondCard from "@/components/Cards/SecondCard/SecondCard";
import ThirdCard from "@/components/Cards/ThirdCard/ThirdCard";
import FourthCard from "@/components/Cards/FourthCard/FourthCard";
import FifthCard from "@/components/Cards/FifthCard/FifthCard";
import SixthCard from "@/components/Cards/SixthCard/SixthCard";
import SeventhCard from "@/components/Cards/SeventhCard/SeventhCard";

export default function Page({ params }: { params: { userName: string } }) {
  return (
    <div className="overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 ">
      {/* <FirstCard /> */}
      {/* <SecondCard /> */}
      {/* <ThirdCard /> */}
      {/* <FourthCard /> */}
      {/* <FifthCard /> */}
      {/* <SixthCard /> */}
      <SeventhCard />
    </div>
  );
}
