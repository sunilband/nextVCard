"use client";
import React from "react";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useUserContext } from "@/context/userContexts";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const { user, setUser } = useUserContext();
  const router = useRouter();
  return (
    <div className="h-16 max-w-screen flex justify-end items-center gap-4 overflow-hidden border-2">
      <h2>{user?.name ? user?.name : ""}</h2>
      <Avatar
        // @ts-ignore
        src={user?.data?.profile ? user?.data?.profile : ""}
        size="md"
        isBordered
      />
      <Button
        color="danger"
        className="h-8"
        onClick={() => {
          setUser({
            name: null,
            email: null,
            token: null,
            data: null,
          });
          setCookie(null, "vCardToken", "", {
            maxAge: -1,
            path: "/",
          });
          router.push("/login");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
