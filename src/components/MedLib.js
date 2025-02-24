import Image from "next/image";
import React from "react";

export const MedLib = () => {
  return (
    <div>
      <div className="overview-title text-[64px] text-[#007972] font-bold justify-center flex mt-10 mb-20">
        Medication Library
      </div>
      <div className="flex gap-[130px]">
        <Image
          src="/medlib.png"
          width={500}
          height={1010}
          alt="Medication Library"
        />
        <div className="text-[24px] leading-[80px]">
          <span className="font-bold">Medication Library</span> allows users to
          review all their medications in one clear, organized space, making it
          easier to track prescriptions without confusion. With navigation and
          easy-to-read details, users can quickly access essential information
          such as dosage, frequency, duration, and side effects. By providing
          easy-to-understand medication details, the library empowers users to
          take control of their health. Whether managing multiple prescriptions
          or simply needing a quick reference, this feature ensures a seamless
          and informed medication experience.
        </div>
      </div>
    </div>
  );
};
