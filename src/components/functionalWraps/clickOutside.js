/* eslint-disable react/prop-types */
import React from "react";
import { useRef, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const ClickOutside = ({
  onClick,
  children,
  exceptionRef,
  className,
}) => {
  useEffect(() => {
    document.addEventListener("mousedown", handleClick); //on mount
    return () => {
      document.removeEventListener("mousedown", handleClick); //clean up on unmount
    };
  }, []); //[]= no updates for render
  const wrapRef = useRef();

  const handleClick = (event) => {
    let clickedInside;
    if (exceptionRef) {
      clickedInside =
        wrapRef.current.contains(event.target) ||
        exceptionRef.current.contains(event.target);
    } else {
      clickedInside = wrapRef.current.contains(event.target);
    }
    if (clickedInside) {
      return;
    }
    onClick();
  };

  return (
    <div ref={wrapRef} className={`${className || ""}`}>
      {children}
    </div>
  );
};
