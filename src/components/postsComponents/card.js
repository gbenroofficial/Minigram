import React from "react";
import CardHeader from "./cardHeader";
import CardFooter from "./cardFooter";
import CardMedia from "./cardMedia";

// eslint-disable-next-line react/prop-types
const Card = ({ cardMedias }) => {
  let avatar;
  let timePosted = "1h";
  let userName = "username";
  let caption = "caption";

  cardMedias;
  return (
    <div className="w-full h-[788px] block mb-[60px]">
      <div className="w-full">
        <CardHeader
          avatar={avatar}
          timePosted={timePosted}
          userName={userName}
        />
      </div>
      <div className="flex flex-wrap items-center w-full h-[584px] border-solid border-[1px] border-gray-300 bg-black">
        <CardMedia src={cardMedias[1]} caption="caption" />
      </div>
      <div className="w-full h-[146px] border-solid border-[1px] border-gray-300">
        <CardFooter userName={userName} caption={caption} />
      </div>
    </div>
  );
};

export default Card;
