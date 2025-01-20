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
      <div className="p-16 bg-[#ffffff] rounded-xl">
        <ProjectImage
          alt="save the earth"
          src="/planet_saver.png"
          href="project/planet"
        />
        <p>SAVE THE EARTH</p>
      </div>
      <div className="p-16 bg-[#ffffff] rounded-xl">
        <ProjectImage
          alt="remedify"
          src="/remedify.png"
          href="project/remedify"
        />
        <p>Remedify</p>
        <p>Remedify is an AI-powered app </p>
      </div>
    </div>
  );
};
