/* eslint-disable react/prop-types */
import { React, useEffect, useState } from "react";
import ProfileStories from "./profileStories";
import ProfileCardDeck from "./profileCardDeck";
import { getUserCards } from "../../services/firebase";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [userCards, setUserCards] = useState();

  const { id } = useParams();

  useEffect(() => {
    document.title = "Minigram - profile";

    async function getCards() {
      const cards = await getUserCards(id);
      setUserCards(cards);
    }

    getCards();
  }, []);

  if (userCards) {
    return (
      <div>
        <div className="w-[550px] sm:w-[700px] md:w-[1000px] lg:[1500px] md:mx-5 p-10  h-screen">
          <div className="flex flex-wrap justify-center md:grid sm:grid-cols-3 md:grid-cols-4 md:gap-4 md:ml-24">
            <div className="mr-10 avatar">
              <div className="w-36 h-36">
                <img
                  src="../images/testimages/esteemedTeddy.jpeg"
                  className="rounded-full md:ml-14"
                />
              </div>
            </div>
            <div className="col-span-2">
              <span className=" text-gray-700 text-2xl mr-4">DannyBoy</span>
              <div className="cursor-pointer inline text-sm text-gray-700 font-semibold  p-1 px-2 border border-gray-200  rounded mr-4">
                Edit Profile
              </div>
              <div className="sm:col-span-2 md:col-span-3  mt-4 flex">
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

          <div className="flex flex-wrap w-full justify-center">
            <ProfileStories />
            <hr className="border-gray-500 mt-6 w-4/5 mb-1" />

            <ProfileCardDeck userCards={userCards} />
          </div>
        </div>
      </div>
    );
  }
};
export default Profile;
