import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="absolute bottom-0  w-full text-center ">
      <section className=" flex-center ">
        <h1 className=" font-extrabold leading-[1.15] text-black sm:text-2xl mr-8">
          欢迎加群讨论 <br></br>
          软件开发或者使用问题<br></br>
          请联系作者<br></br>
          微信 seakingweijun
        </h1>
        <Image
          src={"/qrcode.png"}
          width={150}
          height={150}
          className=" object-contain"
        ></Image>
      </section>
    </footer>
  );
};

export default Footer;
