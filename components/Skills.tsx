"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { skills } from "@/data";
import { PinContainer } from "./ui/Pin";

const Skills = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        <span className="text-purple">My Tech Skills</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-5">
        {skills.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.head} href="https://twitter.com/">
              <div className="relative flex flex-col items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[40vh] lg:h-[50vh] mb-10">
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center flex-col">
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-purple">
                      {item.title}
                    </h1>

                    {item.skillList.map((skill, index) => (
                      <ul key={index} className="flex flex-col">
                        <li>{skill}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
