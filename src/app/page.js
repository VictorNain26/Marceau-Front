"use client"

import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Image from "next/image"
import Link from "next/link";

export default function Home() {
  const [isActive, setActive] = useState(true);
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["end", "start"]
  });

  useEffect(() => {
    console.log(isActive);
  });

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
    <main>
      <header
        className={
          `fixed top-0 flex flex-col text-center h-screen ease-linear duration-200 text-zinc-50 bg-stone-950 -z-10
          ${isActive ? "w-1/5 p-7" : "w-0 p-0"}`
        }
      >
        <span className="mb-auto pt-20 text-4xl text-nowrap">
          MARCEAU LUTIN
        </span>

        <ul className="text-xl mb-auto">
          <li>RÉALISATEUR</li>
          <li className="my-5">MONTEUR</li>
          <li className="mb-5">CADREUR</li>
          <li>PHOTOGRAPHE</li>
        </ul>

        <div className="text-xs mt-auto">
          <div className="flex justify-center mb-2">
            <Link href="https://www.instagram.com/maresso__/" target="_blank" className="mr-1 cursor-pointer">
              <Image src="/icons/instagram.svg" width={30} height={30} alt="Instagram icon" />
            </Link>

            <Link href="https://www.youtube.com/channel/UCbseNjiHKQNT_mwCNj3Y6Rg" target="_blank" className="ml-1 cursor-pointer">
              <Image src="/icons/youtube.svg" width={30} height={30} alt="Youtube icon" />
            </Link>
          </div>

          <span>@MARCEAULUTIN</span>
        </div>
      </header>

      <div className={ `h-screen ease-linear duration-200 ml-auto ${isActive ? "w-4/5" : "w-full"}` }>
        <video
          src="./videos/showreel.mp4"
          autoPlay loop muted
          className={`object-cover fixed right-0 ease-linear duration-200 h-screen -z-10 ${isActive ? "w-4/5" : "w-full"}`}
        >
        </video>

        <ChevronLeftIcon
          className={
            `fixed w-12 text-zinc-50 cursor-pointer ease-linear duration-300 h-full z-10
            ${isActive ? "" : "rotate-180"}`
          }
          onClick={toggleClass}
        />

        <ChevronDownIcon
          className={
            `fixed bottom-0 right-0 h-12 animate-bounce ease-linear duration-200 text-zinc-50
            ${isActive ? "w-4/5" : "w-full"}`
          }
        />
      </div>

      <section className={ `min-h-screen bg-black opacity-30 ease-linear duration-200 ml-auto ${isActive ? "w-4/5" : "w-full"}` }>
        <div>

        </div>
      </section>
    </main>
    </>
  );
}
