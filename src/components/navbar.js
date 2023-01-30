import React from "react";
import { useContext } from "react";
import { logContext } from "../contexts/logStatus";
import { getAuth, signOut } from "firebase/auth";
import "../styles/sub.css";
import "../styles/app.css";

const NavBar = () => {
  const auth = getAuth();
  const [value, setValue] = useContext(logContext);

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
    <div className="h-screen w-16 xl:w-60">
      <div className="h-173 w-16 xl:w-60 flex flex-wrap p-2 border-hidden border-1 border-gray-300">
        <div className="h-18-24 w-12 xl:w-56 mb-4-76 pb-4 pl-3 pt-6-24 border-hidden border-1 border-gray-300">
          <div className="hidden xl:flex flex-wrap items-center justify-center border-hidden border-1 w-25-6 h-7">
            <img src="/images/nav_logos/logo.png" className="mt-2 mb-2"></img>
          </div>
          <div className="w-8 h-7 xl:hidden">
            <img src="/images/nav_logos/ig.png" />
          </div>
        </div>

        <div className="w-16 xl:w-56 h-155 border-hidden border-1 border-gray-300">
          <div
            className="hover:bg-gray-100 h-12 w-16 xl:w-56 rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-16 xl:w-56 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/home.png" />
                </div>
                <div className="hidden xl:flex h-6">Home</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-16 xl:w-56 rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-16 xl:w-56 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/search.png" />
                </div>
                <div className="hidden xl:flex h-6">Search</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-16 xl:w-56 rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-16 xl:w-56 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/explore.png" />
                </div>
                <div className="hidden xl:flex h-6">Explore</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-16 xl:w-56 rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-16 xl:w-56 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/reels.png" />
                </div>
                <div className="hidden xl:flex h-6">Reels</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-16 xl:w-56 rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-16 xl:w-56 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/messages.png" />
                </div>
                <div className="hidden xl:flex h-6">Messages</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-16 xl:w-56 rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-16 xl:w-56 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/notifications.png" />
                </div>
                <div className="hidden xl:flex h-6">Notifications</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-16 xl:w-56 rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-16 xl:w-56 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img src="/images/nav_logos/create.png" />
                </div>
                <div className="hidden xl:flex h-6">Create</div>
              </div>
            </div>
          </div>
          <div
            className="hover:bg-gray-100 h-12 w-16 xl:w-56 rounded-full"
            href="#"
          >
            <div className="flex flex-wrap items-center h-12 w-16 xl:w-56 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 xl:mr-4">
                  <img />
                </div>
                <div className="hidden xl:flex h-6">Profile</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-16 xl:w-56 h-12 border-hidden border-1 border-gray-300 my-1 p-3">
          <div className="w-6 h-6 xl:mr-4">
            <img src="/images/nav_logos/more.png" />
          </div>
          <div className="hidden xl:flex h-6">More</div>
        </div>
      </div>
      <button
        onClick={handleLogOut}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
      >
        log out
      </button>
    </div>
  );
};

export default NavBar;
