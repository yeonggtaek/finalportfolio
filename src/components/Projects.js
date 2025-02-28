import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectImage } from "./ProjectImage";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full pt-[100px] max-xl:pt-[50px] "
    >
      <div>
        <div className="text-[46px] font-semibold ">Projects</div>
      </div>
      <div className="flex flex-col gap-10">
        <div>
        <div className="w-full flex gap-[100px] pt-[10px] max-xl:pt-[30px] max-xl:gap-[100px]">
          <Project
            alt="save the earth"
            src="/planet1.png"
            href="project/planet"
            title="Planet Saver"
            desc="Planet Saver is kid website"
          />
          </div>
          <div>
          <Project
            alt="remedify"
            src="/remedify-1.png"
            href="project/remedify"
            title="Remedify"
            desc="Remedify is an AI-powered app"
          />
        </div>
        <div className="w-full flex gap-[100px]">
          <Project
            alt="Crafter Connect"
            src="/crafter-connect.png"
            href="project/crafter-connect"
            title="Crafter Connect"
            desc="Crafter Connect  is DIY project"
          />
          </div>
          <div>
          <Project
            alt="APT"
            src="/Poster.png"
            href="project/poster"
            title="“APT” Song Poster"
            desc="“APT” is Photoshop design poster"
          />
          </div>
          </div>
        </div>
    </section>
  );
};
