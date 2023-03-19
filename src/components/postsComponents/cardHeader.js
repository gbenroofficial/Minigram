import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardHeader = ({ avatar, userName, timePosted }) => {
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <NavLink to={`/p/${userName}`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={avatar}
            alt={`${userName} profile picture`}
          />
          <p className="font-semibold pr-[6px]">{userName}</p>
          <br className="w-5" />
          <p className="font-light">{timePosted}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default CardHeader;
