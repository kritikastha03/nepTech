"use client";
import React, { useState } from "react";
import Image from "next/image";

const Imagediv = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div className=" bg-gray-100">
      <div className="object-cover">
        <Image
          src={props.Image}
          height={390}
          width={390}
          className="rounded-t-md"
        />
      </div>
      <div className="m-5 flex flex-col items-center">
        <h1 className="mb-8 font-bold text-[21px] pb-3 hover:underline cursor-pointer ">
          {props.heading}
        </h1>
        {/* <p className="text-center text-[17px] pb-10">{props.paragraph}</p> */}
        <div
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseOut={() => {
            setHover(false);
          }}
        >
          {!hover ? (
            <p className="text-center text-[17px] pb-10">{props.paragraph}</p>
          ) : (
            <div className="btn flex items-center  justify-center  h-11 w-52 px-3 text-xl  font-semibold bg-yellow-600 text-yellow-950 cursor-pointer rounded-sm mb-10">
              Start Now
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Imagediv;
