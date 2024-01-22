import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="px-10 sticky top-0 bg-white h-14 flex items-center justify-items-center w-full">
        <div>
          <h1 className="text-indigo-700 text-xl font-semibold">
            VANCE<span className="text-yellow-600">AI</span>
          </h1>
        </div>
        <div className="ml-9">
          <ul className="flex">
            <li className="ml-3 pl-3">
              <Link className="px-1 py-4 " href="#">
                Product
              </Link>
            </li>
            <li className="ml-3 pl-3">
              <Link className="px-1 py-4 text-base" href="#">
                VanceAI PC
              </Link>
            </li>
            <li className="ml-3 pl-3">
              <Link className="px-1 py-4 text-base" href="#">
                Pricing
              </Link>
            </li>
            <li className="ml-3 pl-3">
              <Link className="px-1 py-4 text-base" href="#">
                API
              </Link>
            </li>
            <li className="ml-3 pl-3">
              <Link className="px-1 py-4 text-base" href="#">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
