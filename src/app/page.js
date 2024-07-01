"use client"

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Home() {
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
    <main>
      <section className="flex">
        <header
          className='p-7 w-1/5 flex flex-col text-center h-screen text-white bg-black'
        >
          <span className='mb-auto pt-20 text-4xl'>
            MARCEAU LUTIN
          </span>

          <ul className='text-xl my-auto'>
            <li>Réalisateur</li>
            <li className="my-5">Monteur</li>
            <li className="mb-5">Cadreur</li>
            <li>Photographe</li>
          </ul>

          <div className="text-xs mt-auto">
            <span>@MARCEAULUTIN</span>
          </div>
        </header>

        <video
          src="./videos/showreel.mp4"
          loop autoPlay muted
          className={`object-cover right-0 fixed h-screen w-4/5 -z-10`}
        >
          <motion.div style={{opacity: scrollYProgress}}>
            <ChevronDownIcon className="fixed bottom-0 right-0 left-0 -z-10 w-12 animate-bounce text-white mx-auto" />
          </motion.div>
        </video>
      </section>

      {/* <section className="grid justify-center min-h-screen">
        <div>

        </div>
      </section> */}
    </main>
    </>
  );
}
