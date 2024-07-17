import React from 'react'
import Button from './Button'

const GetApp = () => {
  return (
    <section style={{ backgroundImage: 'url("/pattern.png")' }} className='bg-cover min-h-screen lg:h-screen w-full bg-zinc-800 text-white lg:flex items-center lg:overflow-hidden'>
      <div className='lg:w-[50%] pt-10 p-8 flex flex-col gap-11 lg:pt-26 lg:pl-16'>
        <h1 className='lg:text-8xl text-5xl font-semibold'>Get for free now!</h1>
        <p>Available on iOS and Android</p>
        <div className='lg:flex'>
          <Button type="flex text-xl bg-zinc-900 font-semibold mt-5 lg:mt-0 lg:ml-3 lg:w-52" title="Play Store" icon="android.svg" varient="bg-white border-[1px] "/>
          <Button type="flex text-xl font-semibold text-zinc-700 drop-shadow-lg mt-5 lg:mt-0 lg:ml-3 lg:w-52" title="App Store" icon="apple.svg" varient="bg-white "/>
        </div>
      </div>
      <div>
        <img src="./phones.png" alt="" />
      </div>
    </section>
  )
}

export default GetApp