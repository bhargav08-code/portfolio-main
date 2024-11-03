"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const experts = [
  {
    id: 1,
    name: "MongoDB",

    image:"/img2.svg",
  },
  {
    id: 2,
    name: "Express.Js",
    image: "/img3.svg",
  },
  {
    id: 3,
    name: "React.Js",

    image: "/img4.svg",
  },
  {
    id: 4,
    name: "Node.Js",

    image: "/img5.svg",
  },
  {
    id: 5,
    name: "MySQL",

    image: "/img6.svg",
  },
  {
    id: 6,
    name: "Tailwind",

    image: "/img7.svg",
  },
    {
    id: 7,
    name: "FireBase",

    image: "/firebase.svg",
  },
    {
    id: 7,
    name: "GraphQL",

    image: "/firebase.svg",
  },
];

function TechStack() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          My Tech Stack
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover Modern Web Technologies And Implementing In Real World
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={experts} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default TechStack;
