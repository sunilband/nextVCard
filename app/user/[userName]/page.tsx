"use client";
import FirstCard from "@/components/Cards/FirstCard/FirstCard";
import SecondCard from "@/components/Cards/SecondCard/SecondCard";
import ThirdCard from "@/components/Cards/ThirdCard/ThirdCard";
import FourthCard from "@/components/Cards/FourthCard/FourthCard";
import FifthCard from "@/components/Cards/FifthCard/FifthCard";
import SixthCard from "@/components/Cards/SixthCard/SixthCard";
import SeventhCard from "@/components/Cards/SeventhCard/SeventhCard";
import EighthCard from "@/components/Cards/EighthCard/EighthCard";
import NinthCard from "@/components/Cards/NinthCard/NinthCard";
import { useEffect, useState } from "react";
import { useUserContext } from "@/context/userContexts";
import { getdetails } from "@/utils/apiCalls/getDetails";

export default function Page({ params }: { params: { userName: string } }) {
  const { user, setUser } = useUserContext();

  const [card, setCard] = useState<string | null>("none");

  const id = params.userName;
  console.log("id is", id);
  useEffect(() => {
    if (id) {
      try {
        getdetails(id).then((res: any) => {
          if (res.success) {
            setUser({
              _id: res?.user?._id,
              name: res?.user?.name,
              email: res?.user?.email,
              token: "",
              data: res.user.data,
            });
            setCard(res.user.data.theme);
          } else {
            setCard(null);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 ">
      {card === null ? (
        <div className="flex h-screen w-screen justify-center items-center">
          User Does Not Exist
        </div>
      ) : null}
      {card === "none" ? (
        <div className="flex h-screen w-screen justify-center items-center">
          Loading...
        </div>
      ) : null}
      {card === "one" ? <FirstCard /> : null}
      {card === "two" ? <SecondCard /> : null}
      {card === "three" ? <ThirdCard /> : null}
      {card === "four" ? <FourthCard /> : null}
      {card === "five" ? <FifthCard /> : null}
      {card === "six" ? <SixthCard /> : null}
      {card === "seven" ? <SeventhCard /> : null}
      {card === "eight" ? <EighthCard /> : null}
      {card === "nine" ? <NinthCard /> : null}

      {/* <SecondCard /> */}
      {/* <ThirdCard /> */}
      {/* <FourthCard /> */}
      {/* <FifthCard /> */}
      {/* <SixthCard /> */}
      {/* <SeventhCard /> */}
      {/* <EighthCard /> */}
      {/* <NinthCard /> */}
    </div>
  );
}
