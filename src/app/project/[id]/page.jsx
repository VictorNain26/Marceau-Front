"use client"

import 'photoswipe/dist/photoswipe.css'

import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useEffect, useRef, useState } from "react";

import Image from "next/image"
import Link from "next/link";

export default function Project({ params }) {

  return (
    <main className="relative pb-7 text-white">
      <Image
        src="/images/DSC03379.jpg"
        alt="Picture of the author"
        fill
        className="object-cover fixed top-0 w-full blur-3xl -z-10"
      />

      <div className="w-3/5 mx-auto">
        <header className="flex justify-between text-white mb-10 py-4 z-10">
          <span>MARCEAU LUTIN</span>

          <div>
            <Link href={"/"} className="mr-4">
              WORK
            </Link>
            <span>LIFE</span>
          </div>
        </header>

        <div className="flex justify-between">
          <h1 className="mt-auto">Titre du Projet</h1>

          <div className="mt-auto flex flex-col">
            <span>Commercial</span>
            <span>Titre du Projet</span>
          </div>
        </div>

        <video
          src="/videos/showreel.mp4"
          controls controlsList="nodownload"
          className="w-full rounded-lg my-4"
        />

        <div className="flex justify-between mb-16">
          <span className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

          <div className="flex flex-col">
            <span>Cadreur: Marceau Lutin</span>
            <span>Directed by: Marceau Lutin</span>
          </div>
        </div>

        <section className="masonry-md gap-4">
          <Gallery>
            <div className="relative flex mb-[1.5em]">
              <video width={1000} height={0} controls className='rounded-lg break-inside mx-auto w-full object-contain cursor-pointer' src="/videos/showreel.mp4" />
            </div>

            <div className="relative flex mb-[1.5em]">
              <Item
                original="/images/DSC03379.jpg"
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    onClick={open}
                    width={1000}
                    height={0}
                    alt='project image'
                    className='rounded-lg break-inside mx-auto w-full object-contain cursor-pointer' src="/images/DSC03379.jpg"
                  />
                )}
              </Item>
            </div>

            <div className="relative flex mb-[1.5em]">
              <Item
                original="/images/DSC03385.jpg"
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    onClick={open}
                    width={1000}
                    height={0}
                    alt='project image'
                    className='rounded-lg break-inside mx-auto w-full object-contain cursor-pointer' src="/images/DSC03385.jpg"
                  />
                )}
              </Item>
            </div>

            <div className="relative flex mb-[1.5em]">
              <Item
                original="/images/DSC03379.jpg"
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    onClick={open}
                    width={1000}
                    height={0}
                    alt='project image'
                    className='rounded-lg break-inside mx-auto w-full object-contain cursor-pointer' src="/images/DSC03379.jpg"
                  />
                )}
              </Item>
            </div>
          </Gallery>
        </section>
      </div>
    </main>
  );
}
