import Image from "next/image";
import React from "react";

export const FinalDesign = () => {
  return (
    <div className="mt-[20]">
      <div className="flex flex-col items-center gap-[40px]">
        <div className="overview-title text-[64px] text-[#007972] font-bold">
          FinalDesign
        </div>
        <div className="flex flex-col">
          <div className="flex max-xl:flex-col gap-20 justify-center mt-10">
            <Image src="/final1.png" width={500} height={900} alt="final" />
            <Image src="/final2.png" width={500} height={900} alt="final2" />
          </div>
          <div className="flex max-xl:flex-col gap-20 justify-center mt-12">
            <Image src="/final3.png" width={500} height={900} alt="final3" />
            <Image src="/final4.png" width={500} height={900} alt="final4" />
          </div>
          <div className="flex max-xl:flex-col gap-20 justify-center mt-12">
            <Image src="/final5.png" width={500} height={900} alt="final5" />
            <Image src="/final6.png" width={500} height={900} alt="final6" />
          </div>
        </div>
      </div>
    </div>
  );
};
