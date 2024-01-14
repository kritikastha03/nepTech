import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="flex flex-col px-10">
        <div className="flex justify-between">
          <div className="w-3/6 p-3 text-lg">
            <h1 className="font-block text-xl">Block of text</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              dolore quaerat quos modi ducimus neque, officiis repellendus magni
              porro itaque at eligendi aspernatur minima, soluta illo incidunt
              dolor! Nihil, molestiae!
            </p>
          </div>
          <div>
            <Image
              src="/images.jpg"
              width={300}
              height={800}
              className="rounded"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <Image
              src="/images.jpg"
              width={300}
              height={800}
              className="rounded"
            />
          </div>
          <div className="w-3/6 p-3 text-lg">
            <h1 className="font-block text-xl">Block of text</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              dolore quaerat quos modi ducimus neque, officiis repellendus magni
              porro itaque at eligendi aspernatur minima, soluta illo incidunt
              dolor! Nihil, molestiae!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
