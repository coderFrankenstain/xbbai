import React from "react";
import Image from "next/image";
import Link from "next/link";
const ToolCard = ({ post, handleClick }) => {
  return (
    <div className="tool_card">
      <Link href={post.url}>
        <div className=" flex justify-between items-start gap-5">
          <div className="flex justify-start items-center w-full gap-3 cursor-pointer">
            <Image
              src={post.icon}
              width={60}
              height={60}
              alt="tool_image"
              className=" rounded-full"
            ></Image>
            <div className="flex flex-col justify-center">
              <h3 className=" font-satoshi font-semibold text-gray-900">
                {post.name}
              </h3>
              <p className=" font-inter text-sm text-gray-500">
                {post.description}
              </p>
            </div>
            {/* <p className=" text-center text-black">{post.name}</p>
          <p className=" text-gray-400">{post.description}</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ToolCard;
