import React from 'react'
import {DirectionAwareHoverDemo} from "../../components/DirectionCard"
const page = () => {
  return (
    <div>
      <div className=" p-4 max-w-7xl text-center mx-auto relative z-10  w-full pt-20 md:pt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Project References
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto ">
          Regal Technologies, popularly known as RegalTech is a system integrator of choice for leading
        </p>
      </div>

      <div className='w-[70%] grid grid-cols-3  mx-auto gap-y-16 pt-20'>
      { [1,1,1,1,1,1,1,1].map((item,i)=>
             (<DirectionAwareHoverDemo key={i}/>)
      )}
        
      </div>
    </div>
  )
}

export default page
