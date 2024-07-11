import React from "react";
import { FOOTER_LINKS } from "../constants";
import { FOOTER_CONTACT_INFO } from "../constants";
import { SOCIALS } from "../constants";

const Footer = () => {
  return (
    <section className="lg:h-screen/2 w-full flex flex-wrap gap-7 lg:gap-0 p-20 justify-between">
      <div className=" p-4">
        <img src="hilink-logo.svg" alt="" />
      </div>
      {FOOTER_LINKS.map((item, indx) => (
        <div key={indx} className="">
          <h2 className="text-lg font-bold">{item.title}</h2>
          {item.links.map((link, linkIndex) => (
            <h2 className="cursor-pointer text-zinc-500 hover:underline" key={linkIndex}>{link}</h2>
          ))}
        </div>
      ))}

      <div className="">
        <h2 className="text-lg font-bold">{FOOTER_CONTACT_INFO.title}</h2>
        {FOOTER_CONTACT_INFO.links.map((link, index) => (
          <div key={index}>
            {link.label} :&nbsp;&nbsp;
            <span className="font-semibold">{link.value}</span>
          </div>
        ))}
      </div>

      
      <div className=''>
        <h2 className="text-lg font-bold">{SOCIALS.title}</h2>
        <div className="flex gap-3 mt-5">
        {
          SOCIALS.links.map((img,ind)=>(
            <img key={ind} src={img} alt="" className="cursor-pointer" />
          ))
        }
        </div>
      </div>
      
    </section>
  );
};

export default Footer;
