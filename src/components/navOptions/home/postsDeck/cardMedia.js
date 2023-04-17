/* eslint-disable react/prop-types */
import React from "react";

const CardMedia = ({ src, caption, className, style }) => {
  const ext = src.split(".").pop();
  let isImage;
  if (ext == "jpg" || ext == "png" || ext == "jpeg") {
    isImage = true;
    // console.log(isImage);
  } else {
    isImage = false;
  }
  return (
    <div className="flex items-center w-full h-full">
      {isImage ? (
        <img src={src} alt={caption} className={className} style={style} />
      ) : (
        <video className="z-10" src={src} alt={caption} controls></video>
      )}
    </div>
  );
};

export default CardMedia;
