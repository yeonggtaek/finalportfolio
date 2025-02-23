import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex flex-col gap-[50px] w-[1082px] bg-[#F1F1E7] rounded-[50px] px-[60px] py-[84px] pb-[180px]">
      <div className="text-[#00A39B] text-[64px] font-bold">Logo</div>
      <Image src="/remedify-logo.png" width={910} height={180} alt="logo" />
    </div>
  );
};

export default Logo;