import Image from "next/image";
import React from "react";

export const CodeChallenge = () => {
  return (
    <div>
      <div className="overview-title text-[64px] max-xl:text-[20px] text-[#007972] font-bold justify-start flex mt-10 mb-20 max-xl:mb-10">
        Code Challenge/Solution
      </div>
      <div className="flex flex-col">
        <div className="text-[36px] font-bold mb-10 max-xl:mb-5 max-xl:text-[20px]">
          Handling Both Archive & Delete in One Modal
        </div>
        <div className="flex flex-col gap-10 max-xl: gap-5 text-[24px] font-semibold">
          <div>
            <span className="text-[32px] font-bold max-xl:text-[20px]">Challenge:</span>
            <ul className="max-xl:text-base">
              The user needs to confirm two different actions (archiving &
              deleting) but creating separate modals would be inefficient.
            </ul>
          </div>
          <div>
            <span className="text-[32px] font-bold max-xl:text-[20px]">Solution:</span>
            <ul className="list-disc max-xl:text-base">
              <li>
                Used dynamic props (actionWord, description) to make
                ArchiveModal flexible.
              </li>
              <li>
                If med.isArchive is true, the modal asks for deletion
                confirmation; otherwise, it asks for archiving confirmation.
              </li>
              <li>
                This reduces redundant code and ensures better maintainability.
              </li>
            </ul>
          </div>
          <div className="text-[36px] font-bold max-xl:text-[20px]">
            Persisting Medications Using AsyncStorage
          </div>
          <div>
            <span className="text-[32px] font-bold max-xl:text-base">Challenge:</span>
            <ul className="list-disc max-xl:text-base">
              The app should remember medications even after closing and
              reopening.
            </ul>
          </div>
          <div>
            <span className="text-[32px] font-bold max-xl:text-base ">Solution:</span>
            <ul className="list-disc max-xl:text-base">
              <li>Used AsyncStorage to save medication data persistently.</li>
              <li>
                When the app loads, it retrieves stored medication data in
                useFocusEffect.
              </li>
            </ul>
          </div>
          <div className="text-[36px] font-bold max-xl:text-[20px]">
            Managing Multiple Modals Efficiently
          </div>
          <div>
            <span className="text-[32px] font-bold max-xl:text-[20px  ]">Challenge:</span>
            <ul className="max-xl:text-base">
              A bottom sheet (showArchiveBottomModal) for selecting
              archive/delete.
            </ul>
            <ul className="max-xl:text-base">
              A confirmation modal (showArchiveModal) for user confirmation.
            </ul>
          </div>
          <div>
            <span className="text-[32px] font-bold max-xl:text-[20px]">Solution:</span>
            <ul className="list-disc max-xl:text-base ">
              <li>Used useState hooks for each modal</li>
              <li>js</li>
              <li>
                <Image
                  className="flex-1 flex"
                  src="/medcode.png"
                  width={704}
                  height={60}
                  alt="medcode"
                />
              </li>
              <li>
                const [showArchiveBottomModal, setShowArchiveBottomModal] =
                useState(false); const [showArchiveModal, setShowArchiveModal] =
                useState(false);
              </li>
              <li>toggleArchiveBottomModal opens the bottom sheet first.</li>
              <li>
                setShowArchiveModal(true) opens the confirmation modal when the
                user clicks Archive/Delete.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
