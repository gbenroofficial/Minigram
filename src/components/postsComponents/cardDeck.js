import React from "react";
import Card from "./card";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
// import { isFollowing, isFollowedBy } from "../../services/firebase";
// import { addToFollowers, addToFollowing, removeFromFollowers, removeFromFollowing } from "../../services/firebase";
// import { onAuthStateChanged, getAuth } from "firebase/auth";
import {
  fetchUserDataByUserId,
  getFollowingCards,
} from "../../services/firebase";

const CardDeck = () => {
  const [cards, setCards] = useState();
  const auth = getAuth();
  const loggedUser = auth.currentUser;
  useEffect(() => {
    async function getUser() {
      const loggedUserData = await fetchUserDataByUserId(loggedUser.uid);

      // console.log(loggedUserData);
      const { following } = loggedUserData;
      const result = await getFollowingCards(following);
      setCards(result);
    }

    getUser();
  }, []);
  // console.log(cards);

  if (cards) {
    return (
      <div className="w-[470px]">
        {cards.map((card) => (
          <Card
            loggedUser={loggedUser}
            key={card.cardId}
            cardData={card}
            hasUserLiked={card.likedBy.includes(loggedUser.uid)}
          />
        ))}
      </div>
    );
  }
};

export default CardDeck;
