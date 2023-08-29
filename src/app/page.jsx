import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google"
import Link from "next/link"

const barlowCondensed = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['400'], 
})

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ['400'], 
})

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: ['400'], 
}) 

export default function Home() {
  return (
    <main className="flex flex-1 flex-col lg:flex-row lg:mx-[165px] justify-around lg:justify-between items-center py-12">
      <div className="flex flex-col gap-0 md:w-[444px] text-center lg:text-left">
        <h5 className={`${barlowCondensed.className} text-lightblue-500 text-[28px] uppercase tracking-[4.75px]`}>So, you want to travel to</h5>
        <h1 className={`${bellefair.className} text-white-500 text-[150px] uppercase`}>Space</h1>
        <p className={`${barlow.className} text-lightblue-500 text-lg leading-8`}>Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!</p>
      </div>
      <Link href='/destination' className="flex w-[274px] h-[274px] bg-white-500 justify-center items-center rounded-full hover:ring-[88px] ring-blacknavy-500/25">
        <h4 className={`${bellefair.className} text-[32px] uppercase text-blacknavy-500 text-center`}>Explore</h4>
      </Link>
    </main>
  )
}
  