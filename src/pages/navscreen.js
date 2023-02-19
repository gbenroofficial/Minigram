import { React, useEffect, useState } from "react";

import "../styles/app.css";
import Home from "../components/home";
import NavBar from "../components/navbar";
import { useContext } from "react";
import { logContext } from "../contexts/logStatus";

import { useNavigate } from "react-router-dom";
import CreateForm from "../components/createForm";
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

  return (
    <>
      <div className="h-screen block w-vw border-solid border-[0px]">
        <div className="z-10 border-t-2 fixed bottom-0 inset-x-0 w-full flex flex-wrap justify-items-stretch md:block md:left-0 md:inset-y-0 md:w-16 xl:w-[244px] h-[48px] md:h-screen border-solid md:border-r-2 md:border-y-0">
          <NavBar isCreate={isCreate} setIsCreate={setIsCreate} />
        </div>
        <div className="max-h-screen z-0 overflow-y-auto hover:overflow-scroll fixed flex justify-center left-0 md:left-16 xl:left-[244px] right-0 w-auto border-solid border-0">
          <Home />
        </div>
      </div>
      <CreateForm isCreate={isCreate} setIsCreate={setIsCreate} />
    </>
  );
};
export default NavScreen;
