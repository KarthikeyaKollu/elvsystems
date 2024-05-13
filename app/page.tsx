"use client"
import Image from "next/image";
import { GlobeDemo } from "./components/globe"
import { SpotlightPreview } from './components/Spotlight'

import { TracingBeamDemo } from "./components/Info"
import { InfiniteMovingCardsDemo } from './components/Cards'
import { DirectionAwareHoverDemo } from './components/DirectionCard'
import { ImagesSliderDemo } from './components/ImageSlider'
import { TabsDemo } from "./components/Tabs"
import { ParallaxScrollDemo } from "./components/ParallaxScroll"
import { StickyScrollRevealDemo } from "./components/StickyScroll"
import React, { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    document.body.classList.add('dark');
  }, [])
  return (
    <div className="">
     




      <div className="grid grid-cols-6 gap-5 h-screen">
        <div></div>
        <div className="col-span-2"><SpotlightPreview /></div>
        <div className="col-span-2"><GlobeDemo /></div>
        <div></div>
      </div>


      <div className=" p-4 max-w-7xl  mx-[9%] relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Achivements.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>

      <div className="w-[80%] mx-auto rounded-lg overflow-hidden pt-10">
        <ImagesSliderDemo />
      </div>

      <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Our Services
        </h1>
        <p className=" font-normal text-base text-neutral-300 max-w-lg mx-auto ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>

      <div className="w-[80%] mx-auto rounded-lg overflow-hidden ">
        <TabsDemo />
      </div>



      {/* <ParallaxScrollDemo/> */}
      {/* <TracingBeamDemo /> */}

      <div className=" p-4 max-w-7xl  mx-[9%] relative z-10  w-full pt-20 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Products & Solutions
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg pb-10">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>


      <div className="w-[85%] mx-auto rounded-lg overflow-hidden pt-10">
        <StickyScrollRevealDemo />
      </div>


      <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Project References
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>

      <div className="felx justify-center w-[80%] mx-auto">
        <div className="grid grid-cols-3 ">

          <DirectionAwareHoverDemo />
          <DirectionAwareHoverDemo />
          <DirectionAwareHoverDemo />
        </div>
      </div>

      <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        What Our Customers Say
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>


      <InfiniteMovingCardsDemo />

    </div>
  );
}
