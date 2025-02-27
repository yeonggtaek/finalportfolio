import Image from "next/image";
import React from "react";

export const Code = () => {
  return (
    <div>
      <div className="overview-title text-[64px] text-[#007972] font-bold justify-center flex mt-10 mb-20">
        Medication Library
      </div>
      <div className="flex justify-space w-full gap-[130px]">
        <Image
          className="flex-1 flex min-w-[600px] !h-[1463px]"
          src="/code.png"
          width={600}
          height={1460}
          alt="code"
        />
        <div className="flex flex-col flex-1 text-[20px] gap-[10]">
          <div className="text-[32px] font-bold">How I Coded It</div>
          <a
  href="https://github.com/yeenathan/Asclepius/blob/main/app/pages/medLibrary.component.js"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[15px] font-bold hover:text-blue-500"
>
  Link to file
</a>
          <div className="text-[24px] font-bold">Core Components</div>
          <ul>
            <li>
              <span className="pl-4 font-bold">
                1. ArchiveModal (Reusable Confirmation Modal)
              </span>
              <ul className="pl-14 list-disc">
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
            <span className="pl-4 font-bold">2. MedButton (Medication List Item)</span> 
            <ul className="pl-14 list-disc">
            <li>Displays medication name,
              icon, and a button to archive or delete.</li> 
              <li>Uses useState to manage modal visibility.</li>
              <li>Implements conditional styling for different medication states.</li>
              </ul>
            </li>
            <li>
            <span className="pl-4 font-bold">3. MedFolder (Medication List Screen)</span>
              <ul className="pl-14 list-disc">
              <li>Fetches and displays medications.</li>
              <li>Uses AsyncStorage to persist medication data.</li>
              <li>Implements tab switching between "Current Medications" and
              "Archived Medications."</li>
              </ul>
            </li>
            <li>
            <span className="pl-4 font-bold">4. InfoScreen (Medication Details)</span>
              <ul className="pl-14 list-disc">
              <li>Shows detailed medication information.</li>
              <li>Features a "View More" expandable description.</li>
              <li>Allows editing medication details via EditInfoScreen.</li>
              </ul>
            </li>
            <li>
            <span className="pl-4 font-bold">5. EditReminderScreen & EditInfoScreen</span>
            <ul className="pl-14 list-disc">
            <li>Enable users to update dosage, reminders, and directions. </li>
            <li>Use Select and Datepicker for structured input.</li>
            </ul>
            </li>
          </ul>
          <div className="text-[32px] font-bold">Why I Coded It This Way</div>
          <ul className="pl-14 list-disc">
          <li>Reusability → ArchiveModal is a reusable component that handles both archive & delete actions.</li>
          <li>Performance Optimization → Using AsyncStorage prevents unnecessary API calls.</li>
          <li>Better UX → Themed colors, proper spacing, and clear confirmation messages improve usability.</li>
          <li>State Management Simplicity → Used useState to manage modal visibility instead of complex state management.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
