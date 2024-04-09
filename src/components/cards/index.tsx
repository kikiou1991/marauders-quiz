import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { backgroundPics } from "@/lib/data/pics";

interface CardContainerProps {
  name?: string;
}

const CardContainer = ({ name }: CardContainerProps) => {
  const currentImage = backgroundPics[0].url;
  return (
    <Card
      className="relative overflow-hidden bg-hpcover hover:scale-105 ease-in duration-150 w-[250px] h-[325px]"
      style={{
        // backgroundImage: `url(${currentImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CardContent className="absolute inset-0 flex items-center transition-all hover:scale-115 font-semibold text-5xl  justify-center">
        <div className="text-grey-500 opacity-75 ">{name}</div>
      </CardContent>
    </Card>
  );
};

export default CardContainer;
