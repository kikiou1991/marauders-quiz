"use client";
import React, { useEffect } from "react";
import { Avatar, Image } from "@radix-ui/react-avatar";

interface Player {
  name: string;
  id: number;
  score: number;
}

const PlayersInGame = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "",
      id: 0,
      score: 0,
    },
  ]);

  const dummyPlayers: Player[] = [
    {
      name: "Gabi",
      id: 1,
      score: 0,
    },
    {
      name: "David",
      id: 2,
      score: 1,
    },
    {
      name: "Gergo",
      id: 3,
      score: 2,
    },
  ];
  useEffect(() => {
    setPlayers(dummyPlayers);
  }, []);

  return (
    <div className="flex md:flex-col flex-row bg-white text-black font-semibold md:min-h-[300px] md:w-[180px] w-[370px] h-[150px] justify-evenly p-2 rounded-lg ">
      {players
        .sort((a, b) => b.score - a.score)
        .map((player) => (
          <div
            key={player.id}
            className="flex flex-row md:gap-2 w-[110px] md:w-full items-center p-3 border-2 rounded-lg bg-slate-200 border-slate-300"
          >
            <Avatar className="AvatarRoot">
              <Image
                className="AvatarImage"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt={player.name}
              />
            </Avatar>
            <div>{player.name}</div>
          </div>
        ))}
    </div>
  );
};

export default PlayersInGame;
