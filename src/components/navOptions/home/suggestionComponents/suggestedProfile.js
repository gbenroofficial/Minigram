/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  addToFollowers,
  addToFollowing,
  isFollowing,
  removeFromFollowers,
  removeFromFollowing,
} from "../../../../services/firebase";

export default function SuggestedProfile({
  username,
  suggestedProfileId,
  loggedUserId,
}) {
  const [buttonStatus, setButtonStatus] = useState("Follow");

  async function handleFollow() {
    const follows = await isFollowing(loggedUserId, suggestedProfileId);

    if (!follows) {
      setButtonStatus("Following");
      await addToFollowing(loggedUserId, suggestedProfileId);
      await addToFollowers(suggestedProfileId, loggedUserId);
    } else {
      setButtonStatus("Follow");
      await removeFromFollowing(loggedUserId, suggestedProfileId);
      await removeFromFollowers(suggestedProfileId, loggedUserId);
    }
    console.log(buttonStatus);
  }
  return (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3 cursor-pointer"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `/images/avatars/default.png`;
          }}
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={handleFollow}
      >
        {buttonStatus}
      </button>
    </div>
  );
}
