import React from "react";
import Imagediv from "../ImageDiv";
import Heading from "../Heading";

const Recomendation = () => {
  return (
    <div className="mx-14">
      <Heading Heading = "Recommendation" />
      <div className=" grid-cols-3 grid gap-5">
        <Imagediv
          Image="/recommendation_image1.webp"
          heading="AI Image Upscaler"
          paragraph="Instantly increase image size and resolution up to 8x with premium quality in seconds."
        />
        <Imagediv
          Image="/recommendation_image2.webp"
          heading="AI Image Sharpener"
          paragraph="Intellgiently sharpen blurry images and edges in one click to give clean, and crisp results."
        />
        <Imagediv
          Image="/recommendation_image3.webp"
          heading="AI Image Denoiser"
          paragraph="Smartly remove photo noise and grain with AI Denoise technology without any artifacts."
        />
        <Imagediv
          Image="/recommendation_image4.webp"
          heading="AI Background Remover"
          paragraph="Automatically cut out humans, or objects from backgrounds to get transparent files."
        />
        <Imagediv
          Image="/recommendation_image5.webp"
          heading="AI Photo Restorer"
          paragraph="Effortlessly remove scratches from old or damaged photos and bring them back to life."
        />
        <Imagediv
          Image="/recommendation_image6.webp"
          heading="AI Image Cartoonizer"
          paragraph="Magically turn your photo/selfie/portrait into stunnig AI artwork for a whole new look."
        />
      </div>
    </div>
  );
};

export default Recomendation;
