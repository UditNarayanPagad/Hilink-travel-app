import React from 'react'
import Button from './Button'

const Hero = () => {

  return (
    <div className='w-full flex lg:flex-row flex-col min-h-screen p-5 pt-7 lg:p-11'>
      <div className='relative flex flex-col gap-9 lg:w-[50%]'>
        <img className='absolute -top-7 w-10 lg:w-12' src="./camp.svg" alt="" />
        <h1 className='text-6xl font-semibold lg:text-8xl md:text-7xl'>Putuk Truno <br /> Camp Area</h1>
        <p className='text-zinc-400'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
        <div className='flex items-center'>
          <img src="./star.svg" alt="" />
          <img src="./star.svg" alt="" />
          <img src="./star.svg" alt="" />
          <img src="./star.svg" alt="" />
          <img src="./star.svg" alt="" />
          <p className='ml-4'><strong>198k</strong> <span>Excellent Reviews</span></p>
        </div>
        <div className='lg:flex'>
        <Button type="flex text-xl font-semibold" title="Download App" icon="" varient="bg-green-500" />
        <Button type="flex text-xl font-semibold text-zinc-700 drop-shadow-lg mt-5 lg:mt-0 lg:ml-3" title="How We Work?" icon="play.svg" varient="bg-white " />
        </div>
      </div>
      <div className='relative bg-hero-pattern w-full lg:w-[50%] min-h-[50vh] bg-center bg-cover lg:mb-28 ml-20 lg:ml-0 '>
        <div className='bg-black w-[60%] md:w-[50%] lg:w-[45%] lg:h-[40%] rounded-3xl absolute top-20 lg:top-48 lg:left-11 p-4 flex flex-col gap-5 -left-16'>
          <div><div className='flex justify-between'><h4 className='text-zinc-300'>Location</h4><img src="./close.svg" alt="" className='cursor-pointer' /></div>
          <h2 className='text-white text-xl font-semibold'>Aguas Calientes</h2></div>
          <div className='flex'>
            <div className='w-[50%]'><p className='text-zinc-400'>Distance</p><h2 className='text-white text-xl font-semibold'>173.28 mi</h2></div>
            <div className='w-[50%]'><p className='text-zinc-400'>Elevation</p><h2 className='text-white text-xl font-semibold'>2.040 km</h2></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero