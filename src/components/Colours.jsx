import React from "react";
import { ColorPalette } from "./ColorPalette";

export const Colours = () => {
  const colours = [
    {
      title: "Vivid Orange",
      colorCode: "#FF9825",
      variant: "Primary",
      description:
        "Bold and energetic, grabs attention for important alerts like medication reminders.",
    },
    {
      title: "Persian Green",
      colorCode: "#00a39b",
      variant: "Primary",
      description:
        "A refreshing and balanced color that represents health and wellness.",
    },
    {
      title: "Soft Orange",
      colorCode: "#FDC26A",
      variant: "Secondary",
      description:
        "Warm and approachable, used for gentle prompts and background elements.",
    },
    {
      title: "Pale Aqua",
      colorCode: "#BBD2DB",
      variant: "Secondary",
      description:
        "Calm and soothing, evokes a sense of tranquility and reliability, helping users feel at ease.",
    },
    {
      title: "Seashell",
      colorCode: "#FBF1EA",
      variant: "Tertiary",
      description: "A soft, neutral tone that adds warmth and clarity.",
    },
  ];
  return (
    <div className="flex flex-col gap-[50px] w-[999px] max-xl:w-auto bg-[#F1F1E7] rounded-[50px] px-[60px] py-[84px] max-xl:p-5">
      <div className="text-[#00A39B] text-[64px] font-bold">Colours</div>
      <div className="flex flex-col gap-[100px]">
        <div className="flex max-xl:flex-wrap gap-5">
          {colours.map((color) => (
            <ColorPalette
              colorCode={color.colorCode}
              title={color.title}
              variant={color.variant}
              description={color.description}
            />
          ))}
        </div>
        <div className="text-[20px]">
          Our app’s color palette is designed to be both vibrant and calming for
          user experience:
          <ul>
            <li>
              <span className="font-bold">Vivid Orange & Soft Orange:</span> Add
              a lively and energetic touch, bringing a sense of positivity to
              the interface.
            </li>
            <li>
              <span className="font-bold">Pale Aqua & Persian Green:</span>{" "}
              Create a calming and reassuring atmosphere, helping users feel
              comfortable.
            </li>
            <li>
              <span className="font-bold">Neutral Seashell:</span> Provides
              simplicity and cleanliness, ensuring primary and secondary colors
              stand out without overwhelming the user.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
