import React from "react";
import { FEATURES } from "../constants";

const Features = () => {
  return (
    <section className="w-[10-vw] min-h-screen p-4 mt-11 ">
      <div
        style={{ backgroundImage: 'url("/feature-bg.png")' }}
        className="w-full flex min-h-screen"
      >
        <img
          className="rotate-12 hidden lg:inline-block"
          height={700}
          width={400}
          src="phone.png"
          alt=""
        />

        <div className="relative lg:w-[70%] lg:ml-14 p-6">
          <img className="absolute -m-7 lg:-m-4" src="camp.svg" alt="" />
          <h1 className="text-5xl lg:text-7xl font-semibold mb-8">Our Features</h1>
          <div className="flex flex-wrap gap-8">
            {FEATURES.map((item,indx)=>(
              <div key={indx} className="lg:w-[27vw] flex flex-col gap-5">
              <div className="h-16 w-16 rounded-full flex items-center justify-center bg-green-500"><img src={item.icon} alt="" /></div>
              <h2 className="text-4xl font-semibold">{item.title}</h2>
              <p className="text-zinc-400">{item.description}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
