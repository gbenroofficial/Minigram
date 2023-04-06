import React from "react";

// eslint-disable-next-line react/prop-types
const Story = ({ img, username }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="h-[50px] w-[50px]  rounded-full bg-gray-200 p-[1.5px] mb-2">
        <div className="bg-white rounded-full">
          <img className="rounded-full" src={img} alt="" />
        </div>
      </div>
      <p className="text-xs w-20 truncate text-center">{username}</p>
    </div>
  );
};
export default Story;
