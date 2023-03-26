/* eslint-disable react/prop-types */
import React from "react";

const CardFooter = ({ userName, caption }) => {
  return (
    <div className="pl-2 pt-2 pb-1">
      <span className="mr-1 font-bold">{userName}</span>
      <span className="">{caption}</span>
    </div>
  );
};

export default CardFooter;
