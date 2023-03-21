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
  useEffect(() => {
    const auth = getAuth();
    const loggedUser = auth.currentUser;
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
          <Card key={card.cardId} cardMedias={card.medias} />
        ))}
        <img className="h-7" src="images/arrowIcons/arrowForward.avif"></img>
        <img className="h-7" src="images/arrowIcons/arrowBack.avif"></img>
      </div>
    );
  }
};

export default CardDeck;
