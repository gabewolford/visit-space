import { Barlow_Condensed } from "next/font/google"

const barlowCondensed = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['400'], 
})

const barlowCondensedBold = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['700'], 
})

export default function CrewPage() {
    return (
      <main className="flex-1 md:flex-col lg:flex-row lg:mx-[165px] mx-10 items-center justify-around py-12">
        <div className="flex flex-row w-full gap-6 text-[28px]">
          <h4 className={`${barlowCondensedBold.className} tracking-[4.725px] text-white-500/25`}>02</h4>
          <h4 className={`${barlowCondensed.className} tracking-[4.725px] uppercase`}>Meet your crew</h4>
        </div>

        <div className="flex flex-col my-16 justify-around">
          <div className="flex flex-col lg:flex-row ">

          </div>
        </div>
      </main>
    )
  }
  