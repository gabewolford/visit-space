'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google"

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ['400'], 
})

const bellefair = Bellefair({
    subsets: ['latin'],
    weight: ['400'],
})

const crewData = [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "/assets/crew/image-douglas-hurley.png",
        "webp": "/assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "/assets/crew/image-mark-shuttleworth.png",
        "webp": "/assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "/assets/crew/image-victor-glover.png",
        "webp": "/assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "/assets/crew/image-anousheh-ansari.png",
        "webp": "/assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]

export default function CrewDetails() {
    const [crew, setCrew] = useState([]);
    const [currentCrew, setCurrentCrew] = useState('Douglas Hurley'); 

    useEffect(() => {
        setCrew(crewData);
    }, []);

    const handleButtonClick = (crewButton) => {
        setCurrentCrew(crewButton);
    };

    const crewButtons = crew.map((crewmember) => (
        <button
            key={crewmember.name}
            onClick={() => handleButtonClick(crewmember.name)}
        >
            <div className={`w-[15px] h-[15px] rounded-full ${
                currentCrew === crewmember.name ? 'bg-white-500' : 'bg-white-500/20'
            }`}></div>
        </button>
    ));

    const selectedCrewmember = crew.find((crewmember) => crewmember.name === currentCrew);

    if (!selectedCrewmember) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col h-full relative text-center lg:text-left">

            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col mx-auto lg:mx-0">
                    <h2 className={`${bellefair.className} uppercase text-white-500/50 text-[32px]`}>{selectedCrewmember.role}</h2>
                    <h1 className={`${bellefair.className} uppercase text-white-500 text-[56px] mb-6`}>{selectedCrewmember.name}</h1>
                    <p className={`${barlow.className} text-lightblue-500 text-lg max-w-[444px] mb-10 lg:mb-20 mx-auto lg:mx-0`}>{selectedCrewmember.bio}</p>
                    <div className="flex flex-row space-x-5 mx-auto lg:mx-0 mb-10 lg:mb-0">
                        {crewButtons}
                    </div>
                </div>
                
                <Image 
                    src={selectedCrewmember.images.png}
                    height={500}
                    width={500}
                    alt={selectedCrewmember.name}
                    className="max-w-1/3 mx-auto lg:mx-0"
                />
            </div>
        </div>
  ) 
}
