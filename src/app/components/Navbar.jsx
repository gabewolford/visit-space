'use client'

import Link from "next/link"
import Image from "next/legacy/image"
import { usePathname } from 'next/navigation';
import { Barlow_Condensed } from "next/font/google"

const barlowCondensedRegular = Barlow_Condensed({ 
    subsets: ['latin'],
    weight: ['400'], 
  })

const barlowCondensedBold = Barlow_Condensed({ 
    subsets: ['latin'],
    weight: ['700'], 
  })

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-row justify-between md:pt-0 lg:pt-10">
            <Link href="/" className="mx-12 flex items-center">
                <Image 
                    src="/assets/shared/logo.svg" 
                    alt="nav logo" 
                    width={48} 
                    height={48} 
                />
            </Link>

            <div className="flex items-center">
                <div className="hidden lg:block h-[1px] w-[473px] bg-white-500/25"></div>
            </div>


            <div className="flex flex-row bg-black-500 backdrop-blur-2xl h-[96px] lg:w-[830px] justify-center px-12">
                <div className={`flex gap-12 ${barlowCondensedRegular.className} uppercase tracking-[2.7px] md:text-sm lg:text-base`}>
                    <Link href="/">
                        <div className={`flex gap-2 border-b-[3px] border-transparent hover:border-b-[3px] hover:border-white-500/50 items-center h-full ${pathname === '/' ? 'border-b-[3px]} border-white-500' : ''}`}>
                            <p className={`hidden lg:block ${barlowCondensedBold.className}`}>00</p>
                            <p className={barlowCondensedRegular.className}>Home</p>
                        </div>
                    </Link>

                    <Link href="/destination">
                        <div className={`flex gap-2 border-b-[3px] border-transparent hover:border-b-[3px] hover:border-white-500/50 items-center h-full ${pathname === '/destination' ? 'border-b-[3px]} border-white-500' : ''}`}>
                            <p className={`hidden lg:block ${barlowCondensedBold.className}`}>01</p>
                            <p className={barlowCondensedRegular.className}>Destination</p>
                        </div>
                    </Link>

                    <Link href="/crew">
                        <div className={`flex gap-2 border-b-[3px] border-transparent hover:border-b-[3px] hover:border-white-500/50 items-center h-full ${pathname === '/crew' ? 'border-b-[3px]} border-white-500' : ''}`}>
                            <p className={`hidden lg:block ${barlowCondensedBold.className}`}>02</p>
                            <p className={barlowCondensedRegular.className}>Crew</p>
                        </div>
                    </Link>

                    <Link href="/technology">
                    <div className={`flex gap-2 border-b-[3px] border-transparent hover:border-b-[3px] hover:border-white-500/50 items-center h-full ${pathname === '/technology' ? 'border-b-[3px]} border-white-500' : ''}`}>
                            <p className={`hidden lg:block ${barlowCondensedBold.className}`}>03</p>
                            <p className={barlowCondensedRegular.className}>Technology</p>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </nav>
    )
}