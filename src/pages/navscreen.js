/* eslint-disable prettier/prettier */

import { React, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/app.css";
import Home from "../components/navOptions/home";
import NavBar from "../components/navbar";
import { logContext } from "../contexts/logStatus";
import CreateForm from "../components/navOptions/modal/createForm";
import Profile from "../components/navOptions/profile";
import Messages from "../components/navOptions/messages";
import Explore from "../components/navOptions/explore";

const NavScreen = () => {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  const [loggedVal, ,] = useContext(logContext);
  const navigate = useNavigate();

  if (loggedVal == false) {
    navigate("/Login");
  }
  const [isCreate, setIsCreate] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [screen, setScreen] = useState("home");

  const setCreate = () => {
    setIsCreate(!isCreate);
  };

  return (
    <>
      <div className="h-screen block w-vw border-solid border-[0px]">
        <div className="max-h-screen z-0 overflow-y-auto hover:overflow-scroll fixed flex justify-center left-0 md:left-16 xl:left-[244px] right-0 w-auto border-solid border-0">
          {
            {
              home: <Home />,
              messages: <Messages />,
              profile: <Profile />,
              explore: <Explore />,
            }[screen]
          }
        </div>
        <div className="z-20 bg-white border-t-2 fixed bottom-0 inset-x-0 w-full flex flex-wrap justify-items-stretch md:block md:left-0 md:inset-y-0 md:w-16 xl:w-[244px] h-[48px] md:h-screen border-solid md:border-r-2 md:border-y-0">
          <NavBar setCreate={setCreate} />
        </div>
      </div>
      {isCreate && <CreateForm setCreate={setCreate} />}
    </>
  );
};
export default NavScreen;
