// import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SuggestedProfile({ followedBy }) {
  return !followedBy ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src=""
          alt=""
          onError={(e) => {
            e.target.src = `/images/avatars/default.png`;
          }}
        />
        <Link to="">
          <p className="font-bold text-sm"></p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick=""
      >
        Follow
      </button>
    </div>
  ) : null;
}
