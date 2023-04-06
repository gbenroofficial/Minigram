/* eslint-disable react/prop-types */
import { getAuth } from "firebase/auth";
import {} from "firebase/firestore";
import { useState } from "react";
import { updateCardLike } from "../../../../services/firebase";

export default function CardActions({
  cardId,
  totalLikes,
  likedPhoto,
  handleFocus,
}) {
  const auth = getAuth();
  const userId = auth.currentUser.uid;

  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);

  async function handleLikeToggle() {
    await updateCardLike(userId, cardId);
    setToggleLiked((toggleLiked) => !toggleLiked);
    setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <svg
            onClick={handleLikeToggle}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tabIndex={0}
            className={`w-6 mr-4 select-none cursor-pointer focus:outline-none ${
              toggleLiked ? "fill-red-700" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <svg
            onClick={handleFocus}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                return;
              }
            }}
            className="w-6 text-black-light select-none cursor-pointer focus:outline-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tabIndex={0}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
      </div>
      <div className="p-2 py-0">
        <p className="font-bold">
          {likes === 1 ? `${likes} like` : `${likes} likes`}
        </p>
      </div>
    </>
  );
}
