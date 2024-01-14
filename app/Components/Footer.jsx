import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between  bg-gray-800 text-neutral-content px-10 py-3 bottom-0 sticky">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Pages</h1>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
        </div>
        <div className="grid-cols-3">
          <h1 className="text-lg font-bold">Tools</h1>
          <p>Pdf to images</p>
          <p>Images to pdf</p>
        </div>
        <div>
          <h1 className="text-xl font-bold">Hello.</h1>
          <h3>I am Digital Book.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
