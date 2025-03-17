import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full pt-[100px] max-xl:pt-[50px]"
    >
      <div>
        <div className="text-[46px] font-semibold">Projects</div>
      </div>
      <div className="grid grid-cols-2 gap-10 max-xl:grid-cols-1">
        <Project
          alt="save the earth"
          src="/planet1.png"
          href="project/planet"
          title="Planet Saver"
          desc="Planet Saver is a simple web"
        />
        <Project
          alt="remedify"
          src="/remedify-1.png"
          href="project/remedify"
          title="Remedify"
          desc="Remedify is an AI-powered app"
        />
        <Project
          alt="Crafter Connect"
          src="/crafter-connect.png"
          href="project/crafter-connect"
          title="Crafter Connect"
          desc="Crafter Connect is a DIY project"
        />
        <Project
          alt="APT"
          src="/Poster.png"
          href="project/poster"
          title="“APT” Song Poster"
          desc="“APT” is a Photoshop design poster"
        />
      </div>
    </section>
  );
};
