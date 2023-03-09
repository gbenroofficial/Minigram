import { React, useEffect } from "react";

const Reels = () => {
  useEffect(() => {
    document.title = "Instagram - reels";
  }, []);
  return <div>Reels</div>;
};

export default Reels;
