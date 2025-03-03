import React from "react";

export const GoToTop = () => {
  return (
    <div
      className="cursor-pointer z-10 font-bold w-[80px] h-[80px] max-xl:w-[60px] max-xl:h-[60px] rounded-[50%] bg-[#00000000] flex justify-center items-center fixed bottom-10 right-10"
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Top
    </div>
  );
};
