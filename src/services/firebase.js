import {
  getDoc,
  doc,
  updateDoc,
  collection,
  query,
  getDocs,
  arrayUnion,
  arrayRemove,
  where,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export async function fetchUserDataByUserId(userId) {
  const docRef = doc(db, "users", userId);
  const userShot = await getDoc(docRef);
  const user = userShot.data();

  return user;
}

export async function isFollowing(userId, targetUserId) {
  const docRef = doc(db, "users", userId);
  const userShot = await getDoc(docRef); //need to add if usershot exist error handling
  const user = userShot.data(); //.data() converts queryshot type to document data

  if (user.following) {
    return user.following.includes(targetUserId);
  }
  return false;
}

//add target user to user following list
export async function addToFollowing(Userid, targetUserId) {
  const docRef = doc(db, "users", Userid);

  await updateDoc(docRef, {
    following: arrayUnion(targetUserId),
  });
}

//remove target user from user following list
export async function removeFromFollowing(Userid, targetUserId) {
  const docRef = doc(db, "users", Userid);

  await updateDoc(docRef, { following: arrayRemove(targetUserId) });
}

//remove target user from user's followers list
export async function removeFromFollowers(Userid, targetUserId) {
  const docRef = doc(db, "users", Userid);

  await updateDoc(docRef, { followers: arrayRemove(targetUserId) });
}

//add target user to user's followers list
export async function addToFollowers(Userid, targetUserId) {
  const docRef = doc(db, "users", Userid); //reference to the document

  await updateDoc(docRef, { followers: arrayUnion(targetUserId) }); //arrayunion adds to the array. updateDoc creates new array if not exist
}

export async function isFollowedBy(userId, targetUserId) {
  const docRef = doc(db, "users", userId);
  const userShot = await getDoc(docRef); //getDoc returns queryshot type
  const user = userShot.data(); //.data() converts queryshot type to document data
  if (user.followers) {
    return user.followers.includes(targetUserId);
  }
  return false;
}
export async function updateFollow(userId, targetUserId) {
  if (isFollowing(userId, targetUserId)) {
    removeFromFollowing(userId, targetUserId);
    removeFromFollowers(targetUserId, userId);
  } else {
    addToFollowing(userId, targetUserId);
    addToFollowers(targetUserId, userId);
  }
}

export async function getSuggestions(loggedUserId, followingArray) {
  let q;
  let profiles = [];
  if (followingArray?.length) {
    q = query(
      collection(db, "users"),
      where("userId", "not-in", [...followingArray, loggedUserId])
    );
  } else
    q = query(collection(db, "users"), where("userId", "!=", loggedUserId));

  const profilesShot = await getDocs(q); //returns querysnapshot with a list of document snapshot
  profilesShot.forEach((docSnap) => {
    //foreach method helps iterate through each document snapshot
    profiles.push(docSnap.data()); // .data() converts each docSnapshot to an object
  });

  return profiles;
}
