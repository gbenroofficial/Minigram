import React from "react";
import Card from "./card";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
// import { isFollowing, isFollowedBy } from "../../services/firebase";
// import { addToFollowers, addToFollowing, removeFromFollowers, removeFromFollowing } from "../../services/firebase";
// import { onAuthStateChanged, getAuth } from "firebase/auth";
import { fetchUserProfileByDocId } from "../../services/firebase";

const CardDeck = () => {
  useEffect(() => {
    const auth = getAuth();
    const loggedUser = auth.currentUser;
    async function getUser() {
      const loggedUserData = await fetchUserProfileByDocId(loggedUser.uid);
      console.log(loggedUserData);
    }

    getUser();
  }, []);

  return (
    <div className="w-[470px]">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardDeck;
