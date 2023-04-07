/* eslint-disable react/prop-types */

import { React, useContext, useState } from "react";
// import ProfileBig from "./profileBig";
import { profileContext } from "../../contexts/profileContext";
import ProfileBig from "./profileBig";

const ProfileCardDeck = ({ userCards }) => {
  const [isShowBig, setIsShowBig] = useContext(profileContext);
  const [cardData, setCardData] = useState();
  console.log(isShowBig);
  function setShow(data) {
    setCardData(data);
    setIsShowBig(!isShowBig);
    console.log(data);
  }
  if (userCards) {
    return (
      <div className="w-4/5">
        <div className="grid grid-cols-3 grid-flow-row w-full gap-1">
          {userCards.map((card) => (
            <>
              <img
                key={card.cardId}
                className="col-span-1 object-fill cursor-pointer"
                src={card.medias[0]}
                onClick={() => {
                  setShow(card);
                }}
              ></img>
            </>
          ))}
        </div>
        {isShowBig && <ProfileBig card={cardData} setShow={setShow} />}
      </div>
    );
  }
};

export default ProfileCardDeck;
