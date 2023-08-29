import { Barlow_Condensed } from "next/font/google"
import PlanetFacts from "../components/PlanetFacts"

const barlowCondensed = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['400'], 
})

const barlowCondensedBold = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['700'], 
})

export default function DestinationPage() {
    return (
      <main className="flex-1 md:flex-col lg:flex-row lg:mx-[165px] mx-10 items-center justify-around py-12">
        <div className="flex flex-row w-full gap-6 text-[28px]">
          <h4 className={`${barlowCondensedBold.className} tracking-[4.725px] text-white-500/25`}>01</h4>
          <h4 className={`${barlowCondensed.className} tracking-[4.725px] uppercase`}>Pick your destination</h4>
        </div>

        <div className="flex flex-col lg:flex-row my-16 justify-between">
          <PlanetFacts />
        </div>
      </main>
    ) 
  }
  