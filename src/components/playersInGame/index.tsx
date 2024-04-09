"use client";
import React, { useEffect } from "react";
import { Avatar, Image } from "@radix-ui/react-avatar";

const PlayersInGame = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "",
      id: 0,
    },
  ]);

  const dummyPlayers = [
    {
      name: "Gabi",
      id: 1,
    },
    {
      name: "David",
      id: 2,
    },
    {
      name: "Gergo",
      id: 3,
    },
  ];
  useEffect(() => {
    setPlayers(dummyPlayers);
  }, []);

  return (
    <div className="flex md:flex-col flex-row bg-white text-black font-semibold md:min-h-[300px] md:w-[150px] w-[370px] h-[150px] justify-evenly p-2 rounded-lg ">
      {players.map((player) => (
        <div key={player.id} className="flex flex-row gap-2 items-center">
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
