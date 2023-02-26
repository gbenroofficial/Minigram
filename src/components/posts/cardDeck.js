import React from "react";
import Card from "./card";
import { useEffect } from "react";

// import { onAuthStateChanged, getAuth } from "firebase/auth";
import { GetUserbyid } from "../../services/firebase";

const CardDeck = () => {
  // const auth = getAuth();
  useEffect(() => {
    async function getUser() {
      const userData = await GetUserbyid("2");
      console.log(userData);
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
