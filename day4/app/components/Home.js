import React from "react";
import Image from "next/image";
import { IoLogoWindows } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="flex items-center  w-[100%] overflow-hidden bg-[url('/banner_bg.webp')] h-screen bg-no-repeat bg-center bg-cover">
        <div className="ml-16 flex mt-6">
          <div className="w-[50%] flex  flex-col justify-cente mt-12">
            <h1 className=" mb-6 text-5xl text-white font-semibold">
              AI Photo Enhancement, Generation & Editing Tools
            </h1>
            <p className="pb-8 w-[30rem] mt-6 text-lg font-medium text-white">
              "VanceAI helps boost Productivity & Creativity with various AI
              solutioons for photo enhancement and editing, including Ai
              enhancing, upscaling, sharpening, denoising, background removal &
              generation, and more. All AI Tools are available online or on the
              "Free Download" software."
              <br />
              <br />
              "Let's start your journey at VamceAI from AI upscaling!"
            </p>
            <div className="flex gap-4 py-6">
              <div className="btn flex  p-4 gap-2 items-center  justify-center  h-16  px-3 text-2xl font-mono font-bold bg-white text-black cursor-pointer rounded-[3px]">
                <IoLogoWindows />"Free Download"
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image src="/banner_AI.webp" width={550} height={550} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
