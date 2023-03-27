/* eslint-disable react/prop-types */
import { useRef } from "react";
import CardHeader from "./cardHeader";
import CardFooter from "./cardFooter";
import CardMedia from "./cardMedia";
import { useState } from "react";
import CardActions from "./cardActions";
import CardComments from "./commentSection/cardComments";

// eslint-disable-next-line react/prop-types
const Card = ({ cardData, hasUserLiked }) => {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  const [mediaNum, setMediaNum] = useState(0);
  let avatar;
  let timePosted = "1h";
  let userName = cardData.ownerUserName;
  let caption = cardData.caption;

  function handleLeftClick() {
    if (mediaNum != 0) {
      setMediaNum(mediaNum - 1);
    } else {
      setMediaNum(cardData.medias.length - 1);
    }
  }
  function handleRightClick() {
    if (mediaNum != cardData.medias.length - 1) {
      setMediaNum(mediaNum + 1);
    } else {
      setMediaNum(0);
    }
  }

  return (
    <div className="w-full h-[788px] block mb-[60px]">
      <div className="w-full">
        <CardHeader
          avatar={avatar}
          timePosted={timePosted}
          userName={userName}
        />
      </div>
      <div className="relative flex flex-wrap items-center w-full h-[584px] border-solid border-[1px] border-gray-300 bg-black rounded-lg">
        <CardMedia src={cardData.medias[mediaNum]} caption="caption" />
        <img
          className="h-10 absolute top-[290px] right-0 bg-gray-100 opacity-20"
          src="images/arrowIcons/arrowForward.avif"
          onClick={handleRightClick}
        ></img>
        <img
          className="h-10 absolute top-[290px] left-0 bg-gray-100 opacity-25"
          src="images/arrowIcons/arrowBack.avif"
          onClick={handleLeftClick}
        ></img>
      </div>
      <CardActions
        cardId={cardData.cardId}
        totalLikes={cardData.likedBy.length}
        likedPhoto={hasUserLiked}
        handleFocus={handleFocus}
      />
      <div className="w-full h-[40px] border-solid border-[1px] border-gray-300">
        <CardFooter userName={userName} caption={caption} />
      </div>
      <CardComments
        cardId={cardData.cardId}
        comments={cardData.comments}
        cardData={cardData}
      />
    </div>
  );
};

export default Card;
