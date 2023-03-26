import { React, useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    document.title = "Minigram - profile";
  }, []);
  return <div>profile</div>;
};

export default Profile;
