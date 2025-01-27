import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Animation } from "@/components/Animation";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex flex-col sm:flex-row items-center gap-[25rem]">
        <div className="text-[30px] font-semibold">
          Hello! I’m Yeongtaek
          <br />
          I’m a Web Designer & Developer!
          <br />
          <Intro />
        </div>
        <div>
          <Animation />
          </div>
        </div>
        <div className="text-[46px] font-semibold">
        Projects
        </div>
        <Projects />
      </div>
    </Layout>
  );
}
