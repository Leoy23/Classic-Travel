import React from "react";
import { destinations } from "@/lib/utils";
import DestinationCards from "./DestinationCards";
import { Button } from "@mui/material";

const Destinations = () => {
  return (
    <section className="p-8 lg:p-16">
      <div className="pb-4">
        <h2 className="text-3xl lg:text-7xl text-center lg:text-end">
          Dream Destinations
        </h2>
        <h3 className="text-lg lg:text-3xl text-center lg:text-end">
          Just A Click Away...
        </h3>
      </div>
      <div className="flex flex-col gap-12 items-center sm:grid sm:grid-cols-2 justify-items-center">
        {destinations.map((dest, index) => {
          return (
            <DestinationCards
              key={index}
              id={dest.id}
              location={dest.location}
              description={dest.description}
              images={dest.images}
            />
          );
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="w-44 h-12 rounded-lg border-black border-2 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black">
          BOOK NOW
        </button>
      </div>
    </section>
  );
};

export default Destinations;
