import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectImage } from "./ProjectImage";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <div className="w-full flex gap-[100px]">
      <Project
        alt="save the earth"
        src="/planet-saver.png"
        href="project/planet"
        title="Planet Saver"
        desc="Planet Saver is Simple web"
      />
      <Project
        alt="remedify"
        src="/remedify-1.png"
        href="project/remedify"
        title="Remedify"
        desc="Remedify is an AI-powered app"
      />
    </div>
  );
};
