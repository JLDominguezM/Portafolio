import React from "react";
import { awardDetails } from "../Details";

function Awards() {
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Awards & Recognition
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {awardDetails.map(({ place, event }, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-dark-card rounded-lg shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold text-green-500">{place}</h2>
            <p className="mt-2 text-content">{event}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Awards;