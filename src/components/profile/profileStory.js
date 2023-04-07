/* eslint-disable react/prop-types */
const ProfileStory = ({ img, username }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="h-[70px] w-[70px]  rounded-full bg-gray-200 p-[1.5px]">
        <div className="bg-white rounded-full">
          <img className="rounded-full" src={img} alt="" />
        </div>
      </div>
      <p className="text-xs w-20 truncate text-center">{username}</p>
    </div>
  );
};
export default ProfileStory;
