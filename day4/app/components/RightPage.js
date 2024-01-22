import React from "react";
import Image from "next/image";

const RightPage = (props) => {
  return (
    <div className="mx-14 flex  items-center pr-6 text-left mt-20">
      <Image src={props.img} height={464} width={704} />
      <div className="pl-7">
        <h1 className="text-[2.5rem] font-bold leading-[50px]">{props.title}</h1>
        <p className="mt-6 text-[17px]">
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
