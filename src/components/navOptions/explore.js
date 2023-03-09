import { React, useEffect } from "react";

const Explore = () => {
  useEffect(() => {
    document.title = "Instagram - explore";
  }, []);
  return <div> Explore </div>;
};

export default Explore;
