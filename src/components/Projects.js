import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Projects = () => {
  const ProjectImage = ({ alt, src, href }) => {
    return (
      <Link href={href}>
        <Image width="300" height="288" alt={alt} src={src} />
      </Link>
    );
  };
  return (
    <div className="w-full flex gap-[100px]">
      <div>
        <ProjectImage
          alt="save the earth"
          src="/planet_saver.png"
          href="project/planet"
        />
        <p>SAVE THE EARTH</p>
        <p>Planet Saver is Simple web </p>
      </div>
      <div>
        <ProjectImage
          alt="remedify"
          src="/remedify.png"
          href="project/remedify"
        />
        <div>Remedify</div>
        <div>Remedify is an AI-powered app </div>
      </div>
    </div>
  );
};
