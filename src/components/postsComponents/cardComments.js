/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CardComments = ({ comments: allComments }) => {
  // eslint-disable-next-line no-unused-vars
  const [comments, setComments] = useState(allComments);
  const [commentsSlice, setCommentsSlice] = useState(3);

  const showNextComments = () => {
    setCommentsSlice(commentsSlice + 3);
  };
  return (
    <div>
      <>
        <div className="p-4 pt-1 pb-4">
          {comments.slice(0, commentsSlice).map((item) => (
            <p key={`${item.comment}-${item.displayName}`} className="mb-1">
              <NavLink to={`/p/${item.displayName}`}>
                <span className="mr-1 font-bold">{item.displayName}</span>
              </NavLink>
              <span>{item.comment}</span>
            </p>
          ))}
          {comments.length >= 3 && commentsSlice < comments.length && (
            <button
              className="text-sm text-gray-base mb-1 cursor-pointer focus:outline-none"
              type="button"
              onClick={showNextComments}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  showNextComments();
                }
              }}
            >
              View more comments
            </button>
          )}
          <p className="text-gray-base uppercase text-xs mt-2">ago</p>
        </div>
      </>
    </div>
  );
};

export default CardComments;
