'use client'

import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google"
import { useEffect, useState } from "react"


const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ['400'], 
})

const barlowCondensedRegular = Barlow_Condensed({ 
  subsets: ['latin'],
  weight: ['300'], 
})

const bellefair = Bellefair({
    subsets: ['latin'],
    weight: ['400'],
})

const destinations = [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ]

  export default function PlanetFacts() {
    const [planets, setPlanets] = useState([]);
    const [currentPlanet, setCurrentPlanet] = useState('Moon'); // Set 'Moon' as the default current planet

    useEffect(() => {
        setPlanets(destinations);
    }, []);

    const handlePlanetClick = (planetName) => {
        setCurrentPlanet(planetName);
    };

    const planetNames = planets.map((planet) => (
        <button
            key={planet.name}
            className={`uppercase tracking-[2.7px] underline decoration-[3px] decoration-transparent underline-offset-[12px] hover:decoration-white-500/50 ${
                currentPlanet === planet.name ? 'underline decoration-white-500 underline-offset-[12px] decoration-[3px]' : ''
            }`}
            onClick={() => handlePlanetClick(planet.name)}
        >
            {planet.name}
        </button>
    ));

    const selectedPlanet = planets.find((planet) => planet.name === currentPlanet);

    if (!selectedPlanet) {
        return <div>Loading...</div>;
    }

    return (
        <section className="flex flex-col-reverse lg:flex-row gap-12 justify-between w-full items-center">

            <img src={selectedPlanet.images.png} alt={selectedPlanet.name} className="hidden lg:block w-fit h-fit" />

            <div className="flex flex-col gap-6 mt-8 lg:mt-0 mx-32 lg:mx-0 items-start lg:w-[444px]">
                <div className={`w-[285px] flex flex-row justify-between ${barlowCondensedRegular.className} text-lightblue-500 hidden lg:flex`}>
                    {planetNames}
                </div>
                <h1 className={`${bellefair.className} text-[100px] uppercase hidden lg:flex`}>{currentPlanet}</h1>
                <img src={selectedPlanet.images.png} alt={selectedPlanet.name} className="w-fit h-fit mx-auto block lg:hidden"/>
                <div className={`w-[285px] flex flex-row justify-between ${barlowCondensedRegular.className} text-lightblue-500 lg:hidden mt-12 lg:mt-0 mx-auto lg:mx-0`}>
                    {planetNames}
                </div>
                <h1 className={`${bellefair.className} text-[100px] uppercase flex lg:hidden mx-auto lg:mx-0`}>{currentPlanet}</h1>
                <p className={`${barlow.className} text-lightblue-500 text-lg mb-4 text-center lg:text-left`}>{selectedPlanet.description}</p>

                <div className="w-full h-[1px] bg-[#383B4B]"></div>

                <div className="flex flex-row mx-auto lg:mx-0">
                    <div className="flex flex-col gap-3 mr-14 text-center lg:text-left">
                        <h6 className={`${barlowCondensedRegular.className} text-sm text-lightblue-500 uppercase tracking-[2.362px]`}>Avg. Distance</h6>
                        <p className={`${bellefair.className} uppercase text-[28px]`}>{selectedPlanet.distance}</p>
                    </div>
                    <div className="flex flex-col gap-3 text-center lg:text-left">
                        <h6 className={`${barlowCondensedRegular.className} text-sm text-lightblue-500 uppercase tracking-[2.362px]`}>Est. Travel Time</h6>
                        <p className={`${bellefair.className} uppercase text-[28px]`}>{selectedPlanet.travel}</p>
                    </div>
                </div>
            </div>
          
        </section>
    );
}