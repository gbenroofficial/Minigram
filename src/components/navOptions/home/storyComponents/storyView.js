/* eslint-disable react/prop-types */
import React from "react";
import { ClickOutside } from "../../../functionalWraps/clickOutside";
const StoryView = ({ showStory }) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-black/60 z-20">
      <ClickOutside
        className="flex justify-center items-center space-x-6 bg-gray-800"
        onClick={showStory}
      >
        <div className="w-[200px] h-[720px] border-white border-2"></div>
        <div className="w-[200px] h-[720px] border-white border-2"></div>
        <div className="w-[400px] h-[720px] border-white border-2"></div>
        <div className="w-[200px] h-[720px] border-white border-2"></div>
        <div className="w-[200px] h-[720px] border-white border-2"></div>
      </ClickOutside>
    </div>
  );
};

export default StoryView;
