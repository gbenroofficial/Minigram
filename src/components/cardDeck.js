import React from "react";
import Card from "./card";
import { useEffect } from "react";

// import { onAuthStateChanged, getAuth } from "firebase/auth";
import { GetUserbyid } from "../services/actions";

const CardDeck = () => {
  // const auth = getAuth();
  useEffect(() => {
    const userData = GetUserbyid("2");
    console.log(userData);
  });

  return (
    <div className="w-[470px]">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardDeck;
