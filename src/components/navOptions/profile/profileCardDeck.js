/* eslint-disable react/prop-types */

import { React } from "react";

const ProfileCardDeck = ({ userCards }) => {
  if (userCards) {
    return (
      <div>
        <div className="grid grid-cols-3 gap-5">
          {userCards.map((card) => {
            const src = card.medias[0];

            <div className="col-span-2 overflow-hidden h-64 w-64">
              <img key={card.cardId} src={src} alt="" />
            </div>;
          })}
        </div>
      </div>
    );
  }
};

export default ProfileCardDeck;
