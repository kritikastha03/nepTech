import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h1 className="text-4xl leading-[48px]  text-center pt-20 pb-10 font-[650]">
        {props.Heading}
      </h1>
    </div>
  );
};

export default Heading;
