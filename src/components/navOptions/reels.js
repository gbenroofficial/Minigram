import { React, useEffect } from "react";

const Reels = () => {
  useEffect(() => {
    document.title = "Minigram - reels";
  }, []);
  return <div>Reels</div>;
};

export default Reels;
