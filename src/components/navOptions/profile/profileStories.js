import { useRef, React } from "react";
import ProfileStory from "./profileStory";
import profilestories from "./profilestories.json";

const ProfileStories = () => {
  const scrollRef = useRef();
  return (
    <div className="relative w-full">
      <div
        onScroll=""
        ref={scrollRef}
        className=" flex space-x-6 overflow-x-scroll w-full  border-gray-200 p-4 scroll-smooth scrollbar-hide"
      >
        {profilestories.map((story) => (
          <ProfileStory
            key={story.email}
            img={story.avatar}
            username={story.first_name}
          />
        ))}
      </div>
      <div className=" absolute top-0 p-4 w-full h-full flex justify-between z-10 items-center">
        <button
          onClick={() => {
            scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 300;
          }}
        ></button>
        <button
          onClick={() => {
            scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 300;
          }}
        ></button>
      </div>
    </div>
  );
};

export default ProfileStories;
