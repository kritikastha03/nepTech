import React from "react";
import Image from "next/image";

const RightPage = (props) => {
  return (
    <div className="mx-14 flex  items-center pr-6 text-left mt-20">
      <Image src={props.img} height={464} width={650} />
      <div className="pl-7">
        <h1 className="text-[2.2rem] font-semibold leading-[45px] text-gray-600">{props.title}</h1>
        <p className="mt-6 text-[17px] text-gray-600">
          {props.description}
          <br />
          <br />
          {props.description2}
        </p>
      </div>
    </div>
  );
};

export default RightPage;
