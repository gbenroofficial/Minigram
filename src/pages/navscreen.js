import { React } from "react";
import "../styles/app.css";
import "../styles/sub.css";
import Home from "../components/home";
import NavBar from "../components/navbar";

const NavScreen = () => {
  return (
    <div className="flex flex-wrap justify-center w-vw items-center bg-gray-50">
      <div className="w-61 h-screen border-solid border-1 border-gray-300">
        <NavBar />
      </div>
      <div className="flex-grow h-screen border-solid border-1 border-gray-300">
        <Home />
      </div>
    </div>
  );
};
export default NavScreen;
