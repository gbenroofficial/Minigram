import { React, useEffect } from "react";
import "../styles/app.css";
import "../styles/sub.css";
import Suggestions from "./suggestions";
import Stories from "./stories";
import CardDeck from "./cardDeck";

const Home = () => {
  useEffect(() => {
    document.title = "Instagram - home";
  }, []);
  return (
    <div className="w-full h-auto flex flex-wrap justify-center border-solid border-1 border-gray-300">
      <div className="w-215 h-auto flex flex-wrap justify-center space-x-14-5 border-solid border-1 border-gray-300">
        <div className="w-118 h-auto border-solid border-1 border-gray-300">
          <Stories />
          <CardDeck />
        </div>
        <div className="w-82 h-screen border-solid border-1 border-gray-300">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};
export default Home;
