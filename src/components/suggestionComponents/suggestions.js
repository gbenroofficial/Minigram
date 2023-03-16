import { getAuth } from "firebase/auth";
import React from "react";
import { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import SuggestedProfile from "./suggestedProfile";
import { getSuggestions, fetchUserDataByUserId } from "../../services/firebase";

const Suggestions = () => {
  const [profiles, setProfiles] = useState();
  useEffect(() => {
    async function suggestProfiles() {
      const loggedUserProfile = await fetchUserDataByUserId(user.uid);
      console.log("logged user: " + loggedUserProfile.emailAddress);
      const response = await getSuggestions(
        user.uid,
        loggedUserProfile.following
      );

      setProfiles(response);
    }

    suggestProfiles();
  }, []);

  console.log(profiles);
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div className="w-[319px] h-screen  border-solid border-[1px] border-gray-300 mt-[100px]">
      <div className="rounded flex flex-col">
        <div className="text-sm flex items-center align-items justify-between mb-2">
          <p className="font-semibold text-gray-400">Suggestions for you</p>
        </div>
        <div className="mt-4 grid gap-5"></div>
      </div>
    </div>
  );
};

export default Suggestions;
