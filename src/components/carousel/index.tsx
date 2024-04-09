"use client";
import * as React from "react";
import { backgroundPics as images } from "@/lib/data/pics";

import Image from "next/image";

const CarouselBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex].url;
  console.log(currentImage);

  return (
    <div className="w-full h-full">
      <Image src={currentImage} height={100} width={100} alt="background" />;
    </div>
  );
};

export default CarouselBackground;
