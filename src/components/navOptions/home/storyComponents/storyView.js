/* eslint-disable react/prop-types */
import React from "react";
import { ClickOutside } from "../../../functionalWraps/clickOutside";
import CardMedia from "../postsDeck/cardMedia";
const StoryView = ({ showStory }) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-black/60 z-20">
      <ClickOutside
        className="flex justify-center items-center space-x-5 bg-black py-[15px] px-[20px] rounded-md"
        onClick={showStory}
      >
        <div className="w-[200px] h-[360px] border-white border-2 text-white flex justify-center items-center">
          <CardMedia
            src="../../../../images/testImages/meee.jpg"
            fit="object-fill"
          />
        </div>
        <div className="w-[200px] h-[360px] border-white border-2 text-white flex justify-center items-center">
          <CardMedia
            src="../../../../images/testImages/meee.jpg"
            fit="object-fit"
          />
        </div>
        <div className="w-[400px] h-[720px] border-white border-2 text-white flex justify-center items-center">
          <CardMedia
            src="../../../../images/testImages/meee.jpg"
            fit="object-fit"
          />
        </div>
        <div className="w-[200px] h-[360px] border-white border-2 text-white flex justify-center items-center">
          <CardMedia
            src="../../../../images/testImages/meee.jpg"
            fit="object-fit"
          />
        </div>
        <div className="w-[200px] h-[360px] border-white border-2 text-white flex justify-center items-center">
          <CardMedia
            src="../../../../images/testImages/meee.jpg"
            fit="object-fit"
          />
        </div>
      </ClickOutside>
    </div>
  );
};

export default StoryView;
