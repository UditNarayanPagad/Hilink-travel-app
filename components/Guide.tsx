import React from "react";

const Guide = () => {
  return (
    <section className="w-[100vw]">
      <div className=" min-h-[50vh] p-5 mt-6 lg:m-11 lg:flex w-full items-center">
        <div className="relative lg:w-[50%] lg:p-8 ">
          <img className="absolute -top-11" src="./camp.svg" alt="" />
          <h2 className="text-green-500 text-xl">WE ARE HERE FOR YOU</h2>
          <h1 className="text-5xl font-semibold mt-2 mb-5 lg:text-7xl">
            Guide You to Easy Path
          </h1>
        </div>
        <p className="text-lg text-zinc-500 lg:w-[50%] lg:pr-20 ">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain
        </p>
      </div>
      <div className="w-full relative">
        <img src="./boat.png" alt="" />
        <div className="absolute p-3 top-2 left-2 lg:top-11 lg:left-12 h-44 w-60 rounded-2xl bg-white shadow-lg flex items-center">
          <img src="./meter.svg" alt="" />
          <div className="flex flex-col gap-9 ml-2">
          <div >
            <div className="flex justify-between gap-6 items-center">
              <p className="text-lg text-zinc-400">Destination</p><p className="font-bold text-green-500">48 min</p>
            </div>
            <h2 className="text-xl font-semibold">Aguas Calientes</h2>
          </div>
          <div>
            <div>
              <p className="text-lg text-zinc-400">Start track</p>
            </div>
            <h2 className="text-xl font-semibold">Wonorejo Pasuruan</h2>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
