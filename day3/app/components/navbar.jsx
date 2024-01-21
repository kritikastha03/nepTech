import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="text-black font-bold text-sm flex justify-between px-10 py-2 bg-white rounded sticky top-0 navbar ">
        <div>
          <Image src="/logo.png" width={45} height={45} />
        </div>
        <div className="flex gap-10 font-semibold btn btn-ghost text-xl">
          <Link href="/" className="hover:bg-gray-300 px-4 py-2 rounded-lg mb-1">Home</Link>
          <Link href="/About" className="hover:bg-gray-300 px-4 py-2 rounded-lg mb-1">About</Link>
          <Link href="/Contact" className="hover:bg-gray-300 px-4 py-2  rounded-lg mb-1">Contact</Link>
        </div>
        <div>
          <button className="p-2 inline rounded  bg-blue-400 text-white font-thin">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Header;
