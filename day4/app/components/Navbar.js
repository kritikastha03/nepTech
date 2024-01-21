import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <h1>
            VANCE<span>AI</span>
          </h1>
        </div>
        <div className="ml-7">
          <ul>
            <li className="ml-3 pl-3">
              <Link className="px-1 py-4 ">Product</Link>
            </li>
            <li className="ml-3 pl-3">
              <Link className="px-1 py-4 text-base">VanceAI PC</Link>
            </li>
            <li className="ml-3 pl-3">
              <Link className="px-1 py-4 text-base">Pricing</Link>
            </li>
            <li className="ml-3 pl-3">
              <Link className="px-1 py-4 text-base">API</Link>
            </li>
            <li className="ml-3 pl-3">
              <Link className="px-1 py-4 text-base">Support</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
