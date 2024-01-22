import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="h-screen ">
        <div className="grid grid-cols-4">
          <div className="inline-block">
            Productivity
            <ul>
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
            Creativity
            <ul>
              <li>AI Photo Restorer</li>
              <li>Toongineer Cartoonizer</li>
              <li>VansPortrait</li>
              <li>AI Photo Colorizer</li>
              <li>AI Photo Retoucher</li>
              <li>AI Art Generator</li>
            </ul>
            <div>
              AIGC
              <ul>
                <li>AI Face Generator</li>
                <li>AI Portrait Generator</li>
                <li>Vtuber Maker</li>
              </ul>
            </div>
          </div>

          <div>
            Editing
            <ul>
              <li>Photo Editor</li>
              <li>Image Cropper</li>
              <li>Image Resizer</li>
              <li>Image Rotator</li>
              <li>Image Flipper</li>
            </ul>
            <div>
              Video
              <ul>
                <li>AI Video Enhancer</li>
              </ul>
            </div>
            <div>
              Generate Product Image
              <ul>
                <li>AI Background Generator</li>
                <li>AI Fashion Model Generator</li>
              </ul>
            </div>
          </div>

          <div>
            Support
            <ul>
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
        <div className="h-40 bg-gray-400">
          <p>All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
