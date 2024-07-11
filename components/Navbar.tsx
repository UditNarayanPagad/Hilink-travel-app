import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between relative z-30">
      <div className="flex w-full lg:px-9 px-3 py-10 h-4 justify-between items-center">
        <Link href={"/"}>
        <img src="hilink-logo.svg" alt="" width={"80px"} className="lg:w-24" />
        </Link>
        <div className="lg:flex gap-5 hidden">
          {NAV_LINKS.map((link) => (
            <Link className="m-4 inline-block hover:font-semibold" href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </div>
        <Button type="lg:flex hidden text-lg font-semibold" title="login" icon="/user.svg" varient="bg-black" />
        <img className="lg:hidden " width={35} src="/menu.svg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
