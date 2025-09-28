import React from "react";
import { communityDetails } from "../Details";

function Community() {
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Community Involvement
      </h1>
      <div className="mt-10 max-w-4xl mx-auto">
        {communityDetails.map(({ role, organization, duration, description }) => (
          <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
            <div className="flex justify-between items-center">
              <h1 className="text-content md:text-lg lg:text-xl">{role}</h1>
              <p className="text-content text-xs md:text-sm font-light min-w-fit">{duration}</p>
            </div>
            <p className="text-content text-sm font-semibold pt-2">{organization}</p>
            <p className="text-content text-sm mt-2">{description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Community;