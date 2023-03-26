import { React, useEffect } from "react";

const Explore = () => {
  useEffect(() => {
    document.title = "Minigram - explore";
  }, []);
  return <div> Explore </div>;
};

export default Explore;
