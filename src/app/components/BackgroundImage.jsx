'use client'

import Image from "next/image"
import { usePathname } from 'next/navigation';

export default function BackgroundImage() {
    const location = usePathname();

    const backgroundImageMap = {
        '/': {
            mobile: "/assets/home/background-home-mobile.jpg",
            tablet: "/assets/home/background-home-tablet.jpg",
            desktop: "/assets/home/background-home-desktop.jpg",
        },
        '/destination': {
            mobile: "/assets/destination/background-destination-mobile.jpg",
            tablet: "/assets/destination/background-destination-tablet.jpg",
            desktop: "/assets/destination/background-destination-desktop.jpg",
        },
        '/crew': {
            mobile: "/assets/crew/background-crew-mobile.jpg",
            tablet: "/assets/crew/background-crew-tablet.jpg",
            desktop: "/assets/crew/background-crew-desktop.jpg",
        },
        '/technology': {
            mobile: "/assets/technology/background-technology-mobile.jpg",
            tablet: "/assets/technology/background-technology-tablet.jpg",
            desktop: "/assets/technology/background-technology-desktop.jpg",
        },
    };

    const currentPageBackground = backgroundImageMap[location];

    // if (!currentPageBackground) {
    //     // Handle cases where the current location is not defined in the map
    //     return null; // You can return a default background or handle it as you see fit
    // }
    
    return (
        <div className={`absolute inset-0 -z-50 background-image`}>
            <Image
                src={currentPageBackground.mobile}
                layout="fill"
                objectFit="cover"
                priority
                alt=""
                className="block md:hidden w-full h-full"
            />
            <div className="hidden md:block">
                <Image
                    src={currentPageBackground.tablet}
                    layout="fill"
                    objectFit="cover"
                    priority
                    alt=""
                    className="block w-full h-full"
                />
            </div>
            <div className="hidden lg:block">
                <Image
                    src={currentPageBackground.desktop}
                    layout="fill"
                    objectFit="cover"
                    priority
                    alt=""
                    className="block w-full h-full"
                />
            </div>
        </div>
    )
}
