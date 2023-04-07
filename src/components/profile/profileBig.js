/* eslint-disable react/prop-types */
import { React, useEffect, useState } from "react";
import { ClickOutside } from "../functionalWraps/clickOutside";
import CardMedia from "../navOptions/home/postsDeck/cardMedia";

// eslint-disable-next-line react/prop-types
const ProfileBig = ({ card, setShow }) => {
  useEffect(() => {
    document.title = "Minigram - profile";
  }, []);
  console.log(card);

  const [photos, ,] = useState(card.medias);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const [num, setNum] = useState(0);

  function handleLeftClick() {
    setShowRight(true);
    if (num != 0) {
      setNum(num - 1);
      if (num == 1) {
        setShowLeft(false);
      }
    }
  }

  function handleRightClick() {
    setShowLeft(true);
    if (num != card.medias.length - 1) {
      setNum(num + 1);
      if (num == card.medias.length - 2) {
        setShowRight(false);
      }
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-20">
      <ClickOutside
        onClick={() => {
          setShow("");
        }}
        className="items-center flex justify-center"
      >
        <div className="relative justify-center flex h-[700px] w-[1000px] border-0 border-gray-400 border-solid">
          <div className="hidden md:flex md:flex-grow md:flex-shrink">
            <CardMedia src={photos[num]} />
          </div>
          <div className="w-[500px]"></div>
          <img
            className={`z-20 rounded-full h-10 absolute top-[290px] left-0 bg-gray-100 opacity-25 cursor-pointer ${
              showLeft ? "visible" : "invisible"
            }`}
            src="images/arrowIcons/arrowBack.avif"
            onClick={handleLeftClick}
          ></img>
          <img
            className={`z=20 rounded-full h-10 absolute top-[290px] right-0 bg-gray-100 opacity-20 cursor-pointer ${
              showRight ? "visible" : "invisible"
            }`}
            src="images/arrowIcons/arrowForward.avif"
            onClick={handleRightClick}
          ></img>
        </div>
      </ClickOutside>
    </div>
  );
};

export default ProfileBig;
