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
    <div className="h-screen w-61">
      <div className="h-194 w-61 flex flex-wrap p-2 border-hidden border-1 border-gray-300">
        <div className="h-18-24 w-55 mb-4-76 pb-4 pl-3 pt-6-24 border-hidden border-1 border-gray-300">
          <div className="flex flex-wrap items-center justify-center border-hidden xl:flex border-1 w-25-6 h-7">
            <img
              src="/images/login_images/logo.png"
              className="mt-2 mb-2"
            ></img>
          </div>
        </div>

        <div className="w-55 h-155 border-hidden border-1 border-gray-300">
          <div className="hover:bg-gray-100 h-12 w-55 rounded-full" href="#">
            <div className="flex flex-wrap items-center h-12 w-55 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 mr-4">
                  <img src="/images/nav_logos/home.png" />
                </div>
                <div className="hidden xl:flex h-6">Home</div>
              </div>
            </div>
          </div>
          <div className="hover:bg-gray-100 h-12 w-55 rounded-full" href="#">
            <div className="flex flex-wrap items-center h-12 w-55 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 mr-4">
                  <img src="/images/nav_logos/search.png" />
                </div>
                <div className="hidden xl:flex h-6">Search</div>
              </div>
            </div>
          </div>
          <div className="hover:bg-gray-100 h-12 w-55 rounded-full" href="#">
            <div className="flex flex-wrap items-center h-12 w-55 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 mr-4">
                  <img src="/images/nav_logos/explore.png" />
                </div>
                <div className="hidden xl:flex h-6">Explore</div>
              </div>
            </div>
          </div>
          <div className="hover:bg-gray-100 h-12 w-55 rounded-full" href="#">
            <div className="flex flex-wrap items-center h-12 w-55 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 mr-4">
                  <img src="/images/nav_logos/reels.png" />
                </div>
                <div className="hidden xl:flex h-6">Reels</div>
              </div>
            </div>
          </div>
          <div className="hover:bg-gray-100 h-12 w-55 rounded-full" href="#">
            <div className="flex flex-wrap items-center h-12 w-55 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 mr-4">
                  <img src="/images/nav_logos/messages.png" />
                </div>
                <div className="hidden xl:flex h-6">Messages</div>
              </div>
            </div>
          </div>
          <div className="hover:bg-gray-100 h-12 w-55 rounded-full" href="#">
            <div className="flex flex-wrap items-center h-12 w-55 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 mr-4">
                  <img src="/images/nav_logos/notifications.png" />
                </div>
                <div className="hidden xl:flex h-6">Notifications</div>
              </div>
            </div>
          </div>
          <div className="hover:bg-gray-100 h-12 w-55 rounded-full" href="#">
            <div className="flex flex-wrap items-center h-12 w-55 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 mr-4">
                  <img src="/images/nav_logos/create.png" />
                </div>
                <div className="hidden xl:flex h-6">Create</div>
              </div>
            </div>
          </div>
          <div className="hover:bg-gray-100 h-12 w-55 rounded-full" href="#">
            <div className="flex flex-wrap items-center h-12 w-55 border-hidden border-1 border-gray-300 my-1 p-3">
              <div className="flex items-center h-6 w-full">
                <div className="w-6 h-6 mr-4">
                  <img />
                </div>
                <div className="hidden xl:flex h-6">Profile</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-55 h-12 border-solid border-1 border-gray-300 my-1 p-3">
          <div className="w-6 h-6 mr-4">
            <img src="/images/nav_logos/more.png" />
          </div>
          <div className="">more</div>
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
