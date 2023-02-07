import React from "react";
import Card from "./card";

// import { onAuthStateChanged, getAuth } from "firebase/auth";
import { GetUserbyid } from "../services/actions";

const CardDeck = () => {
  // const auth = getAuth();

  GetUserbyid("2");

  return (
    <div className="w-[470px]">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardDeck;
