import React from "react";
import { useContext, useState } from "react";
import { logContext } from "../contexts/logStatus";
import { getAuth, signOut } from "firebase/auth";

import "../styles/app.css";

const NavBar = () => {
  const auth = getAuth();
  const [value, setValue] = useContext(logContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setValue(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(value);

  return (
    <div className="h-screen w-12 xl:w-[244px]">
      <div className="h-[692px] w-12 xl:w-[244px] flex flex-wrap p-2 border-hidden border-[1px] border-gray-300">
        <div className="h-18-24 w-12 xl:w-[220px] mb-4-76 pb-4 pl-3 pt-6-24 border-hidden border-[1px] border-gray-300">
          <div className="hidden xl:flex flex-wrap items-center justify-center border-hidden border-[1px] w-[102.4px] h-7">
            <img src="/images/nav_logos/logo.png" className="mt-2 mb-2"></img>
          </div>
          <div className="w-8 h-7 xl:hidden">
            <img src="/images/nav_logos/ig.png" />
          </div>
        </div>

        <div className="w-12 xl:w-[220px] h-[620px] border-hidden border-[1px] border-gray-300">
          <div
            className="hover:bg-gray-100 h-12 w-12 xl:w-[220px] rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/home.png" />
                </div>
                <div className="hidden xl:flex h-6">Home</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-12 xl:w-[220px] rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/search.png" />
                </div>
                <div className="hidden xl:flex h-6">Search</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-12 xl:w-[220px] rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/explore.png" />
                </div>
                <div className="hidden xl:flex h-6">Explore</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-12 xl:w-[220px] rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/reels.png" />
                </div>
                <div className="hidden xl:flex h-6">Reels</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-12 xl:w-[220px] rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/messages.png" />
                </div>
                <div className="hidden xl:flex h-6">Messages</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-12 xl:w-[220px] rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/notifications.png" />
                </div>
                <div className="hidden xl:flex h-6">Notifications</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-12 xl:w-[220px] rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/create.png" />
                </div>
                <div className="hidden xl:flex h-6">Create</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-12 xl:w-[220px] rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img />
                </div>
                <div className="hidden xl:flex h-6">Profile</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative hover:bg-gray-100 rounded-full flex items-center w-12 xl:w-[220px] h-12 border-hidden border-[1px] border-gray-300 my-1 p-3"
          href="#"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-6 xl:mr-4">
            <img src="/images/nav_logos/more.png" />
          </div>
          <div className="hidden xl:flex h-6">More</div>
          {isOpen && (
            <div className="absolute -top-[320px] w-[270px] -ml-[2px] h-[400] bg-white grid grid-rows-6 justify-items-center place-content-evenly">
              <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                Settings
              </div>
              <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                Saved
              </div>
              <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                Switch appearance
              </div>
              <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                Your activity
              </div>
              <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                Report a problem
              </div>
              <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                Switch accounts
              </div>
              <div
                className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle"
                onClick={handleLogOut}
              >
                Log out
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={handleLogOut}
        className="bg-blue-500 hover:bg-blue-700 text-white text-xs rounded h-3 w-6"
      >
        log out
      </button>
    </div>
  );
};

export default NavBar;
