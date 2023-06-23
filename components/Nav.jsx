import React from "react";
import Image from "next/image";
const Nav = () => {
  return (
    <nav className=" flex-between w-full mb-16 pt-3 ">
      <Image
        src="/logo.svg"
        width={50}
        height={50}
        className="object-contain"
      ></Image>
    </nav>
  );
};

export default Nav;
