import React from "react";
import Home from "./components/Home";
import Recomendation from "./components/Recomendation";
import NewRealse from "./components/NewRealse";
import AIFeatures from "./components/AIFeatures";
import LeftPage from "./components/LeftPage";
import RightPage from "./components/RightPage";
import VanceAI from "./components/VanceAIPC";
import Review from "./components/Review";

const page = () => {
  return (
    <div>
      <Home />
      <Recomendation />
      <NewRealse />
      <AIFeatures />
      <VanceAI/>
      <LeftPage
        title="Automatic, Fast, and Smart Photo Processing with AI"
        description="VanceAI aims to boost photo processing with effective AI solutions. All its AI tools are based on Deep Convolutional Neural Networks (DCNN) that are trained on millions of images to enable their smart analysis and fast processing."
        description2="Different from traditional math operations-based tools, VanceAI excels at handling real details with deep learning. Try VanceAI now to make your photos at their best and beyond."
        img="/page_image1.webp"
      />
      <RightPage
        title="Use AI to Increase Productivity With Premium Quality"
        description="VanceAI helps maximize the potential of your photos. With cutting-edge deep learning such as AI upscaling, sharpening, and enhancing, VanceAI could smartly upgrade photos to premium quality in a natural way."
        description2="With only a few clicks, AI can help process images within seconds. Batch processing is also allowed to help simplify workflow and increase productivity."
        img="/page_image2.webp"
      />
      <LeftPage
        title="Maintain a Steady Stream of Ideas and Creativity with AI"
        description="VanceAI offers easy-to-use AI tools to help easily and efficiently achieve creative design goals for products, game characters/scenes/assets, avatars, and so on."
        description2="Simply drag & drop your photos/selfies or directly describe what you want to let AI turn them into any creative styles, like cartoon, sketch, anime, realistic, etc."
        img="/page_image3.webp"
      />
      <RightPage
        title="AIGC Effectively Empowers E-Commerce & Marketplace"
        description="VanceAI is developing a series of AI Product Image Generator for E-Commerce, including AI Background Generator, AI Fashion Model, and more to help boost productivity and creativity in production and marketing."
        description2="Whether you are a professional photographer, a marketer, or a business owner, with a full suite of AI tools from VanceAI, you can get awesome images for websites, blogs, banners, or products, right from the start."
        img="/page_image4.webp"
      />
      <LeftPage
        title="AI Makes Photo Editing & Retouching Easy And Efficient"
        description="VanceAI adds AI features to the photo editing workflow. Besides basic editing tools like resize, crop, and rotate, AI enhancement, restoration, background & unwanted object removal are also available in VanceAI Photo Editor to simplify workflow."
        description2="AI makes it easy for thoes who need to process photos for any use, like graphic design, photography, printing, e-commerce, and more."
        img="/page_image5.webp"
      />
      <Review/>
    </div>
  );
};

export default page;
