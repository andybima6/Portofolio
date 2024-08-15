"use client";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "about me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit laboriosam laudantium sed repellat dolorem dolore atque porro? Magni ea officia eius culpa libero nostrum tempore! Doloremque autem libero incidunt!",
  info: [
    {
      fieldname: "name",
      fieldValue: "Andy Nugraha Putra",
    },
    {
      fieldname: "Phone",
      fieldValue: "0812-1678-5571",
    },
    {
      fieldname: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldname: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldname: "Email",
      fieldValue: "andybima6@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldValue: "Avaible",
    },
    {
      fieldname: "Languages",
      fieldValue: "English, Indonesia",
    },
  ],
};

// Experince daata
const experience = {
  icon: "/assets/resume/bade.svg",
  title: "My Experince",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit laboriosam laudantium sed repellat dolorem dolore atque porro? Magni ea officia eius culpa libero nostrum tempore! Doloremque autem libero incidunt!",
  items: [
    {
      Instansi: "Bem Polinema",
      position: "Menteri Pemuda Dan Olahraga",
      date: "2024 - 2025",
    },
    {
      Instansi: "Workshop Risek Informatika",
      position: "Full Stack Developer",
      date: "2022 - 2026",
    },
    {
      Instansi: "Ngalam Backend",
      position: "UI/UX",
      date: "2022 - Present",
    },
    {
      Instansi: "Phoenix Organizer",
      position: "Tentatif",
      date: "2022 - Present",
    },
  ],
};

// Education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit laboriosam laudantium sed repellat dolorem dolore atque porro? Magni ea officia eius culpa libero nostrum tempore! Doloremque autem libero incidunt!",
  items: [
    {
      institution: "Online Course Platform",
      degree: " Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: " Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: " Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: " Full Stack Web Development Bootcamp",
      duration: "2023",
    },
  ],
};

// Skills
const skills = {
  title: "My SKills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit laboriosam laudantium sed repellat dolorem dolore atque porro? Magni ea officia eius culpa libero nostrum tempore! Doloremque autem libero incidunt!",
  skillList: [
    {
      icon: <FaHtml5></FaHtml5>,
      name: "HTML5",
    },
    {
      icon: <FaCss3></FaCss3>,
      name: "CSS",
    },
    {
      icon: <FaJs></FaJs>,
      name: "JavaScript",
    },
    {
      icon: <FaReact></FaReact>,
      name: "React",
    },
    {
      icon: <FaFigma></FaFigma>,
      name: "Figma",
    },
    {
      icon: <FaNodeJs></FaNodeJs>,
      name: "Node Js",
    },
    {
      icon: <SiTailwindcss></SiTailwindcss>,
      name: "Tailwind",
    },
    {
      icon: <SiNextdotjs></SiNextdotjs>,
      name: "Next.js",
    },
  ],
};

const resume = () => {
  return (
    <motion.div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}>
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skill</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="mih-h-[70px] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] mih-h-[60px] text-center lg:text-left ">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Instansi}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] mih-h-[60px] text-center lg:text-left ">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 xl:mx-0">{skills.description}</p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                <div className="text-6xl group-hover:text-accent transtion-all duration-300 ">{item.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize ">{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 ">
                        <span className="text-white/60 ">
                          {item.fieldname}
                        </span>
                        <span className="text-xl">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
