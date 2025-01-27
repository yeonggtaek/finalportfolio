import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-[30px] font-semibold">
          Hello! I’m Yeongtaek
          <br />
          I’m a Web Designer & Developer!
        </div>
        <Intro />
        <div className="text-[46px] font-semibold text-center items-center justify-center">
        Projects
        </div>
        <Projects />
      </div>
    </Layout>
  );
}
