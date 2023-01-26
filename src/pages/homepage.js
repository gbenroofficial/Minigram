import { React, useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    document.title = "Instagram - home";
  }, []);
  return <div> i am Homepage</div>;
};
export default Homepage;
