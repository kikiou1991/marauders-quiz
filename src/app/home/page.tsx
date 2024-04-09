"use client";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import CarouselBackground from "@/components/carousel";
import { backgroundPics as images } from "@/lib/data/pics";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import * as React from "react";
import Cards from "@/components/cards";
import CardContainer from "@/components/cards";
export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex].url;
  return (
    <div className="relative w-full h-screen bg-cover">
      <div className="absolute top-10 right-10"></div>

      <div className="flex flex-col gap-5 w-full items-center h-screen justify-center ">
        <h1>Something in the middle</h1>
        <div className="flex flex-row gap-5 ">
          <CardContainer name={"Easy"} />
          <CardContainer name={"Hard"} />
        </div>
      </div>
      <div className="absolute left-14 bottom-20">
        <About />
      </div>
    </div>
  );
}
