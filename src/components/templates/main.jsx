"use client"

import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Main = ({ home, projects }) => {
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
            `hidden lg:flex fixed top-0 flex-col h-screen ease-in-out duration-200 text-zinc-50
            ${isActive ? "w-1/5 px-4 xl:px-14 py-3 z-10" : "w-0 p-0"}`
          }
        >
          <Image
            src={ `${home.headerbackground.data.attributes.url}` }
            alt="Picture of the author"
            width={1000}
            height={0}
            className="object-cover absolute w-full h-full left-0 top-0 blur-3xl -z-10"
          />

          <span className="pt-20 mb-auto text-3xl xl:text-4xl text-start text-nowrap">
            { home.title }
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


        <div className={ `h-screen ease-in-out duration-200 ml-auto ${isActive ? "w-4/5" : "w-full"}` }>
          <video
            src={ `${home.background.data.attributes.url}` }
            autoPlay loop muted
            className={
              `object-cover fixed right-0 ease-in-out duration-200 h-screen
              ${isActive ? "w-full lg:w-4/5" : "w-full"}
              ${inView ? "blur-3xl scale-125" : ""}`
            }
          />
          
          <ChevronLeftIcon
            className={
              `hidden lg:flex fixed w-12 text-zinc-50 cursor-pointer ease-in-out duration-300 h-full z-10
              ${isActive ? "" : "rotate-180"}`
            }
            onClick={toggleClass}
          />

          <ChevronDownIcon
            className={
              `fixed bottom-0 right-0 h-12 animate-bounce ease-in-out duration-200 text-zinc-50
              ${isActive ? "w-full lg:w-4/5" : "w-full"}
              ${inView ? "opacity-0" : ""}`
            }
          />
        </div>

        <section
          ref={ref}
          className={
            `masonry md:masonry-md gap-4 ease-in-out duration-200 py-10 z-10
            ${isActive ? "w-full lg:w-4/5 ml-auto px-4 lg:px-20" : "w-5/6 mx-auto"}`
          }
        >
          {
            projects.map((project) => (
              <Link key={project.id} href={`/project/${project.id}`} className="group relative flex mb-[1.5em]">
                <Image
                  src={ `${project.attributes.medias.data[0].attributes.url}` }
                  alt={project.attributes.titre}
                  width={5000}
                  height={0}
                  className="rounded-lg break-inside w-full object-contain group-hover:brightness-50 ease-in-out duration-300"
                />

                <div className="absolute flex w-full h-full cursor-pointer opacity-0 hover:opacity-100 rounded-lg p-4 ease-in-out duration-300">
                  <span className="text-white mt-auto">{project.attributes.title}</span>
                </div>
              </Link>
            ))
          }
        </section>
      </main>
    </>
  );
};

export default Main;
