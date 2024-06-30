// components/Header.js
"use client"

import { motion, useScroll } from "framer-motion";

import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-violet-700"
        style={{ scaleX: scrollYProgress }}
      />

      <video src="https://res.cloudinary.com/dblbgz4ym/video/upload/v1719612508/SHOWREEL_MARCEAU_LUTIN_2024_c885e307ad.mp4" loop autoPlay muted className='object-cover fixed h-screen w-screen -z-10'></video>

      <header className='px-72 pt-72 h-screen flex flex-col text-white'>
        <span className='sticky top-0 pt-5 text-6xl'>
          MARCEAU LUTIN
        </span>

        <span className='text-neutral-200'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </span>

        <ChevronDownIcon className="w-12 animate-bounce text-white mx-auto mt-auto" />
      </header>
    </>
  );
};

export default Header;
