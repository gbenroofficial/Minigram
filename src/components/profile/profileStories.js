import { useRef, React, useState } from "react";
import ProfileStory from "./profileStory";
import profilestories from "./profilestories.json";

const ProfileStories = () => {
  const scrollRef = useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const onScroll = () => {
    if (scrollRef.current.scrollLeft > 0) {
      setShowLeft(true);
    } else {
      setShowLeft(false);
    }

    if (
      scrollRef.current.scrollLeft ==
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth
    ) {
      setShowRight(false);
    } else {
      setShowRight(true);
    }
  };
  return (
    <div className="relative w-4/5">
      <div
        onScroll={onScroll}
        ref={scrollRef}
        className="flex space-x-6 overflow-x-scroll w-full  border-gray-200 p-4 scroll-smooth scrollbar-hide"
      >
        {profilestories.map((story) => (
          <ProfileStory
            key={story.email}
            img={story.avatar}
            username={story.first_name}
          />
        ))}
      </div>
      <div className="absolute top-0 p-5 w-full h-full flex justify-between z-10 items-center">
        <img
          className={`rounded-full h-10 absolute left-0 bg-gray-100 opacity-25 cursor-pointer ${
            showLeft ? "visible" : "invisible"
          }`}
          src="images/arrowIcons/arrowBack.avif"
          onClick={() => {
            scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 100;
          }}
        ></img>
        <img
          className={`rounded-full h-10 absolute right-0 bg-gray-100 opacity-25 cursor-pointer ${
            showRight ? "visible" : "invisible"
          }`}
          src="images/arrowIcons/arrowForward.avif"
          onClick={() => {
            scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 100;
          }}
        ></img>

        <button></button>
      </div>
    </div>
  );
};

export default ProfileStories;
