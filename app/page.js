import React from "react";
import Card from "./Components/Card";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default page;
