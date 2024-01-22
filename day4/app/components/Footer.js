import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="border-yellow-500 border-[1.5px] mt-14"/>
      <footer className="mt-10">
        <div className="grid grid-cols-4 ml-14">
          <div className="inline-block">
            <h1 className="text-lg font-bold mb-6">Productivity</h1>
            <ul className="flex flex-col gap-3 text-[13px]">
              <li>AI Image Enhancer</li>
              <li>AI Image Upscaler</li>
              <li>AI Anime Upscaler</li>
              <li>AI Image Denoiser</li>
              <li>AI Image Sharpener</li>
              <li>AI Background Remover</li>
              <li>AI Background Remover</li>
              <li>AI JPEG Artifact Remover</li>
              <li>AI Portrait Retoucher</li>
              <li>AI Photo Dehaze</li>
              <li>Image Compressor</li>
              <li>AI Passport Photo Maker</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold mb-6">Creativity</h1>
            <ul className="flex flex-col gap-3 text-[13px]">
              <li>AI Photo Restorer</li>
              <li>Toongineer Cartoonizer</li>
              <li>VansPortrait</li>
              <li>AI Photo Colorizer</li>
              <li>AI Photo Retoucher</li>
              <li>AI Art Generator</li>
            </ul>
            <div>
              <h1 className="text-lg font-bold my-6">AIGC</h1>
              <ul className="flex flex-col gap-3 text-[13px]">
                <li>AI Face Generator</li>
                <li>AI Portrait Generator</li>
                <li>Vtuber Maker</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-bold mb-6">Editing</h1>
            <ul className="flex flex-col gap-3 text-[13px]">
              <li>Photo Editor</li>
              <li>Image Cropper</li>
              <li>Image Resizer</li>
              <li>Image Rotator</li>
              <li>Image Flipper</li>
            </ul>
            <div>
              <h1 className="text-lg font-bold my-6">Video</h1>
              <ul className="flex flex-col gap-3 text-[13px]">
                <li>AI Video Enhancer</li>
              </ul>
            </div>
            <div>
             <h1 className="text-lg font-bold my-6">Generate Product Image</h1>
              <ul className="flex flex-col gap-3 text-[13px]">
                <li>AI Background Generator</li>
                <li>AI Fashion Model Generator</li>
              </ul>
            </div>
          </div>

          <div>
           <h1 className="text-lg font-bold mb-6">Support</h1>
            <ul className="flex flex-col gap-3 text-[13px]">
              <li>API Documents</li>
              <li>Configuration Generator</li>
              <li>Help & FAQ</li>
              <li>Contact US</li>
              <li>About US</li>
              <li>Media Reviews</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        
        <div className="h-32 mt-10 bg-gray-300 flex justify-center items-center">
          <p className="text-sm text-gray-500">Copyright © 2024 VanceAI Technology. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
