import React from 'react'
import {TracingBeamDemo} from "../../components/Info"
const page = () => {
  return (
    <div>
       <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Products & Solutions
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>
        <TracingBeamDemo/>
    </div>
  )
}

export default page
