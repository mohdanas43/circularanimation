"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Dummy1 = () => {
  const interiors = [
    "Lunar Horizon Lounge",
    "Celestial Vista Room",
    "Galactic Oasis",
    "Stellar Retreat",
    "Nebula Nook",
    "Cosmic Corner",
    "Astral Atrium",
    "Orbit Overlook",
    "Zenith Zone",
    "Meteorite Mansion",
    "Comet Cradle",
    "Supernova Suite",
    "Eclipse Enclave",
    "Galactic Garden",
    "Astronaut Alcove",
    "Planetarium Pavilion",
    "Asteroid Asylum",
    "Milky Way Mansion",
    "Orbit Oasis",
    "Shooting Star Suite",
    "Galaxy Gallery",
    "Nebula Niche",
    "Quasar Quarters",
    "Celestial Chamber",
    "Stellar Sanctuary",
    "Meteorite Meadows",
    "Cosmic Cavern",
    "Astro Abode",
    "Orbit Oratory",
    "Galactic Getaway",
    "Lunar Lair",
    "Astral Annex",
    "Comet Court",
    "Zenith Zenith",
    "Nebula Nest",
    "Supernova Space",
    "Meteorite Manor",
    "Orbit Outpost",
    "Astral Arcade",
    "Galactic Grotto",
    "Celestial Cabin",
    "Stellar Station",
    "Cosmic Capsule",
    "Astro Atrium",
    "Lunar Loft",
    "Meteorite Mansion",
    "Comet Cottage",
    "Galaxy Garden",
    "Nebula Nest",
    "Shooting Star Shack",
    "Quasar Quarters",
    "Celestial Cellar",
    "Astro Asylum",
    "Galactic Gazebo",
    "Lunar Lounge",
    "Meteorite Mezzanine",
    "Orbit Oasis",
    "Stellar Suite",
    "Supernova Station",
    "Zenith Zone",
  ];

  const [cursorItems, setCursorItems] = useState([]);
  const [initialRenderDone, setInitialRenderDone] = useState(false);
  const cursorRef = useRef(null);
  const galleryRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    setInitialRenderDone(true);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      console.log(galleryRef);
      if (galleryRef.current) {
        const numberOfItems = interiors.length;
        const radius = 1100;
        const centerX = window.innerWidth / 3.5;
        const centerY = window.innerHeight / 2;
        const angleIncrement = (2 * Math.PI) / numberOfItems;
        const scrollAmount = window.scrollY * 0.001;

        galleryRef.current.querySelectorAll(".item").forEach((item, index) => {
          const angle = index * angleIncrement - scrollAmount;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const rotation = (angle * 180) / Math.PI;
          console.log(item,index)
          item.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        });
      }
    };

    const handleMouseMove = (e) => {
      controls.start({
        x: e.clientX - 150,
        y: e.clientY - 200,
        transition: { duration: 1, ease: "easeOut" },
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [controls, interiors]);

  if (!initialRenderDone) {
    return (
      <div className="m-0 p-0 box-border w-full h-[100vh] font-bold text-[32px] shadow-2xl flex justify-center items-center bg-red-100   text-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="m-0 p-0 box-border w-full h-[875vh] bg-red-200   text-black">
      <motion.div
        className="cursor fixed top-0 left-0 w-[300px] h-[400px] z-0 pointer-events-none"
        animate={controls}
        ref={cursorRef}
      >
        {cursorItems.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            style={{
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            initial={{
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            animate={{
              clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ scaleY: 0, transition: { duration: 1, ease: "easeOut" } }}
          />
        ))}
      </motion.div>
      <nav className="fixed top-0 w-full p-4 flex justify-between items-center z-10 mix-blend-difference">
        <a href="#" className="text-white">
          Nextrotate
        </a>
        <p>Rotate animation using Next.js</p>
      </nav>
      <footer className="fixed bottom-0 w-full p-4 flex justify-between items-center z-10 mix-blend-difference">
        <div className="flex gap-4">
          <a href="#" className="text-white">
            Subscribe
          </a>
          <a href="#" className="text-white">
            Instagram
          </a>
          <a href="#" className="text-white">
            Twitter
          </a>
        </div>
        <p>Link in description</p>
      </footer>
      <div className="relative text-black">
        <div
          className="gallery fixed w-[200%] h-full left-[-75%] overflow-hidden text-black"
          ref={galleryRef}
        >
          {interiors.map((name, i) => (
            <div
              key={i}
              className="item"
              onMouseOver={() => {
                const img = new Image(
                  
                );
                img.src = `/images/img${i + 1}.jpg`;
                img.style.clipPath =
                  "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
                img.className = "cursor-image";
                setCursorItems((prevItems) => [...prevItems, img]);
              }}
              onMouseOut={() => {
                setCursorItems((prevItems) => prevItems.slice(0, -1));
              }}
            >
              <p style={{ color: "black" }}>
                {name} <span>({Math.floor(Math.random() * 60) + 1})</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dummy1;
