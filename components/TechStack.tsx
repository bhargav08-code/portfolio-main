"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const experts = [
  {
    id: 1,
    name: "MongoDB",

    image: "/assets/img2.png",
  },
  {
    id: 2,
    name: "Express.Js",
    image: "/assets/img3.png",
  },
  {
    id: 3,
    name: "React.Js",

    image: "/assets/img4.png",
  },
  {
    id: 4,
    name: "Node.Js",

    image: "/assets/img5.png",
  },
  {
    id: 5,
    name: "MySQL",

    image: "/assets/img6.png",
  },
  {
    id: 6,
    name: "Tailwind",

    image: "/assets/img7.png",
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
