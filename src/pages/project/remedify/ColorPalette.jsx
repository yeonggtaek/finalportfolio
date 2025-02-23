import React from "react";

const ColorPalette = ({ colorCode, variant, title, description }) => {
  return (
    <div className="flex-1 shadow-xl rounded-2xl bg-white overflow-hidden">
      <div
        className={`p-[14px] pt-10 text-white text-md font-bold`}
        style={{ backgroundColor: colorCode }}
      >
        <div>HEX</div>
        <div>{colorCode}</div>
      </div>
      <div className="p-[14px]">
        <div className="text-xl font-bold">{title}</div>
        <div className="mt-[6px] mb-[14px] text-[#808080] font-bold">
          {variant}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ColorPalette;
