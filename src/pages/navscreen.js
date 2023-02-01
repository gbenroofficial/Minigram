import { React, useEffect } from "react";

import "../styles/app.css";
// import Home from "../components/home";
import NavBar from "../components/navbar";
import { useContext } from "react";
import { logContext } from "../contexts/logStatus";

import { useNavigate } from "react-router-dom";
const NavScreen = () => {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  const [value, ,] = useContext(logContext);
  const navigate = useNavigate();

  if (value == false) {
    navigate("/Login");
  }
  return (
    <div className="flex flex-wrap flex-row justify-center w-vw md:items-start h-screen">
      <div className="fixed bottom-0 inset-x-0 w-full flex flex-wrap justify-items-stretch md:block md:left-0 md:inset-y-0 md:w-16 xl:w-[244px] h-[48px] md:h-screen border-solid border-[1px] border-gray-300">
        <NavBar />
      </div>
      <div className="flex-grow h-auto border-solid border-[1px] border-gray-300"></div>
    </div>
  );
};
export default NavScreen;
