"use client";
import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project-1",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, quas! Maxime inventore accusamus provident.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "JavaScript",
      },
    ],
    image: "/path-to-your-image/image1.jpg",
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "project-2",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, quas! Maxime inventore accusamus provident.",
    stack: [
      {
        name: "Next.Js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Node.js",
      },
    ],
    image: "/path-to-your-image/image2.jpg",
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentIndex = swiper.activeIndex;
    // Update Project State based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duraiton: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[50px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {item.name}
                    {/* Remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Button */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute gap-2 right-0 bottom-[calc(50%_-_22px] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transtion-all" iconStyles="">

              </WorkSliderBtns>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
