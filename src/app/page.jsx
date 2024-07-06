"use client"

import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

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
          `fixed top-0 flex flex-col h-screen shadow ease-in-out duration-300 text-zinc-50 bg-stone-950
          ${isActive ? "w-1/5 px-14 py-3 z-10" : "w-0 p-0"}`
        }
      >
        <span className="pt-20 text-4xl text-start">
          MARCEAU
        </span>

        <span className="mb-auto text-4xl text-start">
          LUTIN
        </span>

        <ul className="text-sm mb-auto">
          <li>RÉALISATEUR</li>
          <li className="my-5">MONTEUR</li>
          <li className="mb-5">CADREUR</li>
          <li>PHOTOGRAPHE</li>
        </ul>

        <div className="text-xs mt-auto text-center">
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
        src="/videos/showreel.mp4"
        autoPlay loop muted
        className={
          `object-cover fixed right-0 ease-in-out duration-300 h-screen
          ${isActive ? "w-4/5" : "w-full"}
          ${inView ? "blur-3xl scale-125" : ""}`
        }
      />

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
          `masonry md:masonry-md gap-4 ease-in-out duration-300 py-10
          ${isActive ? "w-4/5 ml-auto px-20" : "w-5/6 mx-auto"}`
        }
      >
        <Link href={`/project/${200}`} className="relative flex mb-[1.5em]">
          <Image
            src="/images/DSC03379.jpg"
            alt="Picture of the author"
            width={1000}
            height={0}
            className="rounded-lg break-inside mx-auto w-full object-contain  "
          />

          <div className="absolute top-0 left-0 w-full h-full cursor-pointer bg-stone-950 opacity-0 hover:opacity-60 ease-in-out duration-300 rounded-lg">
            <span className="text-white">Titre du projet</span>
          </div>
        </Link>

        <div className="relative mb-[1.5em]">
          <Image
            src="/images/DSC03385.jpg"
            alt="Picture of the author"
            width={1000}
            height={0}
            className="rounded-lg break-inside mx-auto w-full object-contain  "
          />

          <div className="absolute top-0 left-0 w-full h-full cursor-pointer bg-stone-950 opacity-0 hover:opacity-60 ease-in-out duration-300 rounded-lg">
            <span className="text-white">Titre du projet</span>
          </div>
        </div>

        <div className="relative mb-[1.5em]">
          <Image
            src="/images/DSC03379.jpg"
            alt="Picture of the author"
            width={1000}
            height={0}
            className="rounded-lg break-inside mx-auto w-full"
          />
        </div>

        <div className="relative mb-[1.5em]">
          <Image
            src="/images/DSC03385.jpg"
            alt="Picture of the author"
            width={1000}
            height={0}
            className="rounded-lg break-inside mx-auto w-full"
          />
        </div>

        <div className="relative mb-[1.5em]">
          <Image
            src="/images/DSC03379.jpg"
            alt="Picture of the author"
            width={1000}
            height={0}
            className="rounded-lg break-inside mx-auto w-full"
          />
        </div>

        <div className="relative mb-[1.5em]">
          <Image
            src="/images/DSC03379.jpg"
            alt="Picture of the author"
            width={1000}
            height={0}
            className="rounded-lg break-inside mx-auto w-full"
          />
        </div>

        <div className="relative mb-[1.5em]">
          <Image
            src="/images/DSC03385.jpg"
            alt="Picture of the author"
            width={1000}
            height={0}
            className="rounded-lg break-inside mx-auto w-full"
          />
        </div>

        <div className="relative mb-[1.5em]">
          <Image
            src="/images/DSC03385.jpg"
            alt="Picture of the author"
            width={1000}
            height={0}
            className="rounded-lg break-inside mx-auto w-full"
          />
        </div>

        <div className="relative mb-[1.5em]">
          <Image
            src="/images/DSC03379.jpg"
            alt="Picture of the author"
            width={1000}
            height={0}
            className="rounded-lg break-inside mx-auto w-full"
          />
        </div>
      </section>
    </main>
    </>
  );
}
