/* eslint-disable react/prop-types */

import { React } from "react";

const ProfileCardDeck = ({ userCards }) => {
  if (userCards) {
    return (
      <div className="w-4/5">
        <div className="grid grid-cols-3 grid-flow-row w-full gap-1">
          {userCards.map((card) => (
            <img
              key={card.cardId}
              className="col-span-1 object-fill"
              src={card.medias[0]}
            ></img>
          ))}
        </div>
      </div>
    );
  }
};

export default ProfileCardDeck;
