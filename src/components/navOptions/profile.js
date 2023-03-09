import { React, useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    document.title = "Instagram - profile";
  }, []);
  return <div>profile</div>;
};

export default Profile;
