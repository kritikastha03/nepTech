"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Filepicker from "./components/Filepicker";
// import ImageCollection from "./components/ImageCollection";

const Page = () => {
  const imageUrls = [
    "/retro-computer1.jpg",
    "/retro-computer2.jpg",
    "/retro-computer3.jpg",
    "/retro-computer4.jpg",
    "/retro-computer5.jpg",
    "/retro-computer6.jpg",
    "/3d-zoom-call1.jpg",
    "/3d-zoom-call2.jpg",
    "/3d-zoom-call3.jpg",
    "/3d-zoom-call4.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };


  return (
    <>
      <div>
        <div className="flex gap-5 pl-10">
          <Filepicker url={selectedImage} />
          <Filepicker />
        </div>
        <hr className="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="mx-4">
          <div className="flex items-center flex-col gap-7">
            <h1 className="border rounded p-2 border-gray-500 text-gray-700">
              Select from the given images.
            </h1>
            <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {imageUrls.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={`image-${index}`}
                  height={300}
                  width={300}
                  onClick={() => handleImageClick(imageUrl)}
                  className="rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
