import { React, useEffect } from "react";
import "../../styles/app.css";

import Suggestions from "../suggestions";
import Stories from "../story/stories";
import CardDeck from "../posts/cardDeck";

const Home = () => {
  useEffect(() => {
    document.title = "Instagram - home";
  }, []);
  return (
    <div className="w-[470px] xl:w-[853px] max-h-screen flex justify-between border-solid border-[0px]">
      <div className="w-[470px] border-solid border-[0px]">
        <Stories />
        <CardDeck />
      </div>
      <div className="hidden xl:flex w-[319px] h-screen  border-solid border-[0px]">
        <Suggestions />
      </div>
    </div>
  );
};
export default Home;
