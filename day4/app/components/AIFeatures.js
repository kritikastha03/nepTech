import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const AIFeatures = () => {
  return (
    <div>
      <Heading Heading="Hot AI Features" />
      <div className="grid grid-cols-2 gap-6 bg-gray-100 px-14 py-8">
        <div className=" bg-white object-cover rounded-t-[3px]">
          <Image
            src="/boy.webp"
            height={300}
            width={550}
            className="rounded-[3px]"
          />
          <div className=" flex flex-col items-center">
            <h1 className="mt-4 mb-8 font-semibold text-[21px] pb-3 hover:underline cursor-pointer ">
              AI Image Enhancer
            </h1>
            <p className="text-center text-[16px] pb-10">
              AI enhances image quality and resolution for better printing and
              HD display.
            </p>
            <div className="btn flex items-center  justify-center  h-9 w-44 px-3 text-lg mb-5 font-semibold bg-yellow-600 text-yellow-950 cursor-pointer rounded-md">
              Start Now
            </div>
          </div>
        </div>
        <div className=" bg-white object-cover  rounded-t-[3px]">
          <Image
            src="/boy_and_girl.webp"
            height={300}
            width={550}
            className="rounded-[3px]"
          />
          <div className=" flex flex-col items-center">
            <h1 className="mt-4 mb-8 font-semibold text-[21px] pb-3 hover:underline cursor-pointer ">
              AI Image Enhancer
            </h1>
            <p className="text-center text-[16px] pb-10">
              AI enhances image quality and resolution for better printing and
              HD display.
            </p>
            <div className="btn flex items-center  justify-center  h-9 w-44 px-3 text-lg mb-5 font-semibold bg-yellow-600 text-yellow-950 cursor-pointer rounded-md">
              Start Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;
