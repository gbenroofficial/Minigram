import React from "react";
import { getAuth } from "firebase/auth";
import Profile from "../profile/profile";

const SelfProfile = () => {
  const auth = getAuth();
  const userId = auth.currentUser.uid;

  return <Profile id={userId} />;
};

export default SelfProfile;
