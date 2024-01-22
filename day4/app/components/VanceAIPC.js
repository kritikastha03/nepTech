import React from "react";
import Image from "next/image";
import { IoLogoWindows } from "react-icons/io";

const VanceAI = () => {
  return (
    <div className="mx-14 flex  items-center pr-6 text-left mt-20 overflow-visible">
      <Image src="/VanceiAI.webp" height={464} width={650} />
      <div className="ml-7">
        <h1 className="text-3xl font-semibold leading-[45px] text-gray-600">
          VanceAI PC
        </h1>
        <p className="mt-6 w-[430px] text-gray-600">
          Want to take your photos to next level with upgraded AI models? Try
          VanceAI PC, which helps enlarge imagesup to 40x and speeds up batch
          processing.
          <br />
          <br />
          VanceAI PC is the desktop version of VanceAI's online solutions,
          including AI upscaling , sharpening, denoising, restoration,
          background removal, and cartoon/ anime tools.
        </p>

        <div className="flex gap-4 py-6">
          <div className="btn w-[50%] flex border-2 border-gray-300 bg-gray-200  gap-2 items-center  justify-center  h-[50px]  px-3 text-xl font-mono font-bold text-black cursor-pointer rounded-[3px]">
            <IoLogoWindows />
            Free Download
          </div>
          <div className="btn w-[50%] flex items-center  justify-center  h-[50px] px-3 text-xl font-semibold bg-yellow-600 text-black cursor-pointer rounded-md">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanceAI;
