// components/Header.js
"use client"

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["end", "start"]
  });

  useEffect(() => {
    scrollYProgress.on("change", e => console.log(e));
  }, []);

  return (
    <>
      <header
        className='px-72 pt-72 h-screen flex flex-col text-white'
      >
        <span className='sticky top-0 pt-5 text-6xl'>
          MARCEAU LUTIN
        </span>

        <motion.span className='text-neutral-200' style={{opacity: scrollYProgress}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </motion.span>

        <motion.div style={{opacity: scrollYProgress}}>
          <ChevronDownIcon className="fixed bottom-0 right-0 left-0 -z-10 w-12 animate-bounce text-white mx-auto" />
        </motion.div>
      </header>
    </>
  );
};

export default Header;
