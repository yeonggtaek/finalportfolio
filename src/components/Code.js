import Image from "next/image";
import React from "react";

export const Code = () => {
  return (
    <div>
      <div className="overview-title text-[64px] max-xl:text-[40px] text-[#007972] font-bold justify-center flex mt-10 mb-20">
        Medication Library
      </div>
      <div className="flex max-xl:flex-col justify-space w-full gap-[130px] max-xl:gap-[60]">
        <Image
          className="flex-1 flex w-[600px] !h-[1463px]"
          src="/code.png"
          width={600}
          height={1460}
          alt="code"
        />
        <div className="flex flex-col flex-1 text-[20px] gap-[10]">
          <div className="text-[32px] font-bold max-xl:text-[20px]">How It Coded </div>
          <div className="w-[140px]">
          <a
            href="https://github.com/yeenathan/Asclepius/blob/main/app/pages/medLibrary.component.js"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white text-[16px] font-bold rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Link to file
          </a>
          </div>
          <div className="text-[24px] max-xl:text-base font-bold">Core Components</div>
          <ul>
            <li>
              <span className="pl-4 font-bold max-xl:text-base">
                1. ArchiveModal
              </span>
              <ul className="pl-14 list-disc max-xl:text-base">
                <li>
                  A modal that asks users if they want to archive or delete a
                  medication.
                </li>
                <li>
                  Uses dynamic props (actionWord, description) to change text
                  based on the medication’s state.
                </li>
                <li>
                  Styled with a white background and rounded corners for
                  clarity.
                </li>
                <li>
                  Two buttons:Cancel (closes modal), Confirm (Archive or Delete)
                </li>
              </ul>
            </li>
            <li>
              <span className="pl-4 font-bold max-xl:text-base">
                2. MedButton 
              </span>
              <ul className="pl-14 list-disc max-xl:text-base">
                <li>
                  Displays medication name, icon, and a button to archive or
                  delete.
                </li>
                <li>Uses useState to manage modal visibility.</li>
                <li>
                  Implements conditional styling for different medication
                  states.
                </li>
              </ul>
            </li>
            <li>
              <span className="pl-4 font-bold max-xl:text-base">
                3. MedFolder 
              </span>
              <ul className="pl-14 list-disc max-xl:text-base">
                <li>Fetches and displays medications.</li>
                <li>Uses AsyncStorage to persist medication data.</li>
                <li>
                  Implements tab switching between "Current Medications" and
                  "Archived Medications."
                </li>
              </ul>
            </li>
            <li>
              <span className="pl-4 font-bold max-xl:text-base">
                4. InfoScreen 
              </span>
              <ul className="pl-14 list-disc max-xl:text-base">
                <li>Shows detailed medication information.</li>
                <li>Features a "View More" expandable description.</li>
                <li>Allows editing medication details via EditInfoScreen.</li>
              </ul>
            </li>
            <li>
              <span className="pl-4 font-bold max-xl:text-base">
                5. EditReminderScreen & EditInfoScreen
              </span>
              <ul className="pl-14 list-disc max-xl:text-base">
                <li>
                  Enable users to update dosage, reminders, and directions.{" "}
                </li>
                <li>Use Select and Datepicker for structured input.</li>
              </ul>
            </li>
          </ul>
          <div className="text-[32px] font-bold max-xl:text-base">Why Coded It this way</div>
          <ul className="pl-14 list-disc max-xl:text-base">
            <li>
              Reusability → ArchiveModal is a reusable component that handles
              both archive & delete actions.
            </li>
            <li>
              Performance Optimization → Using AsyncStorage prevents unnecessary
              API calls.
            </li>
            <li>
              Better UX → Themed colors, proper spacing, and clear confirmation
              messages improve usability.
            </li>
            <li>
              State Management Simplicity → Used useState to manage modal
              visibility instead of complex state management.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
