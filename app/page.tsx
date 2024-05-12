import Image from "next/image";
import { GlobeDemo } from "./components/globe"
import { SpotlightPreview } from './components/Spotlight'
import { NavbarDemo } from './components/Nav'
import { TracingBeamDemo } from "./components/Info"
import { InfiniteMovingCardsDemo } from './components/Cards'
import { DirectionAwareHoverDemo } from './components/DirectionCard'
import { ImagesSliderDemo } from './components/ImageSlider'
import { TabsDemo } from "./components/Tabs"
import {ParallaxScrollDemo} from "./components/ParallaxScroll"
import {StickyScrollRevealDemo} from "./components/StickyScroll"
export default function Home() {
  return (
    <main className="">
      <NavbarDemo />
      <div className="grid grid-cols-3">
        <div className="col-span-2"><SpotlightPreview /></div>
        <div className="col-span-1"><GlobeDemo /></div>
      </div>
      <ImagesSliderDemo />
      <TabsDemo />
      {/* <ParallaxScrollDemo/> */}
      {/* <TracingBeamDemo /> */}
    
     
      <StickyScrollRevealDemo/>
      <DirectionAwareHoverDemo/>
      <InfiniteMovingCardsDemo/>

    </main>
  );
}
