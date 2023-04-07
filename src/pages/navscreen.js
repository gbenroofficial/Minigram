/* eslint-disable prettier/prettier */

import { React, useEffect, useState, useContext } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import "../styles/app.css";
import Home from "../components/navOptions/home/home";
import NavBar from "../components/navbar";
import { logContext } from "../contexts/logStatus";
import CreateForm from "../components/navOptions/modal/createForm";
import Profile from "../components/profile/profile";
import { profileContext } from "../contexts/profileContext";

const NavScreen = () => {
  useEffect(() => {
    document.title = "Minigram";
  }, []);
  const [loggedVal, ,] = useContext(logContext);
  const [IsShowBig, setIsShowBig] = useState(false);

  const navigate = useNavigate();

  if (loggedVal == false) {
    navigate("/Login");
  }
  const [isCreate, setIsCreate] = useState(false);
  // eslint-disable-next-line no-unused-vars
  // const [screen, setScreen] = useState("home");

  const setCreate = () => {
    setIsCreate(!isCreate);
  };

  return (
    <>
      <div className="relative h-screen block w-vw border-solid border-[0px]">
        <div className="h-screen scrollbar-hide z-0 overflow-y-auto hover:overflow-scroll fixed flex justify-center left-0 md:left-16 xl:left-[244px] right-0 w-auto border-solid border-0">
          <NavBar setCreate={setCreate} />
          <Routes>
            <Route
              path="/*"
              element={
                <profileContext.Provider value={[IsShowBig, setIsShowBig]}>
                  <Home />
                </profileContext.Provider>
              }
            ></Route>
            <Route
              path="/Profile/:id"
              exact
              element={
                <profileContext.Provider value={[IsShowBig, setIsShowBig]}>
                  <Profile />
                </profileContext.Provider>
              }
            ></Route>
          </Routes>
        </div>

        {isCreate && <CreateForm setCreate={setCreate} />}
      </div>
    </>
  );
};
export default NavScreen;
