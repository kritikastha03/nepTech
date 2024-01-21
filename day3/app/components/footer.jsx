import React from "react";
import Link from "next/link";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className=" bg-black px-2 py-6 pl-3 grid grid-cols-4">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold  text-white">Pages</h1>
          <Link href="/About" className="text-gray-400 font-semibold text-sm">
            About
          </Link>
          <Link href="/Contact" className="text-gray-400 font-semibold text-sm">
            Contact
          </Link>
        </div>
        <div>
          <h1 className="text-lg font-bold  text-white">Tools</h1>
          <p className="text-gray-400 font-semibold text-sm">Pdf to images</p>
          <p className="text-gray-400 font-semibold text-sm">Images to pdf</p>
        </div>
        <div>
          <h1 className="text-xl font-bold  text-white">Hello.</h1>
          <h3 className="text-gray-400 font-semibold  text-sm">
            I am Digital Book.
          </h3>
          <p className="text-gray-400 font-semibold text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sapiente aperiam perferendis repudiandae corporis deserunt atque,
            esse hic excepturi error.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold  text-white">Social Media</h1>
          <div className="flex items-center gap-1">
            <BiLogoInstagramAlt color="purple" size={35}/>
            <FaFacebookSquare  color="blue" size={30} className="mr-2"/>
            <div className="bg-white rounded p-1"><FaXTwitter size={20} /></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
