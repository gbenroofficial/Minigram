import { React, useEffect } from "react";
import ProfileStories from "./profileStories";
const Profile = () => {
  useEffect(() => {
    document.title = "Minigram - profile";
  }, []);
  return (
    <div>
      <div className="max-w-6xl mx-5 p-10 xl:mx-auto">
        <div className="grid grid-cols-4 gap-4 ml-24">
          <div className="avatar">
            <div className="w-36 h-36">
              <img
                src="images/testimages/esteemedTeddy.jpeg"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="col-span-2 ">
            <span className=" text-gray-700 text-2xl mr-4">DannyBoy</span>
            <div className="cursor-pointer inline text-sm text-gray-700 font-semibold  p-1 px-2 border border-gray-200  rounded mr-4">
              Edit Profile
            </div>
            <div className="col-span-3  mt-4 flex">
              <div>
                <span className="font-semibold">200</span> posts
              </div>
              <div className="ml-4">
                <span className="font-semibold">200</span> followers
              </div>
              <div className="ml-4">
                <span className="font-semibold">200</span> following
              </div>
            </div>
            <div className="col-span-3">
              <div className=" pt-3">
                <span className="text-lg font-semibold text-gray-700 ">
                  show me a 10ft wall
                </span>
              </div>
              <div className=" pt-3">
                <p className="text-base  text-blue-700 "></p>
                <p className="text-base font-medium text-blue-700 "></p>
              </div>
            </div>
          </div>
        </div>
        <ProfileStories />
      </div>
    </div>
  );
};

export default Profile;
