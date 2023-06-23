import Image from "next/image";
import { Feed } from "@/components";
export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className=" head_text text-center">
        XBBAI
        <br className=" max-md:hidden"></br>
        <span className="blue_x_gradient text-center"> AI-Powered Tool</span>
      </h1>

      <p className=" desc text-center">
        欢迎来到XBBAI - 您的AI工具宝库，让智能成为您的超能力。
      </p>

    <Feed></Feed>
    </section>
  );
}
