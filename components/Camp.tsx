import React from "react";

const Camp = () => {
  return (
    <section className="min-h-[100vh] relative">
      <div className="relative w-[100vw] lg:h-[90vh] h-[50%] flex gap-4 lg:gap-14 p-3 overflow-x-hidden">
        <img className="rounded-lg lg:rounded-2xl " src="./img-1.png" width="90%" alt="" />
        <img src="./img-2.png" className="rounded-lg lg:rounded-2xl" alt="" />
        <div className="absolute flex items-center lg:top-12 lg:left-12 top-6 left-7 gap-2">
          <div className="w-11 h-11 lg:w-16 lg:h-16 bg-green-400 rounded-full flex items-center justify-center">
            <img src="./folded-map.svg" width="70%" alt="" />
          </div>
          <div className="text-white">
            <h1 className="text-lg font-bold">Putuk Truno Camp</h1>
            <p className="text-sm">Prigen, Pasuruan</p>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 flex items-center gap-5 lg:left-12 lg:bottom-12">
          <div className="flex -space-x-4">
            <img src="./person-1.png" width={40} alt="" />./
            <img src="./person-2.png" width={40} alt="" />
            <img src="./person-3.png" width={40} alt="" />
            <img src="./person-4.png" width={40} alt="" />
          </div>
          <h1 className="text-white font-bold lg:text-lg">50+ Joined</h1>
        </div>
      </div>
      <div className="bg-green-600 m-9 rounded-3xl p-6 lg:p-16 text-white flex flex-col gap-6 lg:absolute lg:w-[50vw] lg:right-0 lg:-bottom-9 ">
        <h1 className="text-2xl lg:text-4xl"><strong>Feeling Lost</strong> And Not Knowing <br />The Way?</h1>
        <p className="lg:text-xl">
          Starting from the anxiety of the climbers when visiting a new climbing
          location, the possibility of getting lost is very large. That's why we
          are here for those of you who want to start an adventure
        </p>
        <img className="absolute right-0" src="./quote.svg" alt="" />
      </div>
    </section>
  );
};

export default Camp;
