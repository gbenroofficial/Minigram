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

//add target user to user following list
export async function addToFollowing(Userid, targetUserId) {
  const docRef = doc(db, "users", Userid);
  await updateDoc(docRef, { following: arrayUnion(targetUserId) });
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

export async function isFollowing(userId, targetUserId) {
  const docRef = doc(db, "users", userId);
  const userShot = await getDoc(docRef); //need to add if usershot exist error handling
  const user = userShot.data();

  return user.following.includes(targetUserId);
}
export async function isFollowedBy(userId, targetUserId) {
  const docRef = doc(db, "users", userId);
  const userShot = await getDoc(docRef); //getDoc returns queryshot type
  const user = userShot.data(); //.data() converts queryshot type to document data

  return user.followers.includes(targetUserId); //user.followers.includes also works. will come back to edit
}

export async function getSuggestions(loggedUserId, followingArray) {
  let q;
  if (followingArray?.length) {
    q = query(
      collection(db, "users"),
      where("userId", "not-in", [...followingArray, loggedUserId])
    );
  } else
    q = query(collection(db, "users"), where("userId", "!=", loggedUserId));

  const profilesShot = await getDocs(q);
  const profiles = profilesShot.data();

  return profiles;
}
