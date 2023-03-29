import { getAuth } from "firebase/auth";
import React from "react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import SuggestedProfile from "./suggestedProfile";
import {
  getSuggestions,
  fetchUserDataByUserId,
} from "../../../../services/firebase";

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
  /* if (profiles) {
    console.log(profiles);
  } */

  const auth = getAuth();
  const user = auth.currentUser;
  if (profiles) {
    return (
      <div className="w-[319px] h-screen  mt-[100px]">
        <div className="rounded flex flex-col">
          <div className="text-sm flex items-center align-items justify-between mb-2">
            <p className="font-semibold text-gray-400">Suggestions for you</p>
          </div>
        </div>
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.userId}
            username={profile.username}
            suggestedProfileId={profile.userId}
            loggedUserId={user.uid}
          ></SuggestedProfile>
        ))}
      </div>
    );
  } else return <Skeleton count={1} height={150} className="mt-5" />;
};

export default Suggestions;
