"use client"

import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image"
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [isActive, setActive] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
    <main>
      <header
        className={
          `fixed top-0 flex flex-col text-center h-screen ease-in-out duration-300 text-zinc-50 bg-stone-950
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

            <Link
              href="https://www.youtube.com/channel/UCbseNjiHKQNT_mwCNj3Y6Rg"
              target="_blank"
              className="ml-1 cursor-pointer"
            >
              <Image src="/icons/youtube.svg" width={30} height={30} alt="Youtube icon" />
            </Link>
          </div>

          <span>@MARCEAULUTIN</span>
        </div>
      </header>

      <video
        src="./videos/showreel.mp4"
        autoPlay loop muted
        className={
          `object-cover fixed right-0 ease-in-out duration-300 h-screen
          ${isActive ? "w-4/5" : "w-full"}
          ${inView ? "brightness-[0.2]" : ""}`
        }
      >
      </video>

      <div className={ `h-screen ease-in-out duration-300 ml-auto ${isActive ? "w-4/5" : "w-full"}` }>
        <ChevronLeftIcon
          className={
            `fixed w-12 text-zinc-50 cursor-pointer ease-in-out duration-300 h-full z-10
            ${isActive ? "" : "rotate-180"}`
          }
          onClick={toggleClass}
        />

        <ChevronDownIcon
          className={
            `fixed bottom-0 right-0 h-12 animate-bounce ease-in-out duration-300 text-zinc-50
            ${isActive ? "w-4/5" : "w-full"}
            ${inView ? "opacity-0" : ""}`
          }
        />
      </div>

      <section
        ref={ref}
        className={
          `masonry ease-in-out duration-300 py-10
          ${isActive ? "w-4/5 ml-auto" : "w-5/6 mx-auto"}`
        }
      >
        <div className="relative">
          <Image
            src="/images/DSC03379.jpg"
            alt="Picture of the author"
            width={400}
            height={0}
            className="rounded-lg break-inside mb-4 mx-auto"
          />
        </div>

        <div className="relative">
          <Image
            src="/images/DSC03385.jpg"
            alt="Picture of the author"
            width={400}
            height={0}
            className="rounded-lg break-inside mb-4 mx-auto"
          />
        </div>

        <div className="relative">
          <Image
            src="/images/DSC03379.jpg"
            alt="Picture of the author"
            width={400}
            height={0}
            className="rounded-lg break-inside mb-4 mx-auto"
          />
        </div>

        <div className="relative">
          <Image
            src="/images/DSC03385.jpg"
            alt="Picture of the author"
            width={400}
            height={0}
            className="rounded-lg break-inside mb-4 mx-auto"
          />
        </div>

        <div className="relative">
          <Image
            src="/images/DSC03379.jpg"
            alt="Picture of the author"
            width={400}
            height={0}
            className="rounded-lg break-inside mb-4 mx-auto"
          />
        </div>

        <div className="relative">
          <Image
            src="/images/DSC03379.jpg"
            alt="Picture of the author"
            width={400}
            height={0}
            className="rounded-lg break-inside mb-4 mx-auto"
          />
        </div>

        <div className="relative">
          <Image
            src="/images/DSC03385.jpg"
            alt="Picture of the author"
            width={400}
            height={0}
            className="rounded-lg break-inside mb-4 mx-auto"
          />
        </div>

        <div className="relative">
          <Image
            src="/images/DSC03385.jpg"
            alt="Picture of the author"
            width={400}
            height={0}
            className="rounded-lg break-inside mb-4 mx-auto"
          />
        </div>

        <div className="relative">
          <Image
            src="/images/DSC03379.jpg"
            alt="Picture of the author"
            width={400}
            height={0}
            className="rounded-lg break-inside mb-4 mx-auto"
          />
        </div>
      </section>
    </main>
    </>
  );
}
