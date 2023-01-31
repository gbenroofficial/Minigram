import { React, useEffect } from "react";
import "../styles/app.css";

import Suggestions from "./suggestions";
import Stories from "./stories";
import CardDeck from "./cardDeck";

const Home = () => {
  useEffect(() => {
    document.title = "Instagram - home";
  }, []);
  return (
    <div className="w-full h-auto flex flex-wrap justify-center border-solid border-[1px] border-gray-300">
      <div className="w-[860px] h-auto flex flex-wrap justify-center space-x-[58px] border-solid border-[1px] border-gray-300">
        <div className="w-[860px] h-auto border-solid border-[1px] border-gray-300">
          <Stories />
          <CardDeck />
        </div>
        <div className="w-[328px] h-screen border-solid border-[1px] border-gray-300">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};
export default Home;
