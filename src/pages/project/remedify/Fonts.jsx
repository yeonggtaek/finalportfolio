import Image from "next/image";
import React from "react";

export const Fonts = () => {
  return (
    <div className="flex flex-col gap-[50px] w-[999px] bg-[#F1F1E7] rounded-[50px] px-[60px] py-[84px]">
      <div className="text-[#00A39B] text-[64px] font-bold">Fonts</div>
      <div className="flex flex-col gap-[100px]">
        <div className="flex gap-[40px]">
          <Image src="/font1.png" width={460} height={175} alt="font1" />
          <Image src="/font2.png" width={402} height={175} alt="font2" />
        </div>
        <div>
          <div className="text-[48px] font-bold">Why Poppins?</div>
          <div className="text-[20px] font-semibold">
            Poppins is a geometric sans-serif font, widely recognized for its
            clarity and modern aesthetic. Here’s why it was the perfect choice
            for our app:
            <ul>
              <li>
                Friendly & Approachable: The rounded design of Poppins gives a
                warm and inviting feel, making the interface more engaging.
              </li>
              <li>
                Easy Readability: As a sans-serif font, it maintains high
                legibility across various screen sizes, ensuring a smooth
                reading experience.
              </li>
              <li>
                Accessibility for All Ages: Especially beneficial for elderly
                users, Poppins’ clear letterforms reduce strain and enhance text
                comprehension.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fonts;