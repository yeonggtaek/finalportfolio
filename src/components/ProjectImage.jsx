import React from "react";
import Link from "next/link";
import Image from "next/image";

export const ProjectImage = ({ alt, src, href }) => {
  return (
    <Link href={href}>
      <Image width="500" height="500" alt={alt} src={src} />
    </Link>
  );
};
