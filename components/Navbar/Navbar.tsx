"use client";
import React from "react";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-16 max-w-screen flex justify-end items-center gap-4 overflow-hidden border-2">
      <h2>User Name</h2>
      <Avatar
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        size="md"
        isBordered
      />
    </div>
  );
};

export default Navbar;
