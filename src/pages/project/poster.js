import { Layout } from "@/components/Layout";
import React from "react";
import Image from "next/image";

const PosterPage = () => {
  return (
    <Layout>
        <div className="text-black text-[64px] font-bold">
        Poster Design
            </div>
            <div className="overview flex flex-col gap-[32px] mt-[70px]">
          <div className="overview-title text-[40px] text-black font-bold">
            Project Overview
          </div>
          <div className="overview-content text-[32px] text-black">
            <span className="font-bold">APT </span>
            is a collaborative music project featuring Rosé and Bruno Mars. This design aims to visually harmonize the distinct personalities of both artists while emphasizing the mood and concept of their music.
          </div>
        </div>
    </Layout>
  );
};

export default PosterPage;
