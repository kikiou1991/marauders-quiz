import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="flex w-full items-center h-screen justify-center">
        <h1>Something in the middle</h1>
      </div>
      <div className="absolute left-14 bottom-20">
        <About />
      </div>
    </div>
  );
}
