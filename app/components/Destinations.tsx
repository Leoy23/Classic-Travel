import React from "react";
import { destinations } from "@/lib/utils";
import DestinationCards from "./DestinationCards";

const Destinations = () => {
  return (
    <section className="p-8 lg:p-16">
      <div className="p-4">
        <h2 className="text-3xl lg:text-7xl">
          Dream Destinations Just A Click Away
        </h2>
      </div>
      <div className="flex flex-col gap-12 items-center md:grid md:grid-cols-4 p-8">
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
    </section>
  );
};

export default Destinations;
