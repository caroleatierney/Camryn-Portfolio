import React from "react";
import ProposalDoc from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal.pdf";

const customTheme = {
  inlineWrapper:
    "text-slate-200 bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-0 py-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

export default function NavBarEvent() {
  return (
    <div className="bg-webPageBackground flex flex-row justify:center justify-evenly text-xs text-lightGrayText items-center w-full mx-auto">
      <a
        href={ProposalDoc}
        className="mt-5 text-white bg-mediumGrayText hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-2 py-1 regularMobile:px-4 regularMobile:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 leading-loose font-serif mx-auto text-xxxs smallMedMobile:text-xs regularMobile:text-xs tablet:text-xs laptop:text-lg desktop:text-xl largeScreen:text-2xl"
        target="_blank"
      >
        View Event Proposal pdf
      </a>
    </div>
  );
}
