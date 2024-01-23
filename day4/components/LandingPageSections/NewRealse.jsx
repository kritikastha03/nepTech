import React from "react";
import Heading from "../Heading";
import Image from "next/image";

const NewRealse = () => {
  return (
    <div className="mx-14">
      <Heading Heading="New Releases" />
      <div className="flex bg-gray-200">
        <div className="w-[1700px] bg-gray-400">
          <Image src="/coffee_beans.webp" height={396} width={704} />
        </div>
        <div className="p-10">
          <h1 className="text-[21px] font-semibold">AI Background Generator</h1>
          <p className="text-[17px] mb-10">
            AI helps generate unique backgrounds for your product images with a
            few clicks. try it now to get studio-quality product photography
            instantly.
          </p>
          <div className="btn w-[260px] flex items-center  justify-center  h-[60px] px-3 text-2xl font-semibold bg-yellow-600 text-black cursor-pointer rounded-md">
            Start Now
          </div>
          <hr className="border-gray-300 mt-12 mb-2 " />
          <p className="text-[17px]">AI Generates Random Backgrounds Instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default NewRealse;
