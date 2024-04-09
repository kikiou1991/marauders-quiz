"use client";
import * as React from "react";
import { backgroundPics as images } from "@/lib/data/pics";

import Navbar from "@/components/Navbar";

export default function AuthPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex].url;
  return (
    <div
      className="w-full h-screen bg-cover m-0 text-white"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <Navbar />
      {children}
    </div>
  );
}
