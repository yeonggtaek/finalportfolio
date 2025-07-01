import { Layout } from "@/components/Layout";
import Image from "next/image";
import React from "react";
import { LinkButton } from "@/components/LinkButton";

const seuolsocietyvancouver = () => {
  return (
    <Layout>
      <div className="flex pt-20 flex-col gap-10 text-black">
        {/* Title Section */}
        <div className="flex justify-between title">
          <div className="text-black text-[64px] font-bold max-xl:text-[35px] max-xl:mt-[60px]">
            BC ecosystem
            <ul className="text-[40px] max-xl:text-base font-bold ">
              <li>March - May 2025</li>
              <li>ROLE: Content Creator, Video Editor & Trend Researcher, Media Production & Insights</li>
            </ul>
          </div>
          <div>
            <Image
              className="max-xl:w-[80px] max-xl:h-[80px]"
              src="/earth.png"
              width={200}
              height={200}
              alt="earth"
            />
          </div>
        </div>
        <div className="logos flex items-center gap-12 max-xl:gap-[25]">
          <div className="text-[40px] max-xl:text-[15px] font-bold">
            Link to:
          </div>
          <LinkButton href="https://www.instagram.com/seoulsocietyvancouver/">
            <Image
              src="/Instagramlogo.png"
              width={120}
              height={120}
              alt="Instagram Logo"
              className="max-xl:w-[54px] max-xl:h-[35px]"
            />
          </LinkButton>

          <div className="text-[40px] max-xl:text-[15px] font-bold">
            Try this reel:
          </div>
          <LinkButton href="https://www.instagram.com/reel/DH-NEzVvjxT/">
            <Image
              src="/Instagramlogo.png"
              width={80}
              height={80}
              alt="Instagram Reel"
              className="max-xl:w-[40px] max-xl:h-[40px]"
            />
          </LinkButton>
        </div>

        {/* Overview Section */}
        <div className="overview flex flex-col gap-10">
          <div className="overview-title text-[64px] font-bold max-xl:text-[30px]">
          </div>
          <div className="overview-content text-[32px] text-black max-xl:text-base">
            Filming and editing videos, and finding and analyzing trending content.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default seuolsocietyvancouver;
