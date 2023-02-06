import React from "react";
import { useState, useContext } from "react";
import { getAuth } from "firebase/auth";
import { collection, query } from "firebase/firestore";
import { db } from "../lib/firebase";

const useFollowing = (userId) => {
  const auth = getAuth();
  const q = query(collection(db, "users"), where(""))

  return <div></div>;
};

export default useFollowing;
