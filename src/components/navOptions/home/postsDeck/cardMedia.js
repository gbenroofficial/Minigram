/* eslint-disable react/prop-types */
import React from "react";

const CardMedia = ({ src, caption }) => {
  const ext = src.split(".").pop();
  let isImage;
  if (ext == "jpg" || ext == "png" || ext == "jpeg") {
    isImage = true;
    // console.log(isImage);
  } else {
    isImage = false;
  }
  return (
    <div className="">
      {isImage ? (
        <img src={src} alt={caption} className="object-cover" />
      ) : (
        <video className="z-10" src={src} alt={caption} controls></video>
      )}
    </div>
  );
};

export default CardMedia;
