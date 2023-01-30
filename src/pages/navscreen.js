import { React, useEffect } from "react";
import "../styles/sub.css";
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
    <div className="flex flex-wrap flex-row justify-center w-vw items-start bg-gray-50">
      <div className="w-16 xl:w-60 h-screen border-solid border-1 border-gray-300">
        <NavBar />
      </div>
      <div className="flex-grow h-auto border-solid border-1 border-gray-300"></div>
    </div>
  );
};
export default NavScreen;
