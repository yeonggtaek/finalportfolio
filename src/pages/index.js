import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Animation } from "@/components/Animation";
import { Snowfall } from "@/components/Snowfall";
import { About } from "@/components/About";

export default function Home() {
  return (
    <Layout>
      <Snowfall />
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative z-10 max-xl:mt-14">
        <div className="flex flex-row max-[1280px]:flex-col items-center max-xl:items-start gap-[25rem]">
          <div className="text-[30px] max-xl:text-base font-semibold">
            Hello! I’m Yeongtaek
            <br />
            <br />
            <Intro />
          </div>
          <div className="max-xl:hidden">
            <Animation />
          </div>
        </div>
        <About />
        <Projects />
      </div>
    </Layout>
  );
}


